
import { HomeContainer } from '@/components/content'
import React from 'react'
import ForgetBtn from '../recover/ForgetBtn'
import { recoverPassword } from '@/lib/actions/recoverPassword'

const Forgot = () => {
    return (
        <HomeContainer>
            <form action={recoverPassword} className='flex justify-center'>
                <div className='md:w-96 space-y-6 bg-white/50 rounded-md shadow-xl p-4 backdrop-blur-sm'>
                        <input type="email" placeholder='example@gmail.com' className='w-full text-sm py-2 px-4 outline-none border rounded-md' />
                        <ForgetBtn />
                </div>
            </form>
        </HomeContainer>
    )
}

export default Forgot