"use client";
import React from "react";
import DiscoverNow from "./DiscoverNow/DiscoverNow";
import AboutSection from "./AboutSection/AboutSection";
import PositionsSection from "./PositionsSection/PositionsSection";
import AboutSectionSwiperLast from "./AboutSection/AboutSectionSwiperLast";
import HowWeWorkHome from "./howWeWorkHome/howWeWorkHome";
import ReadyToJoinUs from "./ReadyToJoinUs/ReadyToJoinUs";

const HomePage: React.FC = () => {
  return (
    <>
      <DiscoverNow />
      <AboutSection />
      <PositionsSection backgroundImage="/images/guysimage.jpg" />
      <AboutSectionSwiperLast />
      <HowWeWorkHome />
      <ReadyToJoinUs
        backgroundImage="/images/guysimage.jpg"
        title="Ready to join us?"
        textSize="4rem"
        textColor="#fff"
      />
    </>
  );
};

export default HomePage;
