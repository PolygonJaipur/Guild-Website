import Image from 'next/image';
import React, {useState} from 'react'
import moon_Icon from '../public/navbar_icon/moon_icon.svg'
import sun_Icon from '../public/navbar_icon/sun_icon.svg'
import { useTheme } from 'next-themes';
import logo_light from '../public/navbar_icon/logo_light.png'
import logo_dark from '../public/navbar_icon/logo_dark.png'
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const currentTheme = ""
const Navbar = () => {
    const {theme,setTheme} = useTheme("light")
    const [nav, setNav] = useState(false);
    const handleNav = () => {
      setNav(!nav);
    };
      
  return (
    <div className="md:w-full h-20  bg-[#fbc3ffd8] dark:bg-[#060309db] z-[100]">
      <div className="bg-gradient-to-r from-[#7f00c362] via-[#6600bf56] to-[#00000054] z-[100]">
        <div className="flex items-center px-4 md:px-10 py-2 justify-between">
          <div className="md:p-2 ">
            <Image
              src={theme === "light" ? logo_light : logo_dark}
              height="40px"
              width="190px"
            />
          </div>
          <div className="hidden lg:flex flex-row z-[100] items-center justify-between w-[50%]">
            <div className="font-medium cursor-pointer py-3">
              <Link href="/">
                <h3 className="px-5 hover:bg-white/40 hover:text-black dark:hover:text-black text-[#3b056a] dark:text-[#d8acff] rounded-2xl text-lg flex justify-center py-2 hover:shadow-xl items-center hover:scale-105 ease-in duration-300 ">
                  Home
                </h3>
              </Link>
            </div>
            <div className="font-medium cursor-pointer py-3">
              <Link href="/learning">
                <h3 className="px-5 hover:bg-white/40 hover:text-black dark:hover:text-black text-[#3b056a] dark:text-[#d8acff] rounded-2xl text-lg flex justify-center py-2 hover:shadow-xl items-center hover:scale-105 ease-in duration-300">
                  Start Learning
                </h3>
              </Link>
            </div>
            <div className="font-medium cursor-pointer py-3">
              <Link href="/about">
                <h3 className="px-5 hover:bg-white/40 hover:text-black dark:hover:text-black text-[#3b056a] dark:text-[#d8acff] rounded-2xl text-lg flex justify-center py-2 hover:shadow-xl items-center hover:scale-105 ease-in duration-300">
                  About Us
                </h3>
              </Link>
            </div>
            <div className="py-2">
              <Link href="/join-guild ">
                <button className="text-center py-3 rounded-3xl text-sm px-5 cursor-pointer hover:scale-105 ease-in duration-200">
                  Join Guild
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div
              onClick={handleNav}
              className="md:hidden  hover:bg-[#ffffff71] ease-in duration-300  px-1 mx-3 rounded-xl"
            >
              <AiOutlineMenu
                size={25}
                className="m-2 text-gray-900 dark:text-white"
              />
            </div>
            <div className="flex">
              <div className="visible">
                <Image
                  onClick={() => {
                    setTheme(theme === "light" ? "dark" : "light");
                  }}
                  className="moon cursor-pointer"
                  src={theme === "light" ? moon_Icon : sun_Icon}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-[100%] sm:h-screen bg-black/70"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] h-[100%] sm:w-[60%] md:w-[45%] bg-gradient-to-r from-[#7f00c362] via-[#6600bf56] to-[#00000054] bg-[#fbc3ffd8] dark:bg-[#060309db] p-10 ease-in duration-500 z-[100]"
                : "fixed left-[-200%] top-0 w-[75%] h-[100%] sm:h-screen sm:w-[60%] md:w-[45%] border-none p-10 ease-in duration-500 z-[100]"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Image
                  src={theme === "light" ? logo_light : logo_dark}
                  height="40px"
                  width="190px"
                  alt="am"
                />
                <div
                  onClick={handleNav}
                  className="rounded-full hover:bg-white/30 ease-in duration-300 shadow-lg p-3 cursor-pointer"
                >
                  <AiOutlineClose className="text-black dark:text-white" />
                </div>
              </div>
              <div className="border-b border-gray-700  dark:border-gray-300 my-4"></div>
            </div>
            <div
              className="py-4 flex-col text-gray-900 dark:text-gray-400"
              onClick={handleNav}
            >
              <ul className="">
                <div className="font-medium cursor-pointer py-3">
                  <Link href="/">
                    <h3 className="px-5 hover:bg-white/40 hover:text-black dark:hover:text-black text-[#3b056a] dark:text-[#d8acff] rounded-2xl text-lg flex justify-center py-2 hover:shadow-xl items-center hover:scale-105 ease-in duration-300 ">
                      Home
                    </h3>
                  </Link>
                </div>
                <div className="font-medium cursor-pointer py-3">
                  <Link href="/learning">
                    <h3 className="px-5 hover:bg-white/40 hover:text-black dark:hover:text-black text-[#3b056a] dark:text-[#d8acff] rounded-2xl text-lg flex justify-center py-2 hover:shadow-xl items-center hover:scale-105 ease-in duration-300">
                      Start Learning
                    </h3>
                  </Link>
                </div>
                <div className="font-medium cursor-pointer py-3">
                  <Link href="/about">
                    <h3 className="px-5 hover:bg-white/40 hover:text-black dark:hover:text-black text-[#3b056a] dark:text-[#d8acff] rounded-2xl text-lg flex justify-center py-2 hover:shadow-xl items-center hover:scale-105 ease-in duration-300">
                      About Us
                    </h3>
                  </Link>
                </div>
                <div className="py-4 flex items-center justify-center">
                  <Link href="/join-guild ">
                    <button className="text-center py-3 rounded-3xl text-sm px-5 cursor-pointer hover:scale-105 ease-in duration-200">
                      Join Guild
                    </button>
                  </Link>
                </div>
              </ul>
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