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

  const getImageAtIndex = (index) => {
    return images[index % images.length];
  };

  return (
    <div className="Gallery">
      <div className="gallery-container">
      <h1 className='vim'>Gallery</h1>
      <div className="container_images">
        <div className="container_image">
          <img src={getImageAtIndex(currentIndex)} alt={`Image 1`} className="gallery-image" />
        </div>
        <div className="container_image1">
          <img src={getImageAtIndex(currentIndex + 1)} alt={`Image 2`} className="gallery-image" />
        </div>
        <div className="container_image2">
          <img src={getImageAtIndex(currentIndex + 2)} alt={`Image 3`} className="gallery-image" />
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Gallery;
