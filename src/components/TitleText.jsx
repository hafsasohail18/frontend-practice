import React from 'react';


const TitleText = ({ title, description }) => {
  return (
    <>
      <div className="py-32 flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl w-6/12 font-semibold tracking-wide leading-relaxed">
          {title}
        </h2>
        <p className="py-3 text-base w-6/12 tracking-wide leading-relaxed">
          {description}
        </p>
      </div>
      
     
    </>
  );
};

export default TitleText;
