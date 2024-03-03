import React from "react";
import TitleText from "./TitleText";
import photo8 from "../assets/photo-8.jpg";

const TextModule6 = () => {
  return (
    <>
      <TitleText
        title="We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible."
        description="If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities."
      />
      <div className="container p-24 w-full h-screen flex flex-row">
        <div className="w-1/2 h-full">
          <img src={photo8} alt="" className="object-cover h-full w-full" />
        </div>
        <div className="w-1/2 h-full flex flex-col bg-lightblue items-center justify-center">
          <h2 className="text-2xl w-8/12 font-semibold tracking-wide leading-relaxed">
            We’re really proud of the work we’ve done so far. But there’s so
            much more to come. If you’d like to be a part of it, please join us.
          </h2>
          <h4 className="py-10 text-2xl w-8/12 font-semibold tracking-wide leading-relaxed text-blue">See latest jobs &gt;</h4>
        </div>
      </div>
    </>
  );
};

export default TextModule6;
