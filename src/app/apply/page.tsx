'use client'
import React from 'react'
import JotformEmbed from 'react-jotform-embed';

const Apply = () => {
  return (
    <div className='pt-0'>
      <div className='h-[100vh]'>
        <JotformEmbed src="https://form.jotform.com/240115056309649" scrolling={true} />
      </div>
    </div>
  )
}

export default Apply