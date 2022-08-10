import React from 'react'
import dark_bg from '../public/bg.png'
import Image from 'next/image';
import Footer from './footer';

const Main = () => {
  return (
    <div
      id="home"
      className="md:relative bg-gradient-to-br from-[#fbf7fd55] via-[#1f004b46] to-[#00000036] z-[-2]"
    >
      <div className="hidden md:contents h-screen md:h-[111vh] z-[-2]">
        <Image src={dark_bg} className="hidden md:object-cover md:h-screen" />
      </div>
      <div className="md:absolute  md:w-[50%] md:top-[35%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] z-[-2]">
        <h1 className="py-4 my-4 drop-shadow-lg ">
          Lorem ipsum dolor sit amet
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit tempor
          nunc diam ut sit neque enim, rhoncus.
          <br></br>
          Quis convallis elit euismod ri sus, ut risus. At neque ipsum commodo
          pretium mauris aliquet sed vel enim. A dictum iaculis etiam orci
          purus, pharetra, senectus.
        </p>
      </div>
      <div className="md:absolute md:top-[96%] w-[100px] md:w-full md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] ">
        <Footer className="" />
      </div>
    </div>
  );
}

export default Main

//