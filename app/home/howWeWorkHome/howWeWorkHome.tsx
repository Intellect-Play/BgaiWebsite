import HowWeWorkCard from "@/app/_components/howWeWork/howWeWorkCard";
import { howWeWorkItems } from "@/app/constants/howWeWorkItems";
import React from "react";
import "./HowWeWorkHome.scss";
import CustomButton from "@/app/_components/CustomButton";
import { ChevronRight } from "lucide-react";

const HowWeWorkHome = () => {
  return (
    <div className="bg-[#F9F9F9] mt-[80px] pt-[20px] pb-[60px] ">
      <div className="flex  flex-col howWeWorkWrap max-w-[1200px] mx-auto  gap-[10px]">
        <h2 className=" text-[3rem] text-[#444444]">
          How We <span className="font-[600]"> Work </span>
        </h2>
        <div className=" mt-[50px]  howWeWorkWrap flex flex-wrap gap-[50px]">
          {howWeWorkItems.slice(0, 3).map((item, idx) => {
            return (
              <div key={item.id} className="">
                <HowWeWorkCard
                  title={item.title}
                  description={item.desc}
                  imageSrc={item.image}
                  showReadMore={false}
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center mt-[50px]">
          <CustomButton
            title="SEE ALL"
            width="10rem"
            expandedWidth="10.5rem"
            icon={<ChevronRight />}
          />
        </div>
      </div>
    </div>
  );
};

export default HowWeWorkHome;
