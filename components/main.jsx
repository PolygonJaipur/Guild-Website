import React from 'react'
import light_bg from '../public/home/light_bg.png'
import dark_bg from '../public/home/dark_bg.png'
import Image from 'next/image';
import Footer from './footer';

const Main = () => {
  return (
    <div id="home" className="relative bg-[#fde6ec] dark:bg-[#000000]">
      <Image src={dark_bg} className="object-cover " height="720vh" width="1440vw"/>
      <div className="absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h1 className='py-4 my-4'>Lorem ipsum dolor sit amet</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit tempor 
          nunc diam ut sit neque enim, rhoncus. 
          <br></br>
          Quis convallis elit euismod ri
          sus, ut risus. At neque ipsum commodo pretium mauris aliquet sed vel
          enim. A dictum iaculis etiam orci purus, pharetra, senectus.
        </p>
      </div>
      <div className="absolute top-[96%] w-full left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <Footer />
      </div>
    </div>
  );
}

export default Main

//gradient-to-r from-[#60009455] via-[#1f004b46] to-[#00000036]