import Image from 'next/image'
import React from 'react'

export default function Button(props) {
  return (
    <button className='flex items-center justify-between bg-[#a259ff] px-4 rounded-xl py-4 cursor-pointer'>
     <Image src={props.src} alt="icon" width={20} height={20} />
     <p className='pl-2'>{props.pera}</p>
    </button>
  )
}
