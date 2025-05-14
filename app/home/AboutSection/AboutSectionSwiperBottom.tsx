import React from "react";
import CustomButton from "@/app/_components/CustomButton";
import { secondSwiperItems, swiperItems } from "@/app/constants/swiperItems";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./AboutSection.module.scss";
import styles from "./AboutSection.module.scss";
// import { Autoplay } from "swiper/modules";
import AboutSectionSwiper from "@/app/_components/ReusableSwiperSection";

const AboutSectionSwiperBottom = () => {
  return (
    <div className="">
      <AboutSectionSwiper
        title="Life At"
        description="We form an environment that makes it easy for you to focus on doing your best. Working on hard problems allows us to grow individually and as a team."
        spanWord="Peak"
        buttonTitle="EXPLORE"
        buttonWidth="10rem"
        buttonExpandedWidth="10.5rem"
        buttonIcon={<ChevronRight size={20} />}
        swiperItems={secondSwiperItems}
        wrapperClass={styles.aboutSectionWrapper}
        textContentClass={styles.aboutDreams}
        swiperWrapperClass={styles.aboutSwiperWrapper}
        swiperClass={styles.aboutSwiper}
        descWidth={styles.aboutTextWith}
        direction="flex-row-reverse"
      />
    </div>
  );
};

export default AboutSectionSwiperBottom;
