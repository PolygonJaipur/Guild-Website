import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import polygon_bg from '../public/rocket.png';
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

const teamMembers = [
  {
    id: 1,
    img: 'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg',
    name: 'yash garg',
    position: 'convener',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga tempore cumque, animi amet mollitia sunt aspernatur! Consectetur quas quia aliquid distinctio iste reiciendis, qui quos at, aut, maxime ipsum.',
  },
  {
    id: 2,
    img: 'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg',
    name: 'yash garg',
    position: 'convener',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga tempore cumque, animi amet mollitia sunt aspernatur! Consectetur quas quia aliquid distinctio iste reiciendis, qui quos at, aut, maxime ipsum.',
  },
  {
    id: 3,
    img: 'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg',
    name: 'yash garg',
    position: 'convener',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga tempore cumque, animi amet mollitia sunt aspernatur! Consectetur quas quia aliquid distinctio iste reiciendis, qui quos at, aut, maxime ipsum.',
  },
  {
    id: 4,
    img: 'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg',
    name: 'yash garg',
    position: 'convener',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga tempore cumque, animi amet mollitia sunt aspernatur! Consectetur quas quia aliquid distinctio iste reiciendis, qui quos at, aut, maxime ipsum.',
  },
  {
    id: 5,
    img: 'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg',
    name: 'yash garg',
    position: 'convener',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga tempore cumque, animi amet mollitia sunt aspernatur! Consectetur quas quia aliquid distinctio iste reiciendis, qui quos at, aut, maxime ipsum.',
  },
  {
    id: 6,
    img: 'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg',
    name: 'yash garg',
    position: 'convener',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga tempore cumque, animi amet mollitia sunt aspernatur! Consectetur quas quia aliquid distinctio iste reiciendis, qui quos at, aut, maxime ipsum.',
  },
  {
    id: 7,
    img: 'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg',
    name: 'yash garg',
    position: 'convener',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga tempore cumque, animi amet mollitia sunt aspernatur! Consectetur quas quia aliquid distinctio iste reiciendis, qui quos at, aut, maxime ipsum.',
  },
  {
    id: 8,
    img: 'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg',
    name: 'yash garg',
    position: 'convener',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga tempore cumque, animi amet mollitia sunt aspernatur! Consectetur quas quia aliquid distinctio iste reiciendis, qui quos at, aut, maxime ipsum.',
  },
  {
    id: 9,
    img: 'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg',
    name: 'yash garg',
    position: 'convener',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga tempore cumque, animi amet mollitia sunt aspernatur! Consectetur quas quia aliquid distinctio iste reiciendis, qui quos at, aut, maxime ipsum.',
  },
  {
    id: 10,
    img: 'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg',
    name: 'yash garg',
    position: 'convener',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga tempore cumque, animi amet mollitia sunt aspernatur! Consectetur quas quia aliquid distinctio iste reiciendis, qui quos at, aut, maxime ipsum.',
  },
];

const About = () => {
  return (
    <div
      id='learning'
      className='h-full bg-gradient-to-br from-[#60009462] via-[#6f00bf56] to-[#00000054]'
    >
      <div>
        <div className='items-center flex justify-center'>
          <Image
            src={polygon_bg}
            className='object-cover p-20 opacity-50'
            height='700vh'
            width='900vw'
          />
        </div>
        <div className='absolute top-[35%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white/20 p-20 rounded-lg dark:bg-black/20'>
          <p className='text-[20px] w-[70vw]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit
            tempor nunc diam ut sit neque enim, rhoncus.
            <br></br>
            Quis convallis elit euismod ri sus, ut risus. At neque ipsum commodo
            pretium mauris aliquet sed vel enim. A dictum iaculis etiam orci
            purus, pharetra, senectus.
          </p>
        </div>
        <div className='absolute top-[65%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h2 className='text-4xl font-bold'>Upcoming events</h2>
        </div>
        <div className='absolute top-[80%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <div className='flex justify-between items-center w-full'>
            <div className='w-[300px] mx-10 h-[110px] bg-white/30 dark:bg-black/40 shadow-lg shadow-black/20 rounded-xl'>
              <p className='p-4'>
                <span className='text-[#824abe]'>Instagram</span> launches NFTs
                on Polygon
              </p>
            </div>
            <div className='w-[300px] mx-10 h-[110px] bg-white/30 dark:bg-black/40 shadow-lg shadow-black/20 rounded-xl'>
              <p className='p-4'>
                <span className='text-[#824abe]'>Stripe</span> launches global
                payouts with crypto using Polygon
              </p>
            </div>
            <div className='w-[300px] mx-10 h-[110px] bg-white/30 dark:bg-black/40 shadow-lg shadow-black/20 rounded-xl'>
              <p className='p-4'>
                <span className='text-[#824abe]'>
                  Adidas Originals and Prada
                </span>{' '}
                launch NFT collection on Polygon
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='z-10'>
        <div className='my-10'>
          <h2 className='text-4xl font-bold flex text-center items-center justify-center'>
            Event Gallery
          </h2>
          <div className='slide-container'>
            <Slide autoplayInterval={3000}>
              {slideImages.map((slideImage, index) => (
                <div className='each-slide' key={index}>
                  <div
                    style={{ backgroundImage: `url(${slideImage.url})` }}
                    className='team-img rounded-xl shadow-xl h-[70vh] bg-cover bg-center w-[75rem] mt-[2rem] mb-[4rem] my-0 mx-auto'
                  ></div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </div>
      <div className='z-10'>
        <div className='py-4 our-team'>
          <h2 className='text-4xl font-bold text-center '>Meet our Team</h2>
          <div className='full-team p-10 px-20 grid md:grid-cols-2 grid-cols-1 gap-10 '>
            {teamMembers.map((member) => {
              const { id, img, name, position, text } = member;
              return (
                <div
                  className="member bg-gradient-to-b from-[#49007162] via-[#a900bf76] to-[#501b6d92] bg-white/50 dark:bg-black/30 p-5 rounded-xl shadow-xl flex flex-row"
                  key={id}
                >
                  <div className="img-container h-auto w-[150%] rounded-xl ">
                    <img
                      src={img}
                      alt=""
                      className="member-img h-[100%] w-[100%] rounded-xl object-cover"
                    />
                  </div>
                  <div className="info-container text-black/70 dark:text-white/70 flex flex-col p-5">
                    <h2 className="text-3xl ">{name}</h2>
                    <h3 className="text-xl">{position}</h3>
                    <p className="text-start text-sm">{text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='py-5 z-10'>
        <Footer />
      </div>
    </div>
  );
};

export default About;
