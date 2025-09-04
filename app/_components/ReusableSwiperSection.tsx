// components/AboutSectionSwiper.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import BlurText2 from "@/components/BlurText2";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

interface AboutSectionSwiperProps {
  title: string;
  description: string;
  buttonTitle?: string;
  buttonIcon?: React.ReactNode;
  buttonWidth?: string;
  buttonExpandedWidth?: string;
  buttonHeight?: string;
  swiperItems: { id: number; image: string; alt: string }[];
  descWidth: string;
  spanWord?: string;
  direction?: string;
  additionText?: string;
  textWidth?: string;
  desc2?: string;
  desc3?: string;
  pagination?: any;
  wrapperClass?: string;
  textContentClass?: string;
  swiperWrapperClass?: string;
  swiperClass?: string;
  onClick?: any;
}

const AboutSectionSwiper: React.FC<AboutSectionSwiperProps> = ({
  title,
  description,
  buttonTitle,
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
  desc2,
  desc3,
  onClick,
  pagination,
}) => {
  const router = useRouter();

  return (
    <div
      className={`flex ${direction} gap-[50px] justify-center items-center ${wrapperClass}`}
    >
      <div
        className={`w-[50%] flex flex-col mx-auto max-w-[600px] gap-[20px] ${textContentClass}`}
      >
        <h1 className={`text-[3rem] text-[#444444] ${textWidth}`}>
          <BlurText2
            delay={300}
            text={[title, spanWord, additionText].filter(Boolean).join(" ")}
          />
        </h1>

        <p className={`max-w-[450px] text-[18px] text-[#444444] ${descWidth}`}>
          {description}
        </p>

        {desc2 && (
          <p
            className={`max-w-[450px] text-[18px] text-[#444444] ${descWidth}`}
          >
            {desc2}
          </p>
        )}
        {desc3 && (
          <p
            className={`max-w-[450px] text-[18px] text-[#444444] ${descWidth}`}
          >
            {desc3}
          </p>
        )}

        {buttonTitle && (
          <CustomButton
            title={buttonTitle}
            icon={buttonIcon}
            width={buttonWidth}
            expandedWidth={buttonExpandedWidth}
            height={buttonHeight}
            onClick={onClick}
          />
        )}
      </div>
      <div
        className={`max-w-[600px] w-[50%] w-full h-[400px] ${swiperWrapperClass}`}
      >
        <Swiper
          className={`w-full h-full about-section-swiper ${swiperClass}`}
          pagination={{ clickable: true }}
          modules={[Pagination]}
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

      {/* 🔹 custom bullet design */}
      <style jsx global>{`
        .about-section-swiper .swiper-pagination {
          bottom: 10px !important;
        }
        .about-section-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: transparent;
          border: 2px solid #444;
          opacity: 1;
          margin: 0 6px !important;
          border-radius: 9999px;
          transition: all 0.3s ease;
        }
        .about-section-swiper .swiper-pagination-bullet:hover {
          transform: scale(1.2);
          border-color: #000;
        }
        .about-section-swiper .swiper-pagination-bullet-active {
          width: 24px;
          background: #0033cc;
          border-color: #444;
          border-radius: 9999px;
        }
      `}</style>
    </div>
  );
};

export default AboutSectionSwiper;
