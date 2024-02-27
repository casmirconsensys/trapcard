import React from "react";
import Stripe from "stripe";
import { PaymentForm, ElementsWrapper } from "@/components/inputs/payment";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY ?? "");

export default async function Payment({
  searchParams,
}: {
  searchParams: { tier: number };
}) {
  const supabase = createClient(cookies());
  if (!searchParams.tier) {
    return redirect("/pricing");
  }

  if (isNaN(searchParams.tier) || searchParams.tier <= 0) {
    return redirect("/pricing");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.id) {
    return redirect("/account/login");
  }

  function tierAmt(tier: number) {
    if (tier === 1) {
      return 50000;
    } else if (tier === 2) {
      return 175000;
    } else if (tier === 3) {
      return 250000;
    } else if (tier === 4) {
      return 350000;
    } else {
      return 0;
    }
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: tierAmt(Number(searchParams.tier)),
    currency: "usd",
    receipt_email: user.email,
  });

  const clientSecret = paymentIntent.client_secret;

  if (!clientSecret) {
    throw Error("No payment intent. Please try again");
  }

  return (
    <>
      <ElementsWrapper clientSecret={clientSecret}>
        <PaymentForm />
      </ElementsWrapper>
    </>
  );
}
