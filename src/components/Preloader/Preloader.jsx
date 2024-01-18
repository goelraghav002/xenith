import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <video autoPlay muted loop>
        <source src={"src/assets/Preloader_Video.mp4"} type="video/mp4" />
      </video>
    </div>
  );
};

export default Preloader;
