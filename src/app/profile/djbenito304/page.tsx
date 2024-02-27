import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WillieTaylor = () => {
    return (
        <div className='md:mt-24 mt-8'>
            <div className='relative'>
                <div className='w-full relative h-[13rem]'>
                    <Image fill src="/images/benito_banner.jpg" alt="" className='object-cover' />
                </div>
                <div className='absolute -bottom-12 left-12'>
                    <img src='https://i.scdn.co/image/ab67706c0000da8479ede4425cadf7e10bfe1308' className='w-32 h-32 rounded-full orangeToPink'></img>
                </div>
            </div>
            <div className='px-8 flex-wrap flex gap-8 items-stretch h-full'>
                <div className='pt-16'>
                    <a
                        target='_blank'
                        href='https://open.spotify.com/user/an4nv0bqvl55hgujrrk4g43id'
                        className='text-xl font-bold hover:text-cyan-500 text-cyan-600 duration-200'>
                        @DJBenito304
                    </a>
                    <p className='text-sm lg:max-w-96 text-justify leading-tight pt-5'>DJBenito304 Americano #based Colombiano Musica es mi vida y la playa y las chicas 🍑🤑🎧 ingenerio a Tarjeta Trap <span><a target='_blank' rel='noreferrer' href="https://t.me/+XWSPAqYaFNg0Mzcx" className='text-cyan-600 hover:text-cyan-500'>https://t.me/+XWSPAqYaFNg0Mzcx</a></span></p>

                </div>
                <div className='bg-gray-50 flex-1 self-stretch py-8 px-6 h-full pb-52'>
                    <h2 className='font-extrabold text-2xl text-slate-500'>My playlists</h2>
                    <div className='mt-6'>
                        <iframe src="https://open.spotify.com/embed/playlist/00rgOm3azNYonH3ccNxv3J?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                    <div className='mt-6'>
                        <iframe src="https://open.spotify.com/embed/playlist/0IYuSB3SZOI0VzBuky5WFT?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
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

export default WillieTaylor