import CopyReferral from '@/components/CopyReferral';
import { HomeContainer } from '@/components/content';
import siteUrl from '@/utils/siteUrl';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function Referral() {
  const supabase = createClient(cookies());

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.id) {
    return redirect('/account/login');
  }

  const { data, error } = await supabase
    .from('referrals')
    .select('referral_code')
    .eq('owner_user_id', user.id);

  const [{ referral_code }] = data as Array<{ referral_code: string }>;

  return (
    <HomeContainer>
      {/* <Confetti width={500} height={500} /> */}
      <div className='pb-40 pt-40 md:pt-0'>
        <div className='max-w-lg w-full bg-black/80 backdrop-blur text-white p-4 rounded-2xl gap-x-8 mx-auto'>
          <h3 className='font-semibold mt-4 text-xl'>360 Beta program </h3>
          <p className='text-sm mt-6 mb-5'>
            <span className='text-teal-500'>$20/Month = $250*</span> a year vs
            referral code discount{' '}
            <span className='text-teal-500'>$99/year</span> early
          </p>
          <div>
            <div className='flex flex-col gap-y-1 mb-4'>
              <label htmlFor='referral_link' className='text-xs text-cyan-400'>
                Referral Url
              </label>
              <CopyReferral
                referral_code={`${siteUrl(`/account/signup?referral_code=${referral_code}`) ||
                  ''
                  }`}
              />
            </div>
            <div className='w-full pt-4'>
              <button className='w-full py-2 rounded-md bg-teal-600 text-white'>
                <Link href={'/payment'}>Make Payment</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </HomeContainer>
  );
}
