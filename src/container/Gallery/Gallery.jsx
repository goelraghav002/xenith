import React, { useState, useEffect } from 'react';
import './Gallery.css'; // Import the CSS file for styling

const Gallery = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, images.length, interval]);

 

  return (
    <div className="gallery-container">
     <h1 className='vim'>Gallery</h1>
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="gallery-image" />
     
    </div>
  );
};

export default Gallery;


