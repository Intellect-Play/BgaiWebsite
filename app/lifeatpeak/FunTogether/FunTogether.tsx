"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./funtogether.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const slides = [
  {
    image: "/images/funImages/fun1.jpg",
    caption: "IT & Office Admin Team in New York, October 2022",
  },
  {
    image: "/images/funImages/fun2.jpg",
    caption: "IT & Office Admin Team in New York, October 2022",
  },
  // daha fazla slide ekleyebilirsin
];

const FunTogether = () => {
  return (
    <div className="fun-section">
      <h2 className="fun-title">
        We have <span>fun</span> together
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="fun-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="fun-image-wrapper">
              <img src={slide.image} alt={`fun-${index}`} />
              <div className="fun-caption">
                <p>{slide.caption}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FunTogether;
