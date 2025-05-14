import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { ChevronRight } from "lucide-react";

interface PositionsSectionProps {
  backgroundImage?: string;
  overlayColor?: string; // opsiyonel, default siyahimsı
}

const PositionsSection: React.FC<PositionsSectionProps> = ({
  backgroundImage,
  overlayColor = "rgba(0,0,0,0.7)",
}) => {
  return (
    <div
      className="relative px-[10px] mt-[50px] w-full h-[600px] flex items-center justify-center bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ backgroundColor: overlayColor }}
      ></div>

      {/* Content */}
      <div className="relative max-w-[1200px] mx-auto  z-10 w-full h-full ">
        <h1 className="max-w-[1200px] mt-[30px] mx-auto text-[3rem] text-[#fff]">
          {" "}
          <span className="font-[700]">Open</span> Positions
        </h1>
        <div className="max-w-[1000px] mx-auto mt-[50px] flex items-center justify-center">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="myNewSwiper"
            style={{ height: "330px" }}
          >
            <SwiperSlide className="rounded-[5px] px-[10px] py-[20px] max-h-[330px]">
              <div className="flex flex-col gap-[5px] h-full">
                <p className="text-[28px] w-full text-center text-[#444444] font-[600]">
                  Software Engineer, Games
                </p>

                <div className="w-[70px] h-[3px] bg-[#B12028] mx-auto my-[10px] rounded-full"></div>

                <p className="text-[18px]  text-[#444444]">
                  We are looking for a Mobile Software Engineer to join our
                  Engineering Team. Together with your team you will be crafting
                  code that brings to life game features, items and levels in
                  our games
                </p>

                <button className="cursor-pointer mt-auto flex flex-col flex-end  font-[600] text-[12px] text-[#444444]">
                  APPLY
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-[5px] px-[10px] py-[20px]  max-h-[330px]">
              <div className="flex flex-col h-full gap-[5px]">
                <p className="text-[28px] w-full text-center text-[#444444] font-[600]">
                  Product Specialist, Games
                </p>

                <div className="w-[70px] h-[3px] bg-[#B12028] mx-auto my-[10px] rounded-full"></div>

                <p className="text-[18px]  text-[#444444]">
                  We are looking for a talented Product Specialist who will be
                  responsible for creating the best experience for our users. As
                  a member of our team, you will work collaboratively with
                  software
                </p>

                <button className="cursor-pointer  mt-auto font-[600] text-[12px] text-[#444444]">
                  APPLY
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-[5px] px-[10px] py-[20px]  max-h-[330px]">
              <div className="w-full h-full  flex flex-col items-center justify-center">
                <p className="text-center text-[28px] max-w-[100px] w-full text-center text-[#444444] font-[600]">
                  See All Openings
                </p>
                <div className="bg-[#B12028] px-[10px] py-[10px] rounded-full cursor-pointer">
                  <ChevronRight color="white" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PositionsSection;
