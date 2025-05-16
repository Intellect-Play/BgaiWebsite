import React from "react";
import PageBannerComponent from "../_components/PageBannerComponent";
import GamesSection from "./gamesSection/GamesSection";

const page = () => {
  return (
    <div>
      <PageBannerComponent
        title="Our Games"
        textSize="4rem"
        textColor="white"
        textWeight="600"
        backgroundImage="/images/games.jpg"
      />
      <GamesSection />
    </div>
  );
};

export default page;
