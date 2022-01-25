import React from "react";

const HeroBanner = () => {
  return (
    <>
      <div className="grid grid-cols-3 items-stretch h-screen">
        <div className="col-start-1 col-end-3 grid grid-rows-6 animate-slidein-left">
          <div className="row-start-1 row-end-2 bg-gray-300" />
          <div className="row-start-2 row-end-7 bg-gray-50">
            <div className="flex flex-col justify-center w-5/6 lg:w-3/5 h-full mx-auto">
              <div className="">
                <div className="text-2xl lg:text-4xl mb-4 animate-fade-in">
                  This is
                </div>
                <div className="text-5xl lg:text-8xl my-8">
                  <div className="h-8 lg:h-24 flex items-center before:animate-name1-fade-in after:animate-name2-fade-in before:inline-block after:inline-block"></div>
                </div>
                <div className="animate-fade-in">Art & Tech</div>
                <div className="animate-fade-in">Emotional & Rational</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-3 col-end-4 grid grid-rows-6 animate-slidein-right">
          <div className="row-start-1 row-end-2 bg-gray-50"></div>
          <div className="row-start-2 row-end-7 bg-gray-300"></div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
