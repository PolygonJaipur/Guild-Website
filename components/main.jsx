import React from 'react'
import dark_bg from '../public/bg.png'
import Image from 'next/image';
import Footer from './footer';

const Main = () => {
  return (
    <div
      id="home"
      className="relative bg-gradient-to-br from-[#fbf7fd55] via-[#1f004b46] to-[#00000036]"
    >
      <Image src={dark_bg} className="object-cover h-screen" />
      <div className="absolute top-[35%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h1 className="py-4 my-4 drop-shadow-lg">Lorem ipsum dolor sit amet</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit tempor
          nunc diam ut sit neque enim, rhoncus.
          <br></br>
          Quis convallis elit euismod ri sus, ut risus. At neque ipsum commodo
          pretium mauris aliquet sed vel enim. A dictum iaculis etiam orci
          purus, pharetra, senectus.
        </p>
      </div>
      <div className="absolute top-[96%] w-full left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <Footer className="z-9" />
      </div>
    </div>
  );
}

export default Main

//