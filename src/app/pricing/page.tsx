import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className='flex items-center justify-center min-h-screen relative z-10'>
      <div className='absolute -top-40 -right-40 lg:w-2/3 w-full h-80 -z-10'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='drop-shadow-[-20px_10px_0px_#ffc949]'
          viewBox='0 0 2000 2000'
          fill='#ffb14a'
        >
          <path d='M994 112c-703-2-920.47 400.35-904 905 13.35 409 32.03 946.66 977 861 684-62 792-279 835-777 61.67-714.25-288.33-987.24-908-989Z'></path>
        </svg>
      </div>

      <div className='w-full max-w-[1190px] px-6 sm:px-8 md:px-16 py-10 md:py-20 rounded-xl bg-[#ffffff]/60 min-h-[300px] m-2 shadow-[0px_14px_28px_-5px_rgba(0,0,0,0.21)]'>
        <h1 className='font-semibold text-2xl mb-2 tracking-wider drop-shadow-[3px_3px_5px_rgba(91,91,91,0.58)]'>
          Our pricing
        </h1>
        <small className='font-[500]'>
          We offer transparent pricing plans designed to suit every music lover. With seamless crypto payments, fair compensation for artists, and options for all, youre just a click away from joining the future of music streaming. Choose your plan and dive into the world of Web2.5 today!
        </small>
        <ul className='flex items-start justify-between gap-8 mt-10 md:flex-row flex-col'>
          <li className='w-full lg:w-[32%] border shadow  px-4 pt-16 pb-8 bg-white rounded-lg self-stretch hover:scale-105 hover:shadow-[0px_14px_28px_-5px_rgba(0,0,0,0.1)] transition-all duration-150 ease-in'>
            <h2 className='text-center font-semibold text-lg tracking-wider mb-3 drop-shadow-[3px_3px_5px_rgba(91,91,91,0.58)]'>
              TrapRadio station rotation package
            </h2>
            <p className='text-center tracking-tighter block mb-14'>
              <span className='text-4xl font-bold'>$550</span>
              {/* <span className='text-black/40 text-center'>/mo</span> */}
            </p>
            <Link href='/payment?tier=1'>
              <button className='w-full p-2 bg-[#13181f] text-white rounded-md font-semibold hover:bg-[#ff2865] transition-all duration-150 ease-in mb-8 border-[#13181f]'>
                Pay
              </button>
            </Link>
            <ol className='list-disc text-[#ff2865] w-[80%] mx-auto'>
              <li>
                <span className='text-black text-xs font-semibold'>
                  0.1/TRAP = 1099 plays
                </span>
              </li>
            </ol>
          </li>
          <li className='w-full lg:w-[32%] border shadow px-4 pt-16 pb-8 bg-white rounded-lg self-stretch hover:scale-105 hover:shadow-[0px_14px_28px_-5px_rgba(0,0,0,0.1)] transition-all duration-150 ease-in'>
            <h2 className='text-center font-semibold text-lg tracking-wider mb-3 drop-shadow-[3px_3px_5px_rgba(91,91,91,0.58)]'>
              Super streamer playlist package
            </h2>
            <p className='text-center tracking-tighter block mb-14'>
              <span className='text-4xl font-bold'>$1,750</span>
              {/* <span className='text-black/40 text-center'>/mo</span> */}
            </p>
            <Link href='/payment?tier=2'>
              <button className='w-full p-2 bg-[#13181f] text-white rounded-md font-semibold hover:bg-[#ff2865] transition-all duration-150 ease-in mb-8 border-[#13181f]'>
                Pay
              </button>
            </Link>
            <ol className='list-disc text-[#ff2865] w-[80%] mx-auto'>
              <li>
                <span className='text-black text-xs font-semibold'>
                  500 Streams / 1 TRAP
                </span>
              </li>
              <li>
                <span className='text-black text-xs font-semibold'>
                  Priority Support
                </span>
              </li>
            </ol>
          </li>
          <li className='w-full lg:w-[32%] border shadow px-4 pt-16 pb-8 bg-white rounded-lg self-stretch hover:scale-105 hover:shadow-[0px_14px_28px_-5px_rgba(0,0,0,0.1)] transition-all duration-150 ease-in relative group'>
            <h2 className='text-center font-semibold text-lg tracking-wider mb-3 drop-shadow-[3px_3px_5px_rgba(91,91,91,0.58)]'>
              Run your bag up playlist package
            </h2>
            <p className='text-center tracking-tighter block mb-14'>
              <span className='text-4xl font-bold'>$2,500</span>
              {/* <span className='text-black/40 text-center'>/mo</span> */}
            </p>
            <Link href='/payment/?tier=3'>
              <button className='w-full p-2 bg-[#13181f] text-white rounded-md font-semibold hover:bg-[#ff2865] transition-all duration-150 ease-in mb-8 border-[#13181f]'>
                Pay
              </button>
            </Link>
            <ol className='list-disc text-[#ff2865] w-[80%] mx-auto'>
              <li>
                <span className='text-black text-xs font-semibold'>
                  1000 Streams / 2 TRAP
                </span>
              </li>
              <li>
                <span className='text-black text-xs font-semibold'>
                  Advanced Analytics and Audience Insights
                </span>
              </li>
              <li>
                <span className='text-black text-xs font-semibold'>
                  Priority Support
                </span>
              </li>
            </ol>
          </li>
          <li className='w-full orangeToPink lg:w-[32%] border px-4 pt-16 pb-8 bg-white rounded-lg self-stretch scale-105 shadow-[0px_14px_28px_-5px_rgba(0,0,0,0.1)] transition-all duration-150 ease-in relative group'>
            <h2 className='text-center font-semibold text-lg tracking-wider mb-3 drop-shadow-[3px_3px_5px_rgba(91,91,91,0.58)]'>
              Ultimate streaming playlist capsule
            </h2>
            <p className='text-center tracking-tighter block mb-14'>
              <span className='text-4xl font-bold'>$3,500</span>
              {/* <span className='text-black/40 text-center'>/mo</span> */}
            </p>
            <Link href='/payment/?tier=4'>
              <button className='w-full p-2 bg-[#13181f] text-white rounded-md font-semibold hover:bg-[#ff2865] transition-all duration-150 ease-in mb-8 border-[#13181f]'>
                Pay
              </button>
            </Link>
            <ol className='list-disc text-black w-[80%] mx-auto'>
              <li>
                <span className='text-white text-xs font-semibold'>
                  5 TRAP (Tip/Reward/Artist/Play)
                </span>
              </li>
              <li>
                <span className='text-white text-xs font-semibold'>
                  Detailed Demographics and Engagement Metrics
                </span>
              </li>
              <li>
                <span className='text-white text-xs font-semibold'>
                  30% Discount on Promotion Packages
                </span>
              </li>
              <li>
                <span className='text-white text-xs font-semibold'>
                  Dedicated Account Manager
                </span>
              </li>
            </ol>
          </li>
        </ul>
      </div>
    </div>
  );
}
