/*import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Gallery.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

function Gallery() {
  return (
    <div className='main'>
     
     <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  
  )
}*/


import React from 'react';
import './Gallery.css';

import aryan from '../../assets/Team Members/Ansh.jpg';


const Gallery = () => {
  return (
    <div className="Gallery">
         <h1 className='Gallery-head' >Gallery</h1>
<div className="slider">
   
      <span style={{ '--i': 1 }}><img src={aryan} alt="Aryan Gupta" /></span>
      <span style={{ '--i': 2 }}><img src={aryan} alt="Ansh" /></span>
      <span style={{ '--i': 3 }}><img src={aryan} alt="Aryesh Srivastava" /></span>
      <span style={{ '--i': 4 }}><img src={aryan} alt="Tanya Gupta" /></span>
      <span style={{ '--i': 5 }}><img src={aryan} alt="Abiha Naqvi" /></span>
      <span style={{ '--i': 6 }}><img src={aryan} alt="Nikita Bansal" /></span>
      <span style={{ '--i': 7 }}><img src={aryan}alt="Ishika" /></span>
      <span style={{ '--i': 8 }}><img src={aryan} alt="Avisha Goyal" /></span>
    </div>
    </div>
    
  );
};

export default Gallery;
