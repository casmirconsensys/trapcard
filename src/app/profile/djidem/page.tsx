import Image from 'next/image'
import React from 'react'

const Djidem = () => {
  return (
      <div className='md:mt-24 mt-8'>
          <div className='relative'>
              <div className='w-full relative h-[13rem]'>
                  <Image fill src="/images/idem.jpeg" alt="" className='object-cover' />
              </div>
              <div className='absolute -bottom-12 left-12'>
                  <img src='https://i.scdn.co/image/ab67616d00001e02ee369bbe2bacf01abc8f3d6f' className='w-32 h-32 rounded-full orangeToPink'></img>
              </div>
          </div>
          <div className='px-8 flex-wrap flex gap-8 items-stretch h-full'>
              <div className='pt-16'>
                  <a
                      target='_blank'
                      href='https://open.spotify.com/artist/5KdPEhO1vqYoMoQloMJN8r?si=oMCFv3AITdyLIyEb4z849Q'
                      className='text-xl font-bold hover:text-cyan-500 text-cyan-600 duration-200'>
                      @DJIdem
                  </a>
                  <p className='text-sm lg:max-w-96 text-justify leading-tight pt-5'>DJ Idem, artiste, producteur et co-fondateur du label musical Big Factory Records, imprègne les scènes musicales françaises et internationales de son talent depuis plus d&apos;une décennie. Avec des performances DJ remarquables, il laisse une empreinte indélébile sur le paysage musical...</p>
              </div>
              <div className='bg-gray-50 flex-1 self-stretch py-8 px-6 h-full pb-52'>
                  <h2 className='font-extrabold text-2xl text-slate-500'>My playlists</h2>
                  <div className='mt-6'>
                      <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1E4mlMT2Y5SHLs?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Djidem