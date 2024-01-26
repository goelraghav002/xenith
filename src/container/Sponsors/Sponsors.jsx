// Sponsors.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Aryan_Gupta } from '../../assets/Team Members';
import './Sponsors.css';
import { p1, p2, p3, p4, p5, p6, p7, p8, p9} from '../../assets/Gallery';

const Sponsors = () => {
  const isSmallScreen = window.innerWidth <= 768;
  
  const sliderSettings = {
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: isSmallScreen ? 1 : 3,
    slidesToScroll: 1,
    nextArrow: null, 
  };

  const sponsors = [
  
    {  image: p1 },
    {  image: p2 },
       {  image: p3 }, 
         {  image: p4 },
            {  image: p5 }, 
              {  image: p6 },
                 {  image: p7 },  
                  {  image: p8 },
                  {  image: p9 }
  ];

  return (
    <div className="sponsors-carousel" id='Gallery'>
      <h1 className='vim'>Gallery</h1>
      <Slider {...sliderSettings}>
        {sponsors.map((sponsor, index) => (
          <div className='XYZ' key={index}>
            <img src={sponsor.image} alt={sponsor.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sponsors;
