import React from 'react'

const Docs = () => {
  return (
    <div className='lg:pt-32 pt-2 md:px-12 px-6'>
      <h2 className='textGradient md:text-7xl text-4xl font-gilroy text-center font-bold leading-relaxed'>Docs</h2>
      <div className='mt-8 grid md:grid-cols-3 gap-6 pb-8'>
        <a
          href='https://trapcard.gitbook.io/protocol/'
          target='_blank'
          rel='noreferrer'
          className='px-5 py-12 items-center col-span-1 group border rounded-xl shadow-lg max-w-96 flex justify-between md:hover:scale-105  duration-200 hover:shadow-2xl'
        >
          <h2 className='font-bold text-2xl group-hover:border-b-2 border-black duration-200'>TrapCard Protocol v.2.5</h2>
          <img src="https://s2.svgbox.net/hero-outline.svg?ic=external-link&color=00ffaa" width="22" height="22" />
        </a>
        <a
          href='https://trapcard.gitbook.io/lite-paper/'
          target='_blank'
          rel='noreferrer'
          className='px-5 py-12 items-center col-span-1 group border rounded-xl shadow-lg max-w-96 flex justify-between md:hover:scale-105  duration-200 hover:shadow-2xl'
        >
          <h2 className='font-bold text-2xl group-hover:border-b-2 border-black duration-200'>Lite Paper</h2>
          <img src="https://s2.svgbox.net/hero-outline.svg?ic=external-link&color=00ffaa" width="22" height="22" />
        </a>
        <a
          href='https://trapcard.gitbook.io/tokenomics/'
          target='_blank'
          rel='noreferrer'
          className='px-5 py-12 items-center col-span-1 group border rounded-xl shadow-lg max-w-96 flex justify-between md:hover:scale-105  duration-200 hover:shadow-2xl'
        >
          <h2 className='font-bold text-2xl group-hover:border-b-2 border-black duration-200'>Tokenomics</h2>
          <img src="https://s2.svgbox.net/hero-outline.svg?ic=external-link&color=00ffaa" width="22" height="22" />
        </a>
        <a
          href='https://trapcard.gitbook.io/roadmap/'
          target='_blank'
          rel='noreferrer'
          className='px-5 py-12 items-center col-span-1 group border rounded-xl shadow-lg max-w-96 flex justify-between md:hover:scale-105  duration-200 hover:shadow-2xl'
        >
          <h2 className='font-bold text-2xl group-hover:border-b-2 border-black duration-200'>Roadmap</h2>
          <img src="https://s2.svgbox.net/hero-outline.svg?ic=external-link&color=00ffaa" width="22" height="22" />
        </a>
        <a
          href='https://trapcard.gitbook.io/overview/'
          target='_blank'
          rel='noreferrer'
          className='px-5 py-12 items-center col-span-1 group border rounded-xl shadow-lg max-w-96 flex justify-between md:hover:scale-105  duration-200 hover:shadow-2xl'
        >
          <h2 className='font-bold text-2xl group-hover:border-b-2 border-black duration-200'>Overview</h2>
          <img src="https://s2.svgbox.net/hero-outline.svg?ic=external-link&color=00ffaa" width="22" height="22" />
        </a>
      </div>
    </div>
  )
}

export default Docs