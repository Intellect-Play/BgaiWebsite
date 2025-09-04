"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import CustomButton from "@/app/_components/CustomButton";
import { COLORS } from "@/app/constants/colors/colors";

interface PositionsSectionProps {
  backgroundImage?: string;
  overlayColor?: string;
}

type Game = {
  _id: string;
  title: string;
  image: string;
  googlePlayLink?: string;
};

const PositionsSection: React.FC<PositionsSectionProps> = ({
  backgroundImage,
  overlayColor = "rgba(0,0,0,0.7)",
}) => {
  const router = useRouter();
  const [games, setGames] = useState<Game[]>([]);
  const apiEndpoint = "api/bgaiv1/games";

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/${apiEndpoint}`)
      .then((res) => setGames(res.data?.games ?? []))
      .catch((err) => console.log(err));
  }, []);

  const toImg = (src?: string) => {
    if (!src) return "/images/defaultGameImage.png";
    if (/^https?:\/\//i.test(src)) return src;
    return `${process.env.NEXT_PUBLIC_API_URL}${src}`;
  };

  return (
    <div
      className="relative px-[10px]  mt-[50px] w-full h-[650px] flex items-center justify-center bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ backgroundColor: overlayColor }}
      />

      {/* Content */}
      <div className="relative max-w-[1200px] mx-auto z-10 w-full h-full">
        <h1 className="max-w-[1200px] mt-[30px] mx-auto text-[3rem] text-[#fff] font-[700]">
          Games
        </h1>

        <div className="max-w-[1100px] mx-auto mt-[30px] flex items-center justify-center">
          <Swiper
            slidesPerView={3}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="myNewSwiper"
            style={{ height: "380px" }}
          >
            {games.map((game) => (
              <SwiperSlide
                key={game._id}
                className="max-h-[360px] rounded-[20px]"
                style={{
                  background: "rgba(1, 13, 20, 1)",
                  borderRadius: 16,
                  boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(3.4px)",
                  WebkitBackdropFilter: "blur(3.4px)",
                  border: "1px solid rgba(39, 24, 24, 0.32)",
                }}
              >
                <div className="group h-full rounded-[12px]   pb-[10px] bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                  {/* Image (fills the card height; title stays at the bottom) */}
                  <div className="relative w-full flex-1 overflow-hidden rounded-tl-[20px] rounded-tr-[20px]">
                    <div
                      className="relative w-full h-full"
                      style={{ aspectRatio: "16/11" }}
                    >
                      <Image
                        src={toImg(game.image)}
                        alt={game.title}
                        fill
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 33vw, 400px"
                      />
                    </div>
                  </div>

                  {/* Title (always below the image) */}
                  <div className="mt-[12px]">
                    <p className="text-[18px] text-[#fff] font-semibold text-[#222] text-center truncate">
                      {game.title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* SEE ALL GAMES slide */}
            <SwiperSlide className="max-h-[360px] ">
              <div className="w-full h-full bg-white/90 backdrop-blur rounded-[12px] p-[12px] shadow-lg flex flex-col items-center justify-center">
                <p
                  onClick={() => router.push("/games")}
                  className="text-center text-[22px] font-[700] text-[#222] cursor-pointer"
                >
                  See All Games
                </p>
                <div
                  className="mt-[12px] px-[10px] py-[10px] rounded-full cursor-pointer"
                  style={{ backgroundColor: COLORS.primary }}
                  onClick={() => router.push("/games")}
                >
                  <ChevronRight color="white" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Bottom CTA: SEE ALL GAMES */}
        <div className="flex justify-center items-center mt-[30px]">
          <CustomButton
            title="SEE ALL GAMES"
            onClick={() => router.push("/games")}
            icon={<ChevronRight size={20} />}
            width="14rem"
            expandedWidth="14.5rem"
            height="3rem"
          />
        </div>
      </div>
    </div>
  );
};

export default PositionsSection;
