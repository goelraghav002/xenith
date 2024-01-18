import React, {useEffect, useState} from 'react';
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
  
    return (
      <div className="landing-page">
        <div className="parallax-background"></div>
        <div className="layer1" style={{ transform: `translateY(-${scrollPosition * 0.2}px)` }}></div>
        <div className="layer2" style={{ transform: `translateY(-${scrollPosition * 0.4}px)` }}></div>
        <div className="content">
          <h1>XENITH'24</h1>
          <h5>The Incognito Realm</h5>
          
        </div>
      </div>
    );

};


export default Banner;
