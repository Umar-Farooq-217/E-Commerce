import Image from 'next/image'
import React from 'react'

export default function Button(props) {
  return (
    <div className=''>
     <Image src={props.src} alt="icon" width={10} height={10} />
     <p className=''>{props.pera}</p>
    </div>
  )
}
