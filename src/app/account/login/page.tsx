import { HomeContainer } from '@/components/content';
import { LoginButton } from '@/components/inputs/button';
import { PasswordInput } from '@/components/inputs/input';
import { logIn } from '@/lib/actions';
import React from 'react';

export default function Login({
  searchParams,
}: {
  searchParams: { msg: string };
}) {
  return (
    <HomeContainer>
      <div className='pb-40'>
        <div className='max-w-lg w-full bg-black/80 backdrop-blur text-white p-4 rounded-2xl mx-auto'>
          <h2 className='text-4xl mt-4'>Login</h2>
          {searchParams?.msg && (
            <p className='text-white text-center'>{searchParams.msg}</p>
          )}
          <form action={logIn}>
            <div className='flex flex-col gap-y-1 my-4'>
              <label htmlFor='email' className='text-xs text-cyan-400'>
                Email
              </label>
              <input
                type='email'
                name='email'
                className='py-2 px-4 bg-white rounded-lg text-black'
                placeholder='Email'
              />
            </div>
            <div className='flex flex-col gap-y-1 w-full'>
              <label htmlFor='password' className='text-xs text-cyan-400'>
                Password
              </label>
              <PasswordInput />
            </div>
            <button className='text-xs text-gray-300'>Forgot password?</button>
            <div className='mt-6'>
              <LoginButton />
            </div>
          </form>
        </div>
      </div>
    </HomeContainer>
  );
}
