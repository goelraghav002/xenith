import React, { useEffect, useState } from 'react';
import './Banner.css';

const Banner = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollDownOpacity = 1 - Math.min(scrollPosition * 0.02, 1);

  const parallaxStyle = (speed, rotateSpeed, scaleSpeed, horizontalSpeed) => {
    const rotation = window.innerWidth > 950 ? `rotate(${scrollPosition * rotateSpeed}deg)` : '';

    return {
      transform: `translateY(-${scrollPosition * speed}px) ${rotation} scale(${1 + scrollPosition * scaleSpeed}) translateX(${scrollPosition * horizontalSpeed}px)`,
      opacity: 1 - Math.min(scrollPosition * 0.002, 1),
      transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
    };
  };

  const scrollDownStyle = {
    transform: `translateY(-${scrollPosition * 4}px)`,
    opacity: scrollDownOpacity,
    transition: 'transform 0.2s ease-out, opacity 0.5s ease-out',
  };

  return (
    <div>
      <div id="Home" className="landing-page-container">
        <div className="landing-page" style={parallaxStyle(0.1, 0.1, 0.0005, 0)}>
          <div className="parallax-background"></div>
          <div className="layer1"></div>
          <div className="layer2"></div>
          <div className="content">
            <h1>XENITH'24</h1>
            <h5>The Incognito Realm</h5>
          </div>
        </div>
      </div>
      <div className="scroll-down-container" style={{ ...scrollDownStyle, bottom: '10px' }}>
        <div className="wrapper">
          <div className="box">
            <div className="circle"></div>
          </div>
          <div className='scroll'>Scroll Down</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
