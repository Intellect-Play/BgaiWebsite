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
        title="Life At Peak"
        textSize="4.3rem"
        textColor="white"
        textWeight="600"
        backgroundImage="/images/lifeAtPeak.jpg"
        height="65vh"
      />

      <div className="max-w-[1200px] mx-auto my-[5rem] px-[10px]">
        <AboutSectionSwiper
          title="Make an "
          description="Our aim is to provide products that enrich the lives of our users. Your work will be appreciated by the hundreds of millions of people who use our products around the world. You will be encouraged and supported to reach new heights and be part of the evolution of a global technology company - Peak. The Peak team has already touched the lives of countless millions of people around the world. Just imagine what we can do with you aboard."
          spanWord="impact"
          swiperItems={lifeAtPeakPageSwiperItems}
          wrapperClass={styles.aboutSectionWrapper}
          textContentClass={styles.aboutDreams}
          swiperWrapperClass={styles.aboutSwiperWrapper}
          swiperClass={styles.aboutSwiper}
          descWidth={styles.aboutTextWidth}
          desc2="
The Peak team has already touched the lives of countless millions of people around the world. Just imagine what we can do with you aboard."
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
