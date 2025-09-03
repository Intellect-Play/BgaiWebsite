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
import { useRouter } from "next/navigation";

const AboutSectionSwiperBottom = () => {
  const router = useRouter();

  return (
    <div className="">
      <AboutSectionSwiper
        title="Play Hard, Build"
        description="At BGAI Tech, we live and breathe games. We’re a small squad with big dreams, leveling up together one project at a time. Here, every brainstorm feels like co-op mode — fast, fun, and full of ideas waiting to respawn into reality."
        spanWord="Harder"
        buttonTitle="EXPLORE"
        buttonWidth="10rem"
        buttonExpandedWidth="10.5rem"
        buttonIcon={<ChevronRight size={20} />}
        swiperItems={secondSwiperItems}
        wrapperClass={styles.aboutSectionWrapper}
        textContentClass={styles.aboutDreams}
        swiperWrapperClass={styles.aboutSwiperWrapper}
        swiperClass={styles.aboutSwiper}
        descWidth={styles.aboutTextWidth}
        direction="flex-row-reverse"
      />
    </div>
  );
};

export default AboutSectionSwiperBottom;
