"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./funtogether.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "/images/funImages/fun2.jpg",
    caption: "Azerbaijan, 2025",
  },
  // daha fazla slide ekleyebilirsin
];

const FunTogether = () => {
  return (
    <div className="fun-section">
      <h2 className="fun-title">
        We Level <span>Up</span> together
      </h2>

      <Swiper className="fun-swiper">
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
