"use client";

import React from "react";
import AboutBanner from "./AboutBanner";
import WhatWeValue from "./WhatWeValue";
import OurJourney from "./OurJourney";
import GoingTowards from "./GoingTowards";
import ReadyToJoinUs from "../home/ReadyToJoinUs/ReadyToJoinUs";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <WhatWeValue />
      <OurJourney />
      <GoingTowards />
      <ReadyToJoinUs
        textSize="4.3rem"
        textColor="white"
        title="Ready to join us?"
        backgroundImage="/images/guysimage.jpg"
      />
    </div>
  );
};

export default About;
