// import React from 'react';
// import './Gallery.css';
// import aryan from '../../assets/Team Members/Ansh.jpg';
// const Gallery = () => {
//   return (
   
//       <div className="Gallery">
//       <h1 className='vim'>Gallery</h1>
//         <div className="slider">

//           <span style={{ '--i': 1 }}><img src={aryan} alt="Aryan Gupta" /></span>
//           <span style={{ '--i': 2 }}><img src={aryan} alt="Ansh" /></span>
//           <span style={{ '--i': 3 }}><img src={aryan} alt="Aryesh Srivastava" /></span>
//           <span style={{ '--i': 4 }}><img src={aryan} alt="Tanya Gupta" /></span>
//           <span style={{ '--i': 5 }}><img src={aryan} alt="Abiha Naqvi" /></span>
//           <span style={{ '--i': 6 }}><img src={aryan} alt="Nikita Bansal" /></span>
//           <span style={{ '--i': 7 }}><img src={aryan} alt="Ishika" /></span>
//           <span style={{ '--i': 8 }}><img src={aryan} alt="Avisha Goyal" /></span>

//         </div>
//       </div>

//   );
// };

// export default Gallery;


import React from 'react';
// import { Alert } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import './Gallery.css';
// import '../../assets/Gallery/index'
import p1 from '../../assets/Gallery/DSC_3238.jpg';
import p2 from '../../assets/Gallery/DSC_3259.jpg';
import p3 from '../../assets/Gallery/DSC_3396.jpg';
import p4 from '../../assets/Gallery/DSC_3447.jpg';
import p5 from '../../assets/Gallery/DSCN_20230204_134210_LMC.R12.jpg';
import p6 from '../../assets/Gallery/DSCN_20230204_134910_LMC.R12.jpg';
import p7 from '../../assets/Gallery/SB8_0446.jpg';
import p8 from '../../assets/Gallery/SB8_0450.jpg';


const Gallery = () => {
  return (
    <section className="gallery">
      <div className="container">
      <h1 className="vim">Gallery</h1>
        <CCarousel controls transition="crossfade">

          <CCarouselItem>
            <CImage className="d-block w-100" src={p1} alt="slide 1" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={p2} alt="slide 2" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={p3} alt="slide 3" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={p4} alt="slide 4" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={p5} alt="slide 5" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={p6} alt="slide 6" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={p7} alt="slide 7" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={p8} alt="slide 8" />
          </CCarouselItem>

  
        </CCarousel>
      </div>
    </section>
  );
};

export default Gallery;


