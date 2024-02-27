'use client';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { ReactNode } from 'react';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ''
);

export const ElementsWrapper = ({
  clientSecret,
  children,
}: {
  clientSecret: string;
  children: ReactNode;
}) => {
  return (
    <Elements
      options={{ clientSecret, appearance: { theme: 'stripe' } }}
      stripe={stripePromise}
    >
      {children}
    </Elements>
  );
};
