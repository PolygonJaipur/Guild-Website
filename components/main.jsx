import React from 'react'
import light_bg from '../public/home/light_bg.png'
import dark_bg from '../public/home/dark_bg.png'
import Image from 'next/image';
import Navbar from './navbar' 

const Main = () => {
  const scene = Navbar()
  console.log(scene)
  return (
    <div id="home" className="">
      <Image src={scene === "light" ? light_bg : dark_bg} className="w-full h-full top-[-50%] object-cover absolute mix-blend-overlay"/>

    </div>
  );
}

export default Main

//gradient-to-r from-[#60009455] via-[#1f004b46] to-[#00000036]