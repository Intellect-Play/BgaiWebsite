import PageBannerComponent from "@/app/_components/PageBannerComponent";
import React from "react";
import Description from "./description/Description";
import Boxes from "./boxes/Boxes";

const page = () => {
  return (
    <div>
      <PageBannerComponent
        title="Internships"
        textSize="4.3rem"
        textColor="white"
        textWeight="600"
        backgroundImage="/images/lifeAtPeak.jpg"
        height="65vh"
      />
      <Description />
      <Boxes />
    </div>
  );
};

export default page;
