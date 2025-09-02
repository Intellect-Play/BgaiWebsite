import Image from "next/image";
import React from "react";
import "./WhatWeValue.scss";

const GoingTowards = () => {
  return (
    <div className="flex goingTowards">
      <div className="bg-[#292727] w-full  min-w-[500px] max-h-[300px] h-[300px] relative">
        <Image
          src="/images/aboutImages/goingtowards.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col  px-[4rem] py-[2rem] gap-[20px] bg-[#292727]">
        <h2 className="text-[3rem]  text-[#fff]">
          Chasing the next <span className="font-600">level</span>
        </h2>

        <p className="text-[#fff] text-[18px] max-w-[1400px]">
          Every great game starts with a dream — and ours is to build
          experiences that players can’t put down. What began as a small indie
          squad has turned into a journey of constant leveling up: more ideas,
          more worlds, more players.
        </p>
      </div>
    </div>
  );
};

export default GoingTowards;
