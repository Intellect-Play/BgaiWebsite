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
    <div>
      <div className="games-grid">
        {games.map((game) => (
          <div className="game-card" key={game._id}>
            <p className="category">{game.category}</p>
            <h3 className="title">{game.title}</h3>
            <img
              src={
                game.image && game.image.startsWith("http")
                  ? game.image
                  : game.image
                  ? `${process.env.NEXT_PUBLIC_API_URL}${game.image}`
                  : "/images/defaultGameImage.png"
              }
              alt={game.title}
              style={{
                width: 160,
                height: 160,
                objectFit: "cover",
                borderRadius: 20,
              }}
            />

            <div className="store-buttons">
              <Image
                alt="google"
                src="/images/googledownload.png"
                width={120}
                height={40}
                onClick={() => handleStoreClick(game.googlePlayLink)}
                className="cursor-pointer store-btn"
              />
              <Image
                alt="appstore"
                src="/images/appstoredownload.png"
                width={120}
                height={40}
                onClick={() => handleStoreClick(game.appStoreLink)}
                className="cursor-pointer store-btn"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewGamesSection;
