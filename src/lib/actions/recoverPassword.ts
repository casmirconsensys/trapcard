'use server';

import { createClient } from '@/utils/supabase/server';
import { AuthError } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function recoverPassword(formData: FormData) {
  const email = formData.get('email') as string;
//   const password = formData.get('password') as string;
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) {
    console.error(error);
    if (error instanceof AuthError) {
      return redirect(`/account/password/recover/?msg=${error.message}`);
    }
    return redirect(
      '/account/password/recover/msg=password-recover failed. Please check your credentials and try again.'
    );
  }

  if (data) {
    return redirect('/account/password/update');
  }
}
