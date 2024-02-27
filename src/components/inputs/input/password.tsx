'use client';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

export const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='w-full bg-white rounded-lg overflow-hidden flex items-center'>
      <input
        type={showPassword ? 'text' : 'password'}
        name='password'
        className='py-2 outline-none px-4 w-full  text-black'
        placeholder='••••••••'
      />
      <button
        type='button'
        onClick={() => setShowPassword(!showPassword)}
        className='flex justify-center w-10'
      >
        <FontAwesomeIcon
          icon={showPassword ? faEyeSlash : faEye}
          className={'h-4 w-4 text-black'}
        />
      </button>
    </div>
  );
};
