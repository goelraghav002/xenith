// Sponsors.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Aryan_Gupta } from '../../assets/Team Members';
import './Sponsors.css';

const Sponsors = () => {
  const isSmallScreen = window.innerWidth <= '400px';
  const sliderSettings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: isSmallScreen ? 1 : 3,
  
    slidesToScroll: 3,
    nextArrow: null, 
  };

  const sponsors = [
    { id: 1, name: 'Sponsor 1', image: Aryan_Gupta },
    { id: 2, name: 'Sponsor 2', image: Aryan_Gupta },
    { id: 3, name: 'Sponsor 3', image: Aryan_Gupta },
    { id: 1, name: 'Sponsor 1', image: Aryan_Gupta },
    { id: 2, name: 'Sponsor 2', image: Aryan_Gupta },
    { id: 3, name: 'Sponsor 3', image: Aryan_Gupta },
    { id: 1, name: 'Sponsor 1', image: Aryan_Gupta },
    { id: 2, name: 'Sponsor 2', image: Aryan_Gupta },
    { id: 3, name: 'Sponsor 3', image: Aryan_Gupta },
    { id: 1, name: 'Sponsor 1', image: Aryan_Gupta },
    { id: 2, name: 'Sponsor 2', image: Aryan_Gupta },
    { id: 3, name: 'Sponsor 3', image: Aryan_Gupta },
  ];

  return (
    <div className="sponsors-carousel" id='Partners'>
      <h1 className='vim'>Partners</h1>
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
