import React from 'react';
import TitleText from './TitleText';
import photo6 from "../assets/photo-6.jpg";
import photo7 from "../assets/photo-7.jpg";

const TextModule5 = () => {
  return (
    <>
      <TitleText
        title="We’re passionate about what we do, but we’re equally passionate about improving who we are."
        description={[
          "We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.",
          <br />,
          <br />,
          "Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.",
        ]}
      />
      <div className="relative h-screen w-full">
        <div className=" absolute w-8/12 h-full left-0 right-0 mx-auto bg-purple" />
        <div className=" absolute w-1/3 left-20 top-1/2 transform -translate-y-1/2">
            <img src={photo6} alt="" />
        </div>
        <div className="absolute w-1/3 right-0 top-1/2 transform -translate-y-1/2"
        style={{height: 600, width:650}}>
            <img src={photo7}
            className='object-cover h-full w-full'
             alt="" />
        </div>
      </div>
    </>
  );
};

export default TextModule5;
