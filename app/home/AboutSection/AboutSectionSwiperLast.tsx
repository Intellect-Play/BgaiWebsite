import AboutSectionSwiper from "@/app/_components/ReusableSwiperSection";
import { lastSwiperItems } from "@/app/constants/swiperItems";
import { ChevronRight } from "lucide-react";
import React from "react";
import styles from "./AboutSection.module.scss";

const AboutSectionSwiperLast = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto mt-[50px] px-[10px]">
        <AboutSectionSwiper
          title="We are a"
          description="The products we build are ever-evolving and continue to reach more and more users all around the world. Operating on a global scale requires focus, dedication and a great team."
          buttonTitle="READ OUR STORY"
          buttonWidth="15rem"
          buttonExpandedWidth="15.5rem"
          buttonIcon={<ChevronRight size={20} />}
          swiperItems={lastSwiperItems}
          wrapperClass={styles.aboutSectionWrapper}
          textContentClass={styles.aboutDreams}
          swiperWrapperClass={styles.aboutSwiperWrapper}
          swiperClass={styles.aboutSwiper}
          descWidth={styles.aboutTextWidth}
          spanWord="global"
          additionText="technology company"
          textWidth="max-w-[500px]"
        />
      </div>
    </div>
  );
};

export default AboutSectionSwiperLast;
