import React from "react";
import PageBannerComponent from "../_components/PageBannerComponent";

const AboutBanner = () => {
  return (
    <div>
      <PageBannerComponent
        title="CHASING OUR DREAMS"
        backgroundImage="/images/about.jpg"
        height="70vh"
        textSize="3rem"
        textColor="white"
        textWeight="700"
      />
    </div>
  );
};

export default AboutBanner;
