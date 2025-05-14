"use client";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="relative w-full h-[600px]">
      <video
        className="w-full h-full object-cover"
        src={"/videos/homePageVideo.mp4"}
        autoPlay
        loop
        muted
      />

      <div className="absolute top-[0] left-[0] w-full h-full bg-[rgba(0,0,0,0.5)] flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl text-[3.5rem] text-[#fff] w-[40%] font-bold mb-4">
          People are at the <span className="font-[1000]">core</span> of
          everything we do{" "}
        </h1>
        <button className="px-[3rem] mt-[2rem] text-[18px] py-[10px] font-[700] cursor-pointer rounded-full text-[#fff] bg-[#B12028] text-black rounded hover:bg-gray-300  transition">
          Discover now
        </button>
      </div>
    </div>
  );
};

export default HomePage;
