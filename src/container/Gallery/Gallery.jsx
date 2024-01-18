/**/


import React from 'react';
import './Gallery.css';

import aryan from '../../assets/Team Members/Ansh.jpg';


const Gallery = () => {
  return (
    <div className="Gallery">
        <div className="Heading">Gallery</div>
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
