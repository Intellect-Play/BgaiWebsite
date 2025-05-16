"use client";
// components/GameCard.tsx
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface GameCardProps {
  image: string;
  title: string;
  description: string;
  link?: string;
  googleLink?: string;
  appstoreLink?: string;
  direction?: string;
}

const GameCard: React.FC<GameCardProps> = ({
  image,
  title,
  description,
  link,
  googleLink,
  appstoreLink,
  direction,
}) => {
  const router = useRouter();

  const handleGoogleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (googleLink) window.open(googleLink, "_blank");
  };

  const handleAppstoreClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (appstoreLink) window.open(appstoreLink, "_blank");
  };

  return (
    <div className={`flex ${direction} gamesJustify gap-[2rem] py-[5rem]`}>
      <div className="flex-shrink-0 w-[400px] md:w-[300px] lg:w-[350px]">
        <Image
          height={800}
          width={800}
          alt={title}
          src={image}
          className="gameImage"
        />
      </div>
      <div className="flex flex-col gap-[20px]">
        <h2 className="text-[3rem] gameText text-[#444444] font-[600]">
          {title}
        </h2>
        <p className="max-w-[1300px] w-full gameText text-[18px] text-[#444444]">
          {description}
        </p>

        <div className="flex gap-[20px] mt-[2rem] centerItems">
          <Image
            height={170}
            width={170}
            alt="google"
            src="/images/googledownload.png"
            className="cursor-pointer"
            onClick={handleGoogleClick}
          />
          <Image
            height={170}
            width={170}
            alt="appstore"
            src="/images/appstoredownload.png"
            className="cursor-pointer"
            onClick={handleAppstoreClick}
          />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
