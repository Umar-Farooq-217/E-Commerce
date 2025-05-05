import React from 'react'
import Image from 'next/image'
import Button from '../button/Button'
export default function Navbar() {
  return (
    <div className='flex justify-between items-center'>
      <div className="flex items-center">
        <Image src='/navbarIcon.svg' alt='Icon' width={32} height={32} />
        <h1 className='font-bold text-[18px]'>NFT Marketplace</h1>
      </div>
      <div className="flex justify-evenly list-none ">
        <li>Marketplace</li>
        <li>Rankings</li>
        <li>Connect A Wallet</li>
    <li></li>
        <Button src='/signUp.svg' pera='Sign Up' />
      </div>
    </div>
  )
}
