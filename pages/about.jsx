import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import polygon_bg from '../public/rocket.png'
import Footer from '../components/footer';
import Image from 'next/image';

const slideImages = [
  {
    url: 'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?cs=srgb&dl=pexels-min-an-853168.jpg&fm=jpg',
    caption: 'Slide 1',
  },
  {
    url: 'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?cs=srgb&dl=pexels-min-an-853168.jpg&fm=jpg',
    caption: 'Slide 2',
  },
  {
    url: 'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?cs=srgb&dl=pexels-min-an-853168.jpg&fm=jpg',
    caption: 'Slide 3',
  },
];
const items = [{ id: 1, title: 'Yash Garg', subtitle: 'Convener' }];

const About = () => {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div
      id="learning"
      className="h-full bg-gradient-to-b from-[#60009462] via-[#6f00bf56] to-[#00000054]"
    >
      <div>
        <div className="p-20 items-center flex justify-center">
          <Image
            src={polygon_bg}
            className="object-cover p-20 opacity-50"
            height="700vh"
            width="900vw"
          />
        </div>
        <div className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white/20 p-20 rounded-lg dark:bg-black/20">
          <p className="text-[20px] w-[70vw]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit
            tempor nunc diam ut sit neque enim, rhoncus.
            <br></br>
            Quis convallis elit euismod ri sus, ut risus. At neque ipsum commodo
            pretium mauris aliquet sed vel enim. A dictum iaculis etiam orci
            purus, pharetra, senectus.
          </p>
        </div>
        <div className="absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="text-4xl font-bold">Upcoming events</h2>
        </div>
        <div className="absolute top-[85%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex justify-between items-center w-full">
            <div className="w-[300px] mx-10 h-[110px] bg-white/30 dark:bg-black/40 shadow-lg shadow-black/20 rounded-xl">
              <p className="p-4">
                <span className="text-[#824abe]">Instagram</span> launches NFTs
                on Polygon
              </p>
            </div>
            <div className="w-[300px] mx-10 h-[110px] bg-white/30 dark:bg-black/40 shadow-lg shadow-black/20 rounded-xl">
              <p className="p-4">
                <span className="text-[#824abe]">Stripe</span> launches global
                payouts with crypto using Polygon
              </p>
            </div>
            <div className="w-[300px] mx-10 h-[110px] bg-white/30 dark:bg-black/40 shadow-lg shadow-black/20 rounded-xl">
              <p className="p-4">
                <span className="text-[#824abe]">
                  Adidas Originals and Prada
                </span>{" "}
                launch NFT collection on Polygon
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="z-10">
        <div className="img-container">
          <h2 className="text-4xl font-bold flex text-center items-center justify-center">
            Event Gallery
          </h2>
          <div className="slide-container">
            <Slide autoplayInterval={500}>
              {slideImages.map((slideImage, index) => (
                <div className="each-slide" key={index}>
                  <div
                    style={{ backgroundImage: `url(${slideImage.url})` }}
                    className="team-img rounded-xl shadow-xl h-[70vh] bg-cover bg-center w-[75rem] mt-[2rem] mb-[4rem] my-0 mx-auto"
                  ></div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </div>
      <div className="py-5 z-10">
        <Footer />
      </div>
    </div>
  );
};

export default About;
