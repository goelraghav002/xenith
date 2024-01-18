import loader from "../../assets/Preloader_Video.mp4";
import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <video autoPlay muted loop>
        <source src={loader} type="video/mp4" />
      </video>
    </div>
  );
};

export default Preloader;
