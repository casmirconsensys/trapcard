import Image from 'next/image'
import React from 'react'

const Willietaylor = () => {
  return (
      <div className='md:mt-24 mt-8'>
          <div className='relative'>
              <div className='w-full relative h-[13rem]'>
                  <Image fill src="/images/willie.jpg" alt="" className='object-cover' />
              </div>
              <div className='absolute -bottom-12 left-12'>
                  <img src='https://i.scdn.co/image/ab676161000051743ff3fc6dc50ad30ee4e2dd20' className='w-32 h-32 rounded-full orangeToPink'></img>
              </div>
          </div>
          <div className='px-8 flex-wrap flex gap-8 items-stretch h-full'>
              <div className='pt-16'>
                  <a
                      target='_blank'
                      href='https://open.spotify.com/artist/5sWYvQsyCCAkkrwLcIT6NS?si=Ak-czuuOS6iVGwDop-pu5w'
                      className='text-xl font-bold hover:text-cyan-500 text-cyan-600 duration-200'>
                      @Willietaylor
                  </a>
                  <p className='text-sm lg:max-w-96 text-justify leading-tight pt-5'>
                    Willie Taylor is a member of the Award Winning R&amp;B Group Day26 who was formed on MTV&apos;s Making The Band 4 by music mogul Sean “Diddy” Combs and former cast member of VH1&apos;s Love and Hip Hop Hollywood Seasons 2 and 3. Willie Taylor&apos;s music is timeless, from his silky vocal delivery ,  rhythmic melodies,and  clever Word play. I&apos;m sure you&apos;ll find Willie Taylor climbing high on your R&amp;B Favorites list.
                    </p>
              </div>
              <div className='bg-gray-50 flex-1 self-stretch py-8 px-6 h-full pb-52'>
                  <h2 className='font-extrabold text-2xl text-slate-500'>My playlists</h2>
                  <div className='mt-6'>
                      <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1E4tsUjaVjxhLq?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                  </div>
                  <div className='mt-6'>
                      <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO3dtnla?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                  </div>
                  {/* <div className='flex gap-4 mt-4 flex-wrap'>
                        <a
                            href='https://open.spotify.com/playlist/00rgOm3azNYonH3ccNxv3J' target='_blank'
                            className='group rounded-md border p-3 w-52 shadow-lg greenToPurple flex gap-x-3'>
                            <img
                                src="https://s2.svgbox.net/social.svg?ic=spotify&color=000"
                                width="20"
                                height="20"
                                className='animate-bounce group-hover:animate-none'
                            />
                            <h4 className='font-bold'>TrapMoney</h4>
                        </a>
                        <a
                            href='https://open.spotify.com/playlist/0IYuSB3SZOI0VzBuky5WFT' target='_blank'
                            className='group rounded-md border p-3 w-52 shadow-lg orangeToPink flex gap-x-3'>
                            <img
                                src="https://s2.svgbox.net/social.svg?ic=spotify&color=000"
                                width="20"
                                height="20"
                                className='animate-bounce group-hover:animate-none'
                            />
                            <h4 className='font-bold'>HoneyTrapchain</h4>
                        </a>
                    </div> */}
              </div>
          </div>
      </div>
  )
}

export default Willietaylor