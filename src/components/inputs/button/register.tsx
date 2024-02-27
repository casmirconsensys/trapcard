'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';

export const RegisterButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      disabled={pending}
      className='bg-black w-full text-sm py-2 rounded-lg flex justify-center'
    >
      {pending ? <img src="https://s2.svgbox.net/loaders.svg?ic=tail-spin&color=fff" width="20" height="20" /> : ' Register'}
    </button>
  );
};
