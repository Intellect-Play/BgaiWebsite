import React from "react";
import PageBannerComponent from "../_components/PageBannerComponent";
import HowWeWorkCard from "../_components/howWeWork/howWeWorkCard";

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
        <div className="max-w-[1200px] mx-auto ">
          <HowWeWorkCard
            title="Art"
            description="Playing games is a worldwide party that everyone enjoys,..."
            imageSrc="/images/swiperImages/swip1.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
