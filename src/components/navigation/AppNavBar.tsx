import Link from 'next/link';
import React from 'react';
import { NavBarLoginBtn, NavBarLogoutBtn, ThemeButton } from '../inputs/button';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export const AppNavBar = async () => {
  const supabase = createClient(cookies());
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <nav
      className='flex items-center justify-between p-4 shadow-md lg:px-8 md:fixed w-full bg-white'
      aria-label='Global'
    >
      <div className='flex lg:flex-1'>
        <Link href='/' className='-m-1.5 p-1.5'>
          <span className='sr-only'>Trapcard</span>
          <img
            className='md:h-8 md:w-auto w-32 backdrop-blur-[1px]'
            src='/images/TrapCard.png'
            alt='Trapcard_LOGO'
          />
        </Link>
      </div>

      <div className='flex md:gap-x-8 gap-x-3 items-center'>
        {/* <ThemeButton /> */}
        {session?.user ? <Link href={'/account/referral'} className='rounded-xl bg-white py-2.5 px-3 font-semibold font-mont'>
          Referral Code
        </Link> : ''}

        {session?.user ? <NavBarLogoutBtn /> : <NavBarLoginBtn />}
      </div>
    </nav>
  );
};
