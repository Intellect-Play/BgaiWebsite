import React from "react";
import AboutSectionSwiper from "../_components/ReusableSwiperSection";
import styles from "../home/AboutSection/AboutSection.module.scss";
import { aboutPageSwiperItems } from "../constants/swiperItems";
import { COLORS } from "../constants/colors/colors";
import "./WhatWeValue.scss";

const OurJourney = () => {
  return (
    <div className="py-[4rem]">
      <div className="max-w-[1200px] px-[10px] mx-auto">
        <AboutSectionSwiper
          title="Our"
          description="We are a team, we think big and we have big goals to achieve. Our approach is to constantly explore, progress and grow as a team throughout our journey."
          swiperItems={aboutPageSwiperItems}
          wrapperClass={styles.aboutSectionWrapper}
          textContentClass={styles.aboutDreams}
          swiperWrapperClass={styles.aboutSwiperWrapper}
          swiperClass={styles.aboutSwiper}
          descWidth={styles.aboutTextWidth}
          spanWord="Journey"
          desc2="Our goal at Peak is to gather people with high capabilities, strong values and a will to shape Peak’s story."
          desc3="To start realising our big dreams, we chose mobile gaming as our first and main area of focus. Playing games is one of the few truly universal activities that transcends age, gender or nationality and we believe with the right product, we could reach billions of people worldwide."
        />

        <div className="flex max-w-[1200px] mx-auto gap-[20px]   ourJourneyDirection mt-[100px] justify-between">
          <div>
            <h2
              style={{
                color: COLORS.primary,
              }}
              className="text-[24px] font-[600] "
            >
              Disruption
            </h2>
            <p className=" max-w-[700px] text-[#444444] text-[18px]">
              We launched our casual puzzle game titles Toy Blast in 2015 and
              Toon Blast in 2017. Both games disrupted the casual puzzle game
              genre and rapidly became the most loved products of their type
              globally.
            </p>
          </div>
          <div>
            <h2
              style={{
                color: COLORS.primary,
              }}
              className="text-[24px] font-[600] "
            >
              Growth
            </h2>
            <p className=" text-[#444444]  max-w-[700px]  text-[18px]">
              We always place progress, learning and becoming a better team at
              the heart of our decision making.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
