"use client";
import CustomButton from "@/app/_components/CustomButton";
import { ChevronDown } from "lucide-react";
import React from "react";
import "./discoverNow.scss";
import { useRouter } from "next/navigation";

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
        <h1 className="text-4xl discoverFont text-[3.5rem] text-[#fff] max-w-[550px] mb-4">
          People are at the <span className="font-[1000]">core</span> of
          everything{" "}
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
