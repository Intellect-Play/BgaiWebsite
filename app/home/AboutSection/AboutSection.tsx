"use client";
import React from "react";

import AboutSectionSwiperTop from "./AboutSectionSwiperTop";

const AboutSection: React.FC = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto">
        <div className="mt-[4rem] mx-[10px]">
          <AboutSectionSwiperTop />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
