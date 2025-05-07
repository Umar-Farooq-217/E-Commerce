import React from 'react'
import Image from 'next/image'
import Button from '../button/Button'
export default function Navbar() {
  return (
    <div className='flex justify-between items-center px-8'>
      <div className="flex items-center">
        <Image  className='cursor-pointer' src='/navbarIcon.svg' alt='Icon' width={32} height={32} />
        <h1 className='font-bold text-[18px] pl-2 cursor-pointer'>NFT Marketplace</h1>
      </div>

      <div className="flex justify-evenly items-center gap-14 list-none text-[16px] font-bold ">
        <li className='cursor-pointer'>Marketplace</li>
        <li className='cursor-pointer'>Rankings</li>
        <li className='cursor-pointer'>Connect A Wallet</li>
        <Button src='/User.svg' pera='Sign Up' />
    

      </div>
    </div>
  )
}
