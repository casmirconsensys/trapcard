import Image from 'next/image'
import React from 'react'

const Djws = () => {
  return (
      <div className='md:mt-24 mt-8'>
          <div className='relative'>
              <div className='w-full relative h-[13rem]'>
                  <Image fill src="/images/KRK.png" alt="" className='object-cover' />
              </div>
              <div className='absolute -bottom-12 left-12'>
                  <img src='https://i.scdn.co/image/ab67616d00001e02150adf2c9dc0b4f3f874f790' className='w-32 h-32 rounded-full orangeToPink'></img>
              </div>
          </div>
          <div className='px-8 flex-wrap flex gap-8 items-stretch h-full'>
              <div className='pt-16'>
                  <a
                      target='_blank'
                      href='https://open.spotify.com/artist/2yP2heDvGPROpYtPMKsOh1?si=TaAM3pAMT6iQswPkcvU2ag'
                      className='text-xl font-bold hover:text-cyan-500 text-cyan-600 duration-200'>
                      @DJWhiteShadow
                  </a>
                  <p className='text-sm lg:max-w-96 text-justify leading-tight pt-5'>White Shadow is a producer, writer, DJ, designer, and entrepreneur based in Los Angeles, CA. Grammy nominated producer/writer. 20 million singles sold. 5 million albums sold. 3 Billboard #1 albums produced. 5 Billboard Top 40 singles.</p>
              </div>
              <div className='bg-gray-50 flex-1 self-stretch py-8 px-6 h-full pb-52'>
                  <h2 className='font-extrabold text-2xl text-slate-500'>My playlists</h2>
                  <div className='mt-6'>
                      <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1E4ovSBdqoNtiC?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Djws