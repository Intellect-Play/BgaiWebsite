"use client";
import React from "react";
import PageBannerComponent from "../_components/PageBannerComponent";
import HowWeWorkCard from "../_components/howWeWork/howWeWorkCard";
import { howWeWorkItems } from "../constants/howWeWorkItems";
import ReadyToJoinUs from "../home/ReadyToJoinUs/ReadyToJoinUs";

const HowWeWork = () => {
  return (
    <div>
      <PageBannerComponent
        title="How We Work"
        backgroundImage="/images/howwework.jpg"
        height="70vh"
        textColor="#fff"
        textSize="4rem"
        textWeight="600"
      />
      <div className="bg-[#F9F9F9] py-[2rem] ">
        <div className="max-w-[1200px] mx-auto  ">
          <div className="flex justify-center items-center gap-[20px] flex-wrap">
            {howWeWorkItems &&
              howWeWorkItems.map((item) => {
                return (
                  <div key={item.id}>
                    <HowWeWorkCard
                      title={item.title}
                      description={item.desc}
                      imageSrc={item.image}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <ReadyToJoinUs
        backgroundImage="/images/guysimage.jpg"
        title="Ready to join us?"
        textSize="4rem"
        textColor="#fff"
      />
    </div>
  );
};

export default HowWeWork;
