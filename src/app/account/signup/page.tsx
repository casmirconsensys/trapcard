import { HomeContainer } from '@/components/content';
import { RegisterButton } from '@/components/inputs/button';
import { PasswordInput } from '@/components/inputs/input';
import { signUp } from '@/lib/actions';
import Link from 'next/link';
import React from 'react';

export default function Signup({
  searchParams,
}: {
  searchParams: { msg: string; referral_code: string };
}) {
  return (
    <HomeContainer>
      <section className='pb-40 md:px-20'>
        <div className='rounded-3xl shadow-lg greenToPurple p-6 max-w-xl mx-auto'>
          <h3 className='md:text-4xl text-3xl font-black mb-5'>Get early access</h3>
          {searchParams.msg ? (
            <>
              <p className='mt-4 p-4 text-black text-center'>
                🎊🎉🎊🎉🎊🎉🎊🎉🎊
                <br />
                {searchParams.msg}
              </p>
              <Link
                href={'/account/login'}
                className='w-full text-sm font-bold'
              >
                <button className='w-full bg-black py-2.5 rounded-lg'>
                  Sign in
                </button>
              </Link>
            </>
          ) : (
            <form action={signUp}>
              <div className='space-y-2 text-black'>
                <input
                  type='email'
                  name='email'
                  className='bg-white py-2.5 rounded-lg px-4 w-full mb-5'
                  placeholder='you@example.com'
                  required
                />
                <PasswordInput />
                <input
                  type='text'
                  className='bg-white py-2.5 rounded-lg px-4 w-full mb-5'
                  name='referral_code'
                  defaultValue={searchParams.referral_code || ''}
                  placeholder='Got a referral code?'
                  disabled={!!searchParams?.referral_code}
                />
              </div>
              <div className='w-full mt-2'>
                <RegisterButton />
                {/* <button type='button' className='text-gray-300 text-sm mt-4'>
                  Signed Up before? Check your status
                </button> */}
              </div>
            </form>
          )}
        </div>
      </section>
    </HomeContainer>
  );
}
