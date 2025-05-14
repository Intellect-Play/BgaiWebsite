"use client";
import React from "react";

import AboutSectionSwiperTop from "./AboutSectionSwiperTop";
import AboutSectionSwiperBottom from "./AboutSectionSwiperBottom";

const AboutSection: React.FC = () => {
  return (
    <>
      <div className="bg-[#F9F9F9] ">
        <div className="max-w-[1200px] py-[4rem]  mx-auto">
          <div className=" mx-[10px]">
            <AboutSectionSwiperTop />
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-[1200px]  mx-auto">
          <div className="mt-[4rem] mx-[10px]">
            <AboutSectionSwiperBottom />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
