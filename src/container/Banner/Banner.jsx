import React, { useEffect, useState } from 'react';
import './Banner.css';

const Banner = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const screenWidth = window.innerWidth;

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const calculateOpacity = () => {
    const maxOpacity = 1;
    const minOpacity = 0.2; // Adjust the minimum opacity as needed
    const opacityRange = maxOpacity - minOpacity;

    if (screenWidth <= 768) {
      return maxOpacity - scrollPosition * 0.0015; // Keep full opacity on mobile
    }

    return maxOpacity - scrollPosition * 0.002;
  };


  const parallaxStyle = (speed, rotateSpeed, scaleSpeed, horizontalSpeed) => {
    const rotation = screenWidth > 950 ? `rotate(${scrollPosition * rotateSpeed}deg)` : '';

    return {
      transform: `translateY(-${scrollPosition * speed}px) ${rotation} scale(${1 + scrollPosition * scaleSpeed}) translateX(${scrollPosition * horizontalSpeed}px)`,
      opacity: calculateOpacity(),
    };
  };

  return (
    <div className="landing-page">
      <div className="parallax-background" style={parallaxStyle(0.1, 0.1, 0.0005, 0)}></div>
      <div className="layer1" style={parallaxStyle(0.0, 0, 0.0003, -0.2)}></div>
      <div className="layer2" style={parallaxStyle(0.0, 0, 0.0002, 0.3)}></div>
      <div className="content">
        <h1>XENITH'24</h1>
        <h5>The Incognito Realm</h5>
      </div>
    </div>
  );
};

export default Banner;





