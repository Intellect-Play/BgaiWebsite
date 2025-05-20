"use client";
import PageBannerComponent from "@/app/_components/PageBannerComponent";
import React from "react";
import Description from "./description/Description";
import Boxes from "./boxes/Boxes";
import InternSwiper from "./internSwiper/InternSwiper";
// import InternInfo from "./internInfos/internInfo";
import Image from "next/image";
import ReadyToJoinUs from "../home/ReadyToJoinUs/ReadyToJoinUs";

const page = () => {
  return (
    <div>
      <PageBannerComponent
        title="Internships"
        textSize="4.3rem"
        textColor="white"
        textWeight="600"
        backgroundImage="/images/lifeAtPeak.jpg"
        height="65vh"
      />
      {/* <Description />
      <Boxes />
      <InternSwiper />
      <InternInfo />
      <div className="w-full max-w-[1200px] mx-auto py-[20px]">
        <Image
          src="/images/internImages/internfooter.png"
          alt="intern-footer"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div> */}
      <ReadyToJoinUs
        backgroundImage="/images/guysimage.jpg"
        title="Start shaping your future!"
        textSize="4rem"
        textColor="#fff"
      />
    </div>
  );
};

export default page;
