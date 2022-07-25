import Image from 'next/image';
import React from 'react'
import moon_Icon from '../public/navbar_icon/moon_icon.svg'
import sun_Icon from '../public/navbar_icon/sun_icon.svg'
import { useTheme } from 'next-themes';
import logo from '../public/navbar_icon/logo.png'

const Navbar = () => {
    const {theme,setTheme} = useTheme()

  return (
    <div>
      <div className="bg-gradient-to-r from-[#60009455] via-[#1f004b46] to-[#00000036]">
        <div className="flex items-start px-10 pt-4 justify-between">
          <div className="p-2">
            <Image src={logo} height="40px" width="190px" />
          </div>
          <div>
            <div className="visible dark:hidden">
              <Image
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="moon cursor-pointer"
                src={moon_Icon}
                alt=""
              />
            </div>
            <div className="opacity-0 dark:opacity-100">
              <Image
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="sun cursor-pointer"
                src={sun_Icon}
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