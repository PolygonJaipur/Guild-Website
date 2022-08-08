import React from 'react'
import Footer from '../components/footer';
import Image from 'next/image';
import learn_bg from '../public/learn_bg.png'

const Learning = () => {
  return (
    <div
      id="learning"
      className="relative h-[90vh] bg-[#fde6ec] dark:bg-[#000000]"
    >
      <Image
        src={learn_bg}
        className="object-cover opacity-50"
        height='750vh'
        width='1500vw'
      />
      <div className="absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h1 className="py-4 pb-8 my-4 drop-shadow-lg">Learning series</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit tempor
          nunc diam ut sit neque enim, rhoncus.
          <br></br>
          Quis convallis elit euismod ri sus, ut risus. At neque ipsum commodo
          pretium mauris aliquet sed vel enim. A dictum iaculis etiam orci
          purus, pharetra, senectus.
        </p>
        <div className="mt-14 flex items-center justify-center">
          <button className="text-center py-5 rounded-3xl text-sm px-14 cursor-pointer hover:scale-105 ease-in duration-200" >
            Learning series
          </button>

        </div>
      </div>
      <div className="absolute top-[96%] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
        <Footer />
      </div>
    </div>
  );
}

export default Learning