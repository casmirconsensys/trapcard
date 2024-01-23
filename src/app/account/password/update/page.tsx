import { updatePassword } from '@/lib/actions/updatePassword'
import React from 'react'
import { HomeContainer } from '@/components/content'
import UpdateBtn from './UpdateBtn'

const Update = () => {
  return (
    <HomeContainer>
      <div className='flex justify-center items-center'>
        <form action={updatePassword} className='md:w-96 space-y-6 bg-white/50 rounded-md shadow-xl p-4 backdrop-blur-sm'>
          <input type="email" name='email' placeholder='example@gmail.com' className='w-full text-sm py-2 px-4 outline-none border rounded-md' />
          <input type="password" name='password' placeholder='password' className='w-full text-sm py-2 px-4 outline-none border rounded-md' />
          <UpdateBtn />
        </form>
      </div>
    </HomeContainer>
  )
}

export default Update