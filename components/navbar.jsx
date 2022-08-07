import Image from 'next/image';
import React, { useState } from 'react'
import moon_Icon from '../public/navbar_icon/moon_icon.svg'
import sun_Icon from '../public/navbar_icon/sun_icon.svg'
import { useTheme } from 'next-themes';
import logo_light from '../public/navbar_icon/logo_light.png'
import logo_dark from '../public/navbar_icon/logo_dark.png'
import Link from 'next/link';

const currentTheme = ""
const Navbar = () => {
    const {theme,setTheme} = useTheme("light")
    const [color,setColor] = useState('light')    
  return (
    <div className="w-full h-20 fixed z-10 ">
      <div className=" z-100">
        <div className="flex items-center px-10 py-2 justify-between">
          <div className="p-2">
            <Image
              src={theme === "light" ? logo_light : logo_dark}
              height="40px"
              width="190px"
            />
          </div>
          <div className="font-medium cursor-pointer">
            <Link href="/">
              <h3 className="px-5 hover:bg-white/40 hover:text-black dark:hover:text-black text-[#3b056a] dark:text-[#d8acff] rounded-2xl text-lg flex justify-center py-2 hover:shadow-xl items-center hover:scale-105 ease-in duration-300 ">
                Home
              </h3>
            </Link>
          </div>
          <div className="font-medium cursor-pointer">
            <Link href="/learning">
              <h3 className="px-5 hover:bg-white/40 hover:text-black dark:hover:text-black text-[#3b056a] dark:text-[#d8acff] rounded-2xl text-lg flex justify-center py-2 hover:shadow-xl items-center hover:scale-105 ease-in duration-300">
                Start Learning
              </h3>
            </Link>
          </div>
          <div className="font-medium cursor-pointer">
            <Link href="/about">
              <h3 className="px-5 hover:bg-white/40 hover:text-black dark:hover:text-black text-[#3b056a] dark:text-[#d8acff] rounded-2xl text-lg flex justify-center py-2 hover:shadow-xl items-center hover:scale-105 ease-in duration-300">
                About Us
              </h3>
            </Link>
          </div>
          <div className="py-2">
            <button className="text-center py-3 rounded-3xl text-sm px-5 cursor-pointer hover:scale-105 ease-in duration-200">
              Join Guild
            </button>
          </div>
          <div className="flex">
            <div className="visible">
              <Image
                onClick={() => {
                  setTheme(theme === "light" ? "dark" : "light");
                  setColor(theme);
                }}
                className="moon cursor-pointer"
                src={theme === "light" ? moon_Icon : sun_Icon}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
export {currentTheme}

//bg-[#8a539854] dark:bg-[#00000071]
//bg-gradient-to-r from-[#b446f062] via-[#6f00bf59] to-[#00000061]