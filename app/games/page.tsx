"use client";
import React from "react";
import PageBannerComponent from "../_components/PageBannerComponent";
import GamesSection from "./gamesSection/GamesSection";
import ReadyToJoinUs from "../home/ReadyToJoinUs/ReadyToJoinUs";
import NewGamesSection from "./newGamesSection/NewGamesSection";
import TargetCursor from "@/components/TargetCursor";

const page = () => {
  return (
    <div>
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <PageBannerComponent
        title="Our Games"
        textSize="4rem"
        textColor="white"
        textWeight="600"
        backgroundImage="/images/games.jpg"
      />
      {/* <GamesSection /> */}
      <NewGamesSection />
      <ReadyToJoinUs
        backgroundImage="/images/guysimage.jpg"
        title="Ready to join us?"
        textSize="4rem"
        textColor="#fff"
      />
    </div>
  );
};

export default page;
