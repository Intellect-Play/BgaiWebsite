// components/AboutSectionSwiper.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CustomButton from "./CustomButton";
import { ChevronRight } from "lucide-react";

interface AboutSectionSwiperProps {
  title: string;
  description: string;
  buttonTitle: string;
  buttonIcon: React.ReactNode;
  buttonWidth?: string;
  buttonExpandedWidth?: string;
  buttonHeight?: string;
  swiperItems: { id: number; image: string; alt: string }[];
  descWidth: string;
  spanWord?: string;
  direction?: string;
  additionText?: string;
  textWidth?: string;

  wrapperClass?: string;
  textContentClass?: string;
  swiperWrapperClass?: string;
  swiperClass?: string;
}
const AboutSectionSwiper: React.FC<AboutSectionSwiperProps> = ({
  title,
  description,
  buttonTitle = "Read More",
  buttonIcon,
  swiperItems,
  wrapperClass = "",
  textContentClass = "",
  swiperWrapperClass = "",
  swiperClass = "",
  buttonWidth = "12rem",
  buttonExpandedWidth = "12.5rem",
  buttonHeight = "3rem",
  descWidth = "max-w-[450px]",
  spanWord,
  direction = "flex-row",
  additionText,
  textWidth,
}) => {
  return (
    <div className={`flex ${direction}   justify-between  ${wrapperClass}`}>
      <div
        className={`flex flex-col mx-auto max-w-[600px] gap-[20px] ${textContentClass}`}
      >
        <h1 className={`text-[3rem] text-[#444444] ${textWidth}`}>
          {title} <span className="font-[600]">{spanWord}</span> {additionText}
        </h1>
        <p
          className={`max-w-[450px]  text-[18px] text-[#444444] ${descWidth} `}
        >
          {description}
        </p>
        <CustomButton
          title={buttonTitle}
          icon={buttonIcon}
          width={buttonWidth}
          expandedWidth={buttonExpandedWidth}
          height={buttonHeight}
        />
      </div>
      <div className={`max-w-[600px] w-full h-[400px] ${swiperWrapperClass}`}>
        <Swiper
          className={`w-full h-full ${swiperClass}`}
          modules={[Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {swiperItems.map((item) => (
            <SwiperSlide key={item.id} className="relative w-full h-full">
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
    </div>
  );
};

export default AboutSectionSwiper;
