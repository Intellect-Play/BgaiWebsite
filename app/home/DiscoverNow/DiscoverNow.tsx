"use client";
import CustomButton from "@/app/_components/CustomButton";
import { ChevronDown } from "lucide-react";
import React from "react";
import "./discoverNow.scss";
import { useRouter } from "next/navigation";
import BlurText from "@/components/BlurText";

const DiscoverNow: React.FC = () => {
  const router = useRouter();

  return (
    <div className="relative w-full h-[600px]">
      <video
        className="w-full h-full object-cover"
        src={"/videos/homePageVideo.mp4"}
        autoPlay
        loop
        muted
      />

      <div className="absolute  top-[0] left-[0] w-full h-full bg-[rgba(0,0,0,0.8)] flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl discoverFont text-[3.5rem] text-center text-[#fff] max-w-[550px] mx-auto mb-4">
          <BlurText
            text="People are the core of everything"
            delay={300}
            className="text-center"
          />
        </h1>

        <div className="mt-[4rem]">
          <CustomButton
            title="Discover Now"
            icon={<ChevronDown size={20} />}
            width="12rem"
            expandedWidth="12.5rem"
            height="3rem"
            onClick={() => router.push("/about")}
          />
        </div>
      </div>
    </div>
  );
};

export default DiscoverNow;
