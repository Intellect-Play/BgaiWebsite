"use client";
import React from "react";
import PageBannerComponent from "../_components/PageBannerComponent";
import Explore from "./Explore/Explore";
import { jobItems } from "../constants/jobItems";
import "../jobs/jobs.scss";
import CustomButton from "../_components/CustomButton";
import { ChevronRight } from "lucide-react";

const page = () => {
  return (
    <div>
      <PageBannerComponent
        title="Jobs"
        textSize="4.3rem"
        textColor="white"
        textWeight="600"
        backgroundImage="/images/jobImage.jpg"
        height="65vh"
      />

      <div className="bg-[#F9F9F9]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[3rem] jobsCenter">
            <span className="font-[700] text-[#444444]"> Explore </span> jobs
          </p>
          <p className="max-w-[1200px] jobsParagraph">
            Everyone says ‘we are a team’. It’s up to you to find the right one.
            Peak teams are autonomous, fast-moving and focused on improving
            constantly to become the best at what they do. We work together to
            support every member of our team and to make each other stronger. We
            aspire to make a huge impact at a global level and are looking for
            the right people that will help us continue our massive growth.
          </p>
        </div>

        <div className="flex py-[2rem] flex-wrap max-w-[1200px] mx-auto gap-[30px] justify-center items-center">
          {jobItems &&
            jobItems.map((item, idx) => {
              return (
                <Explore
                  key={item.id}
                  title={item.title}
                  description={item?.desc}
                  imageSrc={item.image}
                />
              );
            })}
        </div>
      </div>

      <div className="peak-section">
        <div className="peak-left">
          <h2>
            Are you curious to learn <br /> more about life at{" "}
            <strong>Peak?</strong>
          </h2>
        </div>
        <div className="peak-right">
          <p>
            We form an environment that makes it easy for you to focus on doing
            your best.
          </p>
          <CustomButton
            title="EXPLORE"
            width="10rem"
            expandedWidth="10.5rem"
            icon={<ChevronRight />}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
