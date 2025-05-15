import React from "react";
import PageBannerComponent from "../_components/PageBannerComponent";

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
    </div>
  );
};

export default HowWeWork;
