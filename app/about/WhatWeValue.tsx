import React from "react";
import { COLORS } from "../constants/colors/colors";
import { whatWeValueItems } from "../constants/whatWeValueItems";
import "./WhatWeValue.scss";
const WhatWeValue = () => {
  return (
    <div className="bg-[#F9F9F9] py-[7rem] px-[10px]">
      <div className="flex flex-col max-w-[1200px] mx-auto">
        <div>
          <h2 className="text-[3rem] pb-[2rem] text-[#444444]">
            What We <span className="font-[600]"> Value </span>
          </h2>
        </div>
        <div className="flex gap-[10px] whatWeValueJustify justify-between">
          {whatWeValueItems &&
            whatWeValueItems.map((item, idx) => {
              return (
                <div
                  key={item.id}
                  className="max-w-[23rem] whatWeValueCardWidth bg-[#fff] px-[40px] py-[30px] shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-[3px]"
                >
                  <h2
                    className="text-center text-[20px] font-[600]"
                    style={{ color: COLORS.primary }}
                  >
                    {item?.title}
                  </h2>
                  <p className="text-[18px] text-[#444444] text-center">
                    {item?.desc}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default WhatWeValue;
