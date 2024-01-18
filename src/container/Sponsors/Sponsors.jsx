import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './Sponsors.css';
import aryan from '../../assets/Team Members/Raghav_Goel.png';
export default function Sponsors() {
  return (
    <div className='partner' >
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={'-1050px'}
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
          <img src={aryan} alt="Sponsor 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={aryan} alt="Sponsor 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={aryan} alt="Sponsor 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={aryan}alt="Sponsor 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={aryan} alt="Sponsor 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={aryan} alt="Sponsor 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={aryan} alt="Sponsor 7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={aryan} alt="Sponsor 8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={aryan} alt="Sponsor 9" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
