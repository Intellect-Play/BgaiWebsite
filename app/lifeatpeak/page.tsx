"use client";
import React from "react";
import PageBannerComponent from "../_components/PageBannerComponent";
import AboutSectionSwiper from "../_components/ReusableSwiperSection";
import styles from "../home/AboutSection/AboutSection.module.scss";
import { lifeAtPeakPageSwiperItems } from "../constants/swiperItems";
import ReadyToJoinUs from "../home/ReadyToJoinUs/ReadyToJoinUs";
import Focus from "./Focus/Focus";
import Accardion from "./Accardion/Accardion";
import FunTogether from "./FunTogether/FunTogether";

const page = () => {
  return (
    <div>
      <PageBannerComponent
        title="Inside BGAI Tech"
        textSize="4.3rem"
        textColor="white"
        textWeight="600"
        backgroundImage="/images/lifeAtPeak.jpg"
        height="65vh"
      />

      <div className="max-w-[1200px] mx-auto my-[5rem] px-[10px]">
        <AboutSectionSwiper
          title="Make Your Mark in  "
          description="At BGAI Tech, every line of code, every design, and every idea has the power to reach players across the globe. The work you do here won’t just build games — it will create experiences that people carry with them, share with friends, and come back to for “one more round.”"
          spanWord="Gaming"
          swiperItems={lifeAtPeakPageSwiperItems}
          wrapperClass={styles.aboutSectionWrapper}
          textContentClass={styles.aboutDreams}
          swiperWrapperClass={styles.aboutSwiperWrapper}
          swiperClass={styles.aboutSwiper}
          descWidth={styles.aboutTextWidth}
          desc2="
We’re still a small squad, but together we’re aiming high: new mechanics, bigger worlds, and unforgettable gameplay. With the right teammates, we can craft adventures that impact millions."
          desc3="Imagine what we can achieve with you on board. "
        />
      </div>

      <Focus />

      <Accardion />

      <FunTogether />

      <ReadyToJoinUs
        backgroundImage="/images/guysimage.jpg"
        title="Ready to join us?"
        textSize="4rem"
        textColor="#fff"
      />
    </div>
  );
};

export default page;
