'use client';

import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useFormStatus } from 'react-dom';

export const LoginButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      className={`greenToPurple py-2 px-6 rounded-xl ${pending ? 'w-[97.61px] flex justify-center' : ''} `}
      disabled={pending}
    >
      {pending ? <img src="https://s2.svgbox.net/loaders.svg?ic=tail-spin&color=fff" width="20" height="20" /> : 'Log in'}
    </button>
  );
};

export const NavBarLoginBtn = () => {
  const router = useRouter();
  return (
    <button
      className='rounded-xl py-2.5 font-semibold font-mont greenToPurple px-3 hover:scale-[0.98] duration-200 transition'
      onClick={() => router.push('/account/login')}
    >
      Login
    </button>
  );
};

export const NavBarLogoutBtn = () => {
  const [pending, setPending] = useState(false);

  const supabase = createClient();
  const router = useRouter();

  const handleLogout = async () => {
    setPending(true);
    const { error } = await supabase.auth.signOut();

    if (error) {
      setPending(false);
      console.error(error);
      return;
    }

    setPending(false);
    router.push('/');
    return router.refresh()
  };

  return (
    <button
      className={`rounded-xl py-2.5 font-semibold font-mont ${pending ? 'flex justify-center md:w-[87.34px]' : ''}  greenToPurple mx-auto px-3 hover:scale-[0.98] duration-200 transition`}
      onClick={handleLogout}
      disabled={pending}
    >
      {pending ? <img src="https://s2.svgbox.net/loaders.svg?ic=tail-spin&color=fff" width="20" height="20" /> : 'Log out'}
    </button>
  );
};
