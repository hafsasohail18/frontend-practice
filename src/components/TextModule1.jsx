import React from "react";
import TitleText from "./TitleText";
import photo1 from "../assets/photo-1.jpg";
import photo2 from "../assets/photo-2.jpg";

const TextModule1 = () => {
  return (
    <>
      <TitleText
        title="We make Live, Push and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things."
        description="Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world."
      />
      <div className="relative h-screen w-full">
        <div className=" absolute w-7/12 h-full right-0 bg-yellow" />
        <div className=" absolute w-2/4 left-20 top-1/2 transform -translate-y-1/2">
            <img src={photo1} alt="" />
        </div>
        <div className=" absolute w-1/3 right-20 top-1/2 transform -translate-y-1/2">
            <img src={photo2} alt="" />
        </div>
      </div>
    </>
  );
};

export default TextModule1;
