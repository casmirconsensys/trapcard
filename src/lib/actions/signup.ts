'use server';

import { createClient } from '@/utils/supabase/server';
import { AuthError } from '@supabase/supabase-js';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';

interface Referral {
  id: number;
  user_id: string;
  referral_code: string;
  used_by_user_id: string | null;
  created_at: string;
}

export async function signUp(formData: FormData) {
  const origin = headers().get('origin');
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const referral_code = formData.get('referral_code') as string;
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error, data } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.error(error);
    if (error instanceof AuthError) {
      return redirect(`/account/signup/?msg=${error.message}`);
    }
    return redirect(
      '/account/signup/?msg=Signup failed. Please double-check your information and try again.'
    );
  }

  if (data.user && data.user.id) {
    // Generate a random 8-character alphanumeric code
    const new_referral_code = Math.random()
      .toString(36)
      .substr(2, 8)
      .toUpperCase();
    const { error } = await supabase.from('referrals').insert({
      owner_user_id: data.user.id,
      referral_code: new_referral_code,
    });

    if (error) {
      console.error('Error generating refarral code: ', error);
    }

    if (referral_code) {
      const { data: referral, error: referralErr } = await supabase
        .from('referrals')
        .select('id')
        .eq('referral_code', referral_code);

      if (referralErr) {
        console.error('Error retrieving referral code: ', referralErr);
        return redirect(`/account/signup?msg=${referralErr.message}`);
      }

      if (referral.length === 0) {
        console.error('Referral code does not exist');
        return redirect(`/account/signup/?msg=Referral code not found.`);
      }

      const [{ id }] = referral as Array<{ id: number }>;

      const { error } = await supabase
        .from('used_referrals')
        .insert({ referral_id: id, used_by_user_id: data.user.id });

      if (error) {
        console.error('Error updating used_referrals: ', error);
      }
    }

    return redirect(
      '/account/signup/?msg=Signup successful! Please check your inbox to confirm.'
    );
  }
}
