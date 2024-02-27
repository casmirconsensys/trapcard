'use client'
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import React from "react";

interface CopyProps {
    referral_code: string;
    // isCopied: boolean;
}

export default function CopyReferral({ referral_code }: CopyProps) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
        try {
            navigator.clipboard.writeText(referral_code);
            setIsCopied(true);

            // Reset the icon after a short delay
            setTimeout(() => {
                setIsCopied(false);
            }, 1500);
        } catch (error) {
            console.error('Unable to copy text: ', error);
        }
    };
    return (<div className='w-full bg-white rounded-lg overflow-hidden flex items-center'>
        <input type={'text'} name='referral_link' value={`${referral_code || ''}`} className='py-2 flex-1 border-r outline-none px-4 text-black' placeholder='Password' disabled />
        <button className='flex justify-center w-10' onClick={handleCopyClick}>
            <FontAwesomeIcon icon={isCopied ? faCheck : faCopy} className={`h-4 w-4 text-black ${isCopied ? 'text-teal-600' : ''}`} />
        </button>
    </div>);
}