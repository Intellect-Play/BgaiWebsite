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
          title="Leveling Up"
          description="We’re not just a studio — we’re gamers at heart. Every project we make is built on passion, creativity, and the thrill of competition. Our mission is simple: craft games that hook you from the first click, keep you grinding for that next level, and give you stories worth sharing."
          buttonTitle="LEARN MORE"
          buttonWidth="13rem"
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
