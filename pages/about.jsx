import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

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
    <section>
      <article className='about-us'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        accusamus aliquam laboriosam dolore ex. Fugit consequuntur sunt
        praesentium quo itaque?
      </article>
      <article className='upcoming-events'>
        <h1>upcoming events</h1>
        <div className='events'>
          <div className='event event-1 dark:text-black'>
            <span className='purple'>Instagram </span>
            launches nfts on polygon
          </div>
          <div className='event event-2 dark:text-black'>
            <span className='purple'>Stripe </span>
            launches global payouts with crypto using polygon
          </div>
          <div className='event event-3 dark:text-black'>
            <span className='purple'>Adidas originals and prada </span>
            launches nft collection on polygon
          </div>
        </div>
      </article>
      <article className='img-container'>
        <h1>event gallery</h1>
        <div className='slide-container'>
          <Slide autoplayInterval={1000}>
            {slideImages.map((slideImage, index) => (
              <div className='each-slide' key={index}>
                <div
                  style={{ backgroundImage: `url(${slideImage.url})` }}
                  className='team-img'
                ></div>
              </div>
            ))}
          </Slide>
        </div>
      </article>
      <article>
        <h1>meet our team </h1>
        <div>
          {items.map((item) => (
            <motion.div
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
            >
              <motion.h5>{item.subtitle}</motion.h5>
              <motion.h2>{item.title}</motion.h2>
            </motion.div>
          ))}
          <AnimatePresence>
            {selectedId && (
              <motion.div layoutId={selectedId}>
                <motion.h5>{item.subtitle}</motion.h5>
                <motion.h2>{item.title}</motion.h2>
                <motion.button onClick={() => setSelectedId(null)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </article>
    </section>
  );
};

export default About;
