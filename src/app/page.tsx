import TextAnimation from "@/components/TextAnimation";
import { HomeContainer } from "@/components/content";
import { RegisterButton } from "@/components/inputs/button";
import { signUp } from "@/lib/actions";
import Link from "next/link";
import React from "react";
import * as Broadcast from "@livepeer/react/broadcast";

export default function Home({
  searchParams,
}: {
  searchParams: { msg: string };
}) {
  return (
    <>
      <HomeContainer>
        <Broadcast.Root video={false}>
          {}
          <p className="font-extralight dark:text-white">
            Trapcard is currently invite-only
            <br />
            Here&apos;s how to{" "}
            <span>
              <Link href={"/"} className="text-cyanSky">
                skip the waitlist now
              </Link>
            </span>
          </p>
          <h1 className="text-5xl font-druk text-corbeau/80">
            GET ON
            <br />
            THE <span className="text-cyanSky">LIST</span>
          </h1>
          <h3 className="text-4xl font-light text-corbeau dark:text-white">
            Welcome Friend,
            <br />
            please log in
          </h3>
          <div>{/* <Link>Register</Link> */}</div>
          <div className="rounded-3xl shadow-lg greenToPurple md:p-6 p-4 max-w-xl">
            {/* <h3 className='text-4xl font-black mb-5'>Get early access</h3> */}
            <div className="mb-4">
              <TextAnimation />
            </div>
            {searchParams.msg && (
              <p className="mt-4 p-4 text-black text-center">
                {searchParams.msg}
              </p>
            )}
            <form>
              {/* <div className='space-y-2 text-black'>
              <input
                type='email'
                name='email'
                className='bg-white py-2.5 rounded-lg px-4 w-full mb-5'
                placeholder='you@example.com'
                disabled
              // required
              />
              <input
                type='password'
                className='bg-white py-2.5 rounded-lg px-4 w-full mb-5'
                name='password'
                placeholder='••••••••'
                disabled
              // required
              />
            </div> */}
              <div className="w-full mt-2">
                {/* <RegisterButton /> */}
                <Link
                  href={"/account/signup"}
                  className="w-full text-sm font-bold"
                >
                  <button className="w-full bg-black py-2.5 rounded-lg">
                    Register
                  </button>
                </Link>
                {/* <Link href={'/account/login'} type='button' className='text-gray-300 text-sm mt-4'>
                Signed Up before? Check your status
              </Link> */}
              </div>
            </form>
          </div>
        </Broadcast.Root>
      </HomeContainer>
    </>
  );
}
