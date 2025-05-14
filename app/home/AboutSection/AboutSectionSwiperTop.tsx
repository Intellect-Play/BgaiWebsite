import CustomButton from "@/app/_components/CustomButton";
import { secondSwiperItems, swiperItems } from "@/app/constants/swiperItems";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./AboutSection.module.scss";
import styles from "./AboutSection.module.scss";
// import { Autoplay } from "swiper/modules";
import AboutSectionSwiper from "@/app/_components/ReusableSwiperSection";
const AboutSectionSwiperTop = () => {
  return (
    <div>
      <div className="">
        <AboutSectionSwiper
          title="Chasing Our"
          description="We are a team, we think big and we have big goals to achieve. Our approach is to constantly explore, progress and grow as a team throughout our journey."
          buttonTitle="READ OUR STORY"
          buttonWidth="15rem"
          buttonExpandedWidth="15.5rem"
          buttonIcon={<ChevronRight size={20} />}
          swiperItems={swiperItems}
          wrapperClass={styles.aboutSectionWrapper}
          textContentClass={styles.aboutDreams}
          swiperWrapperClass={styles.aboutSwiperWrapper}
          swiperClass={styles.aboutSwiper}
          descWidth={styles.aboutTextWidth}
          spanWord="Dreams"
        />
      </div>
    </div>
  );
};

export default AboutSectionSwiperTop;
