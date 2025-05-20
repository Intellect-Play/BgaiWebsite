"use client";

import React from "react";
import "./newgamessection.scss";
import Image from "next/image";

const NewGamesSection = () => {
  const handleGoogleClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.example.app",
      "_blank"
    );
  };

  const handleAppstoreClick = () => {
    window.open("https://apps.apple.com/app/id000000000", "_blank");
  };

  return (
    <div>
      <div className="games-grid">
        <div className="game-card ">
          <p className="category">Puzzle</p>
          <h3 className="title">Seat Away</h3>
          <img src="/images/gameImages/toyblast.png" alt="Seat Away" />

          <div className="store-buttons">
            <Image
              alt="google"
              src="/images/googledownload.png"
              width={120}
              height={40}
              onClick={handleGoogleClick}
              className="cursor-pointer store-btn"
            />
            <Image
              alt="appstore"
              src="/images/appstoredownload.png"
              width={120}
              height={40}
              onClick={handleAppstoreClick}
              className="cursor-pointer store-btn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewGamesSection;
