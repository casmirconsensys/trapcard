// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import Stripe from "npm:stripe@14.11.0";
import { supabaseClient } from "../_utils/supabaseClient.ts";

const stripe = new Stripe(Deno.env.get("STRIPE_API_KEY") ?? "", {
  httpClient: Stripe.createFetchHttpClient(),
});

// This is needed in order to use the Web Crypto API in Deno.
const cryptoProvider = Stripe.createSubtleCryptoProvider();

Deno.serve(async (req) => {
  const signature = req.headers.get("Stripe-Signature");

  // First step is to verify the event. The .text() method must be used as the
  // verification relies on the raw request body rather than the parsed JSON.
  const body = await req.text();
  let receivedEvent;
  try {
    receivedEvent = await stripe.webhooks.constructEventAsync(
      body,
      signature!,
      Deno.env.get("STRIPE_WEBHOOK_SIGNING_SECRET")!,
      undefined,
      cryptoProvider,
    );
  } catch (err) {
    console.error(err);
    return new Response(err.message, { status: 400 });
  }

  // Secondly, we use this event to query the Stripe API in order to avoid
  // handling any forged event. If available, we use the idempotency key.
  const requestOptions =
    receivedEvent.request && receivedEvent.request.idempotency_key
      ? {
        idempotencyKey: receivedEvent.request.idempotency_key,
      }
      : {};

  let retrievedEvent;
  try {
    retrievedEvent = await stripe.events.retrieve(
      receivedEvent.id,
      requestOptions,
    );
    console.log("retrievedEvent: ", retrievedEvent);
  } catch (err) {
    console.error(err);
    return new Response(err.message, { status: 400 });
  }

  // Handle the event
  switch (receivedEvent.type) {
    case "payment_intent.succeeded": {
      const paymentIntentSucceeded = receivedEvent.data.object;
      console.log("PaymentIntentSucceeded: ", paymentIntentSucceeded);
      const { receipt_email, amount, currency, id, status } =
        paymentIntentSucceeded;

      if (!receipt_email) {
        return new Response("Receipt email not found.", { status: 404 });
      }

      // expiration date - A year from now
      const currentDate = new Date();
      const oneYearFromNow = new Date(currentDate);
      oneYearFromNow.setFullYear(currentDate.getFullYear() + 1);
      const expiration_date = oneYearFromNow.toISOString();

      const { data: new_payment_data, error: new_payment_err } =
        await supabaseClient.from("payments")
          .insert({
            amount,
            currency,
            customer_email: receipt_email,
            expiration_date,
            payment_status: status,
            stripe_payment_intent_id: id,
          }).select();

      if (new_payment_err) {
        console.error("Failed to add new payment", new_payment_err);
        return new Response("Failed to add new payment", { status: 400 });
      }

      console.log("New payment added: ", new_payment_data);
      return Response.json(new_payment_data, { status: 201 });
    }

    default: {
      console.log(`Unhandled event type: ${receivedEvent.type}`);
      break;
    }
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/stripe-webhooks' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
