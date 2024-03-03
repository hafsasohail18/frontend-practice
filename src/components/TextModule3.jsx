import React from "react";
import TitleText from "./TitleText";
import photo3 from "../assets/photo-3.jpg";
import photo4 from "../assets/photo-4.jpg";
import photo5 from "../assets/photo-5.jpg";

const TextModule3 = () => {
  return (
    <>
      <div>
        <TitleText
          title="We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo."
          description="Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture."
        />
      </div>
      <div className="relative h-screen w-full">
        <div className="bg-green absolute w-7/12 h-full left-0" />
        <div className="absolute flex flex-col gap-10 left-36 top-10">
          <img
            src={photo3}
            alt=""
            style={{
              height: 300,
              width: 500,
            }}
          />
          <img
            src={photo4}
            alt=""
            style={{
              height: 300,
              width: 500,
            }}
          />
        </div>
        <div className="absolute w-2/5 right-20 top-1/2 transform -translate-y-1/2">
          <img src={photo5} alt="" />
        </div>
      </div>
    </>
  );
};

export default TextModule3;
