"use client";

import React, { useEffect, useState } from "react";
import "./newgamessection.scss";
import Image from "next/image";
import axios from "axios";

type Game = {
  _id: string;
  title: string;
  category: string;
  image: string;
  appStoreLink: string;
  googlePlayLink: string;
};

const NewGamesSection = () => {
  const [games, setGames] = useState<Game[]>([]);
  const apiEndpoint = "api/bgaiv1/games";

  const handleStoreClick = (link: string) => {
    if (link) window.open(link, "_blank");
  };

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/${apiEndpoint}`)
      .then((res) => {
        setGames(res.data.games);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="games-wrapper">
      <div className="games-header">
        <h2>Games</h2>
      </div>

      <div className="games-grid">
        {games.map((game) => (
          <div className="game-card" key={game._id}>
            <div className="card-top">
              <span className="category" title={game.category}>
                {game.category}
              </span>
              <h3 className="title" title={game.title}>
                {game.title}
              </h3>
            </div>

            <div className="thumb-wrap">
              <img
                className="thumb"
                src={
                  game.image && game.image.startsWith("http")
                    ? game.image
                    : game.image
                    ? `${process.env.NEXT_PUBLIC_API_URL}${game.image}`
                    : "/images/defaultGameImage.png"
                }
                alt={game.title}
                loading="lazy"
              />
            </div>

            <div className="store-buttons">
              <Image
                alt="Google Play'den indir"
                src="/images/googledownload.png"
                width={140}
                height={44}
                onClick={() => handleStoreClick(game.googlePlayLink)}
                className="cursor-pointer store-btn"
              />
              {/* 
              <Image
                alt="App Store'dan indir"
                src="/images/appstoredownload.png"
                width={140}
                height={44}
                onClick={() => handleStoreClick(game.appStoreLink)}
                className="cursor-pointer store-btn"
              /> 
              */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewGamesSection;
