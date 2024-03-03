import React from "react";
import TitleText from "./TitleText";

const TextModule2 = () => {
  return (
    <>
      <TitleText
        title="Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding."
        description="We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for."
      />
      <div className="flex items-center justify-center">
        <iframe
          width="760"
          height="415"
          src="https://www.youtube.com/embed/9SbnhgjeyXA?si=gsyFEhd2ffTvJRkQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      
    </>
  );
};

export default TextModule2;
