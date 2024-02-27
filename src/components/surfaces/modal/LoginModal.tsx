'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Modal } from './Modal';
import { useFormState, useFormStatus } from 'react-dom';

export const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { pending } = useFormStatus();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        type='button'
        onClick={openModal}
        className='rounded-xl py-2.5 font-semibold font-mont greenToPurple px-3 hover:scale-[0.98] duration-200 transition'
      >
        Log in
      </button>

      <Modal closeModal={closeModal} isOpen={isOpen}>
        <div className='max-w-2xl w-full flex bg-black/80 backdrop-blur text-white p-4 rounded-2xl gap-x-8 mx-auto'>
          <div className=' w-1/2'>
            <h2 className='text-4xl mt-4'>Login</h2>
            {/* {state?.msg && (
              <p className='text-white text-center'>{state.msg}</p>
            )} */}
            <form>
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
              <div className='flex flex-col gap-y-1'>
                <label htmlFor='password' className='text-xs text-cyan-400'>
                  Password
                </label>
                <div className='w-full bg-white rounded-lg overflow-hidden flex items-center'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    className='py-2 border-r outline-none px-4  text-black'
                    placeholder='••••••••'
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className='flex justify-center w-full'
                  >
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      className={'h-4 w-4 text-black'}
                    />
                  </button>
                </div>
              </div>
              <button className='text-xs text-gray-300'>
                Forgot password?
              </button>
              <div className='mt-6'>
                <button
                  type='submit'
                  className='greenToPurple py-2 px-6 rounded-xl'
                  disabled={pending}
                >
                  {pending ? 'Loading...' : 'Log in'}
                </button>
              </div>
            </form>
          </div>
          <div className='w-1/2'>
            <h3 className='font-semibold mt-4 text-xl'>Share the love</h3>
            <p className='text-sm mt-6 mb-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              facere delectus eveniet voluptate adipisci voluptates ut?
            </p>
            <div>
              <div className='flex flex-col gap-y-1 mb-4'>
                <label htmlFor='' className='text-xs text-cyan-400'>
                  Referral Url
                </label>
                <div className='w-full bg-white rounded-lg overflow-hidden flex items-center'>
                  <input
                    type={'text'}
                    name=''
                    id=''
                    value={'360nft.app/er23rx'}
                    className='py-2 flex-1 border-r outline-none px-4 text-black'
                    placeholder='Password'
                  />
                  <button className='flex justify-center w-10'>
                    <FontAwesomeIcon
                      icon={faCopy}
                      className={'h-4 w-4 text-black'}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
