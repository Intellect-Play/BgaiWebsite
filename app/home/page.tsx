"use client";
import React from "react";
import DiscoverNow from "./DiscoverNow/DiscoverNow";
import AboutSection from "./AboutSection/AboutSection";
import PositionsSection from "./PositionsSection/PositionsSection";
import AboutSectionSwiperLast from "./AboutSection/AboutSectionSwiperLast";

const HomePage: React.FC = () => {
  return (
    <>
      <DiscoverNow />
      <AboutSection />
      <PositionsSection backgroundImage="/images/guysimage.jpg" />
      <AboutSectionSwiperLast />
    </>
  );
};

export default HomePage;
