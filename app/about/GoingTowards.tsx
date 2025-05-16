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
          Going towards our <span className="font-600">dream</span>
        </h2>

        <p className="text-[#fff] text-[18px] max-w-[1400px]">
          More than a decade ago we set out with a dream: To have millions of
          people playing our games all over the globe. With more than 400
          million players, our dream keeps getting bigger. We're going above and
          beyond, ever-improving our games and reaching more and more people.
        </p>
      </div>
    </div>
  );
};

export default GoingTowards;
