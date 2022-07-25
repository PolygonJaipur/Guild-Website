import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import linkedin from '../public/footer/linkedin.svg'
import twitter from '../public/footer/twitter.svg'
import discord from '../public/footer/discord.svg'

function Footer() {
  return (
    <div className="flex items-center justify-between px-10 ">
      <h1>  </h1>
      <h4 className='pl-[230px] text-gray-700 dark:text-white'>© 2022 Polygon technology</h4>
      <div className="flex">
        <div className="px-4">
          <Link href="#">
            <Image src={linkedin} alt="" />
          </Link>
        </div>
        <div className="px-4">
          <Link href="#">
            <Image src={twitter} alt="" />
          </Link>
        </div>
        <div className="px-4">
          <Link href="#">
            <Image src={discord} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer
//dark:bg-black dark:shadow-2xl dark:shadow-black bg-[#fde6ec]