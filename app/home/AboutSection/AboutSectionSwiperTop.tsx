import CustomButton from "@/app/_components/CustomButton";
import { swiperItems } from "@/app/constants/swiperItems";
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
    <>
      {/* <div className="flex justify-between  aboutSectionWrapper ">
        <div className="flex aboutDreams max-w-[700px] mx-auto flex-col gap-[20px]">
          <h1 className="text-[3rem] text-[#444444]">
            Chasing Our <span className="font-[600]">Dreams</span>{" "}
          </h1>
          <p
            className="max-w-[450px] aboutTextWidth  text-[18px] text-[#444444]
"
          >
            We are a team, we think big and we have big goals to achieve. Our
            approach is to constantly explore, progress and grow as a team
            throughout our journey.
          </p>
          <CustomButton
            title="READ OUR STORY"
            icon={<ChevronRight size={20} />}
            width="15rem"
            expandedWidth="15.5rem"
            height="3rem"
          />
        </div>
        <div className="max-w-[700px] w-full h-[400px]">
          <Swiper
            className="mySwiper w-full h-full"
            modules={[Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {swiperItems.map((item) => (
              <SwiperSlide key={item.id}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div> */}
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
        descWidth={styles.aboutTextWith}
        spanWord="Dreams"
      />
      ;
    </>
  );
};

export default AboutSectionSwiperTop;
