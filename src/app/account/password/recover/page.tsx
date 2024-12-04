import { HomeContainer } from '@/components/content'
import React from 'react'
import ForgetBtn from './ForgetBtn'
import { recoverPassword } from '@/lib/actions/recoverPassword'

const Forgot = () => {
    return (
        <HomeContainer>
            <div className='flex justify-center'>
                <form action={recoverPassword} className='md:w-96 space-y-6 bg-white/50 rounded-md shadow-xl p-4 backdrop-blur-sm'>
                    <input type="email" name='email' placeholder='example@gmail.com' className='w-full text-sm py-2 px-4 outline-none border rounded-md' />

                    <div className='space-y-1'>
                        <ForgetBtn />
                        <p className='text-xs italic '>A recovery mail will be sent to your mail to help you reset your password.</p>
                    </div>
                </form>
            </div>
        </HomeContainer>
    )
}

export default Forgot