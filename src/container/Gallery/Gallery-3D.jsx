import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
// import uuidv4 from "uuid";
import { config } from "react-spring";


import p5 from '../../assets/Gallery/DSCN_20230204_134210_LMC.R12.jpg';

import './Gallery-3D.css'

export const Gallery = () => {
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  });

  let slides = [
    {
      content: <img src={p5} alt="1" />
    },
    {
      content: <img src={p5} alt="2" />
    },
    {
      content: <img src={p5} alt="3" />
    },
    {
      content: <img src={p5} alt="4" />
    },
    {
      content: <img src={p5} alt="5" />
    },
    {
      content: <img src={p5} alt="6" />
    },
    {
      content: <img src={p5} alt="7" />
    },
    {
      content: <img src={p5} alt="8" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
  });

  const onChangeInput = (e) => {
    setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  let xDown = null;
  let yDown = null;

  const getTouches = (evt) => {
    return (
      evt.touches || evt.originalEvent.touches // browser API
    );
  };

  const handleTouchStart = (evt) => {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  const handleTouchMove = (evt) => {
    if (!xDown || !yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        setState({ goToSlide: state.goToSlide + 1 });
      } else {
        /* right swipe */
        setState({ goToSlide: state.goToSlide - 1 });
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
      } else {
        /* down swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };

  return (
    <div
      style={{ width: "80%", height: "500px", margin: "5% auto" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
     <h1 className="vim">Gallery</h1>

      <Carousel
        slides={slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        showNavigation={state.showNavigation}
        animationConfig={state.config}
      />
      <div
        style={{
          margin: "0 auto",
          marginTop: "2rem",
          width: "50%",
          display: "flex",
          justifyContent: "space-around"
        }}
      ></div>
    </div>
  );
};
