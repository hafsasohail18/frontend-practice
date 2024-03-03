import React from "react";
import hero from "../assets/home.png";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-24">
      <div className="relative">
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-brand">
          Ableton
        </h1>
        <img src={hero} alt="" className="object-fit" />
      </div>
    </div>
  );
};

export default HeroSection;
