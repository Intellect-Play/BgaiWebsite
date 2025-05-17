"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./internswiper.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const slides = [
  {
    image: "/images/internImages/intern1.jpg",
  },
  {
    image: "/images/internImages/intern2.jpg",
  },
  {
    image: "/images/internImages/intern3.jpg",
  },
];

const InternSwiper = () => {
  return (
    <div className="bg-[#F9F9F9] py-[2rem]">
      <div className="max-w-[1200px] mx-auto">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="intern-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="intern-image-wrapper">
                <img src={slide.image} alt={`intern-${index}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default InternSwiper;
