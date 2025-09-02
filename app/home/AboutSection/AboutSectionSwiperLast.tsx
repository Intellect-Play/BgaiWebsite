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
          title="We are game studio with "
          description="At BGAI Tech, we create games that cross borders and bring players together. From casual fun to challenging RPGs, our goal is to design experiences that anyone, anywhere, can enjoy."
          buttonTitle="SEE OUR GAMES"
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
          additionText="ambitions"
          textWidth="max-w-[500px]"
        />
      </div>
    </div>
  );
};

export default AboutSectionSwiperLast;
