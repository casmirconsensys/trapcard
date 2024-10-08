'use client';

import siteUrl from '@/utils/siteUrl';
import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import React, { FormEvent, useEffect, useState } from 'react';

export const PaymentForm = () => {
  const [message, setMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: siteUrl('/'),
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occurred.');
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (!stripe) {
      return;
    }

    // remove this...not working in app directory
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe]);

  return (
    <div className=' w-full flex items-center h-screen justify-center'>
      <form
        id='payment-form'
        className='max-w-lg w-full'
        onSubmit={handleSubmit}
      >
        <PaymentElement id='payment-element' options={{ layout: 'tabs' }} />
        <button
          disabled={isLoading || !stripe || !elements}
          id='submit'
          className='w-full my-6 bg-blue-600 text-white rounded-md py-4 font-bold'
        >
          <span id='button-text'>{isLoading ? 'Loading...' : 'Pay now'}</span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id='payment-message'>{message}</div>}
      </form>
    </div>
  );
};
