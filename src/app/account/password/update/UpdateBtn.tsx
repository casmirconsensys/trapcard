'use client'
import React from 'react'
import { useFormStatus } from 'react-dom';

const UpdateBtn = () => {
    const { pending } = useFormStatus();

    return (
        <button
            type='submit'
            className='w-full bg-teal-500 text-white py-2 rounded-md font-semibold text-sm disabled:bg-teal-300 disabled:cursor-progress flex justify-center'
            disabled={pending}
        >
            {
                pending ?
                    <img src="https://s2.svgbox.net/loaders.svg?ic=tail-spin&color=fff" width="20" height="20" />
                    :
                    'Update Password'
            }
        </button>
    )
}

export default UpdateBtn