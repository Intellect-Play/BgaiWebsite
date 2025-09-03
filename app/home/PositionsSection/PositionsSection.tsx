import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { ChevronRight, ChevronUp, Check } from "lucide-react";
import CustomButton from "@/app/_components/CustomButton";
import { COLORS } from "@/app/constants/colors/colors";
import { useRouter } from "next/navigation";

interface PositionsSectionProps {
  backgroundImage?: string;
  overlayColor?: string;
}

const PositionsSection: React.FC<PositionsSectionProps> = ({
  backgroundImage,
  overlayColor = "rgba(0,0,0,0.7)",
}) => {
  const router = useRouter();

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
                  Game Designer
                </p>

                <div
                  style={{
                    backgroundColor: COLORS.primary,
                  }}
                  className="w-[70px] h-[3px]  mx-auto my-[10px] rounded-full"
                ></div>

                <p className="text-[18px]  text-[#444444]">
                  Do you see games not just as entertainment, but as experiences
                  to shape? We need a Game Designer who can balance mechanics,
                  create engaging challenges, and design worlds that keep
                  players coming back for more.
                </p>
                <div className="cursor-pointer flex justify-center items-center  mt-auto font-[600] ">
                  <CustomButton
                    title="APPLY"
                    icon={<Check color={COLORS.primary} size={18} />}
                    width="8rem"
                    expandedWidth="8.5rem"
                    height="3rem"
                    bgColor="#fff"
                    textColor="#444444"
                    fontSize="14px"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" rounded-[5px] px-[10px] py-[20px]  max-h-[330px]">
              <div className="flex flex-col h-full gap-[5px]">
                <p className="text-[28px] w-full text-center text-[#444444] font-[600]">
                  UI/UX Artist (Games)
                </p>

                <div
                  style={{
                    backgroundColor: COLORS.primary,
                  }}
                  className="w-[70px] h-[3px] mx-auto my-[10px] rounded-full"
                ></div>

                <p className="text-[18px]  text-[#444444]">
                  We’re on the hunt for a UI/UX Artist who can make our games
                  not just fun to play, but a joy to experience. From sleek
                  menus to intuitive player flows, you’ll design interfaces that
                  feel smooth, stylish, and player-friendly.
                </p>

                <div className="cursor-pointer flex justify-center items-center  mt-auto font-[600] ">
                  <CustomButton
                    title="APPLY"
                    icon={<Check color={COLORS.primary} size={18} />}
                    width="8rem"
                    expandedWidth="8.5rem"
                    height="3rem"
                    bgColor="#fff"
                    textColor="#444444"
                    fontSize="14px"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-[5px] px-[10px] py-[20px]  max-h-[330px]">
              <div className="w-full h-full  flex flex-col items-center justify-center">
                <p
                  onClick={() => router.push("/jobs")}
                  className="text-center text-[28px] max-w-[100px] w-full text-center text-[#444444] font-[600]"
                >
                  See All Openings
                </p>
                <div
                  className=" px-[10px] py-[10px] rounded-full cursor-pointer"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <ChevronRight
                    onClick={() => router.push("/jobs")}
                    color="white"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex justify-center items-center mt-[30px]">
          <CustomButton
            title="SEE ALL OPENINGS"
            onClick={() => router.push("/jobs")}
            icon={<ChevronRight size={20} />}
            width="16rem"
            expandedWidth="16.5rem"
            height="3rem"
          />
        </div>
      </div>
    </div>
  );
};

export default PositionsSection;
