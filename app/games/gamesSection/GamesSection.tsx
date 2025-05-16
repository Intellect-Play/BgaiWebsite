import Image from "next/image";
import React from "react";
import "./GamesSection.scss";
import GameCard from "@/app/_components/GamesSection/GamesSectionCard";

const GamesSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <GameCard
        image="/images/gameImages/toyblast.png"
        title="Toy Blast"
        description="Launched in 2015, Toy Blast has steadily become one of the most popular puzzle games globally. By combining the intuitive tap-and-blast game mechanic with best-in-class art direction, Toy Blast evolved exponentially while the team grew and developed alongside it. Today, with more than 200 million downloads, Toy Blast has become a daily source of joy across the world."
        link="/games/toy-blast"
        googleLink="https://play.google.com/store/apps/details?id=com.peakgames.toyblast"
        appstoreLink="https://apps.apple.com/us/app/toy-blast/id890378044"
      />
    </div>
  );
};

export default GamesSection;
