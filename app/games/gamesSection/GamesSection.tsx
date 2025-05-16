import Image from "next/image";
import React from "react";
import "./GamesSection.scss";
import GameCard from "@/app/_components/GamesSection/GamesSectionCard";

const GamesSection = () => {
  return (
    <div className="px-[10px]">
      <div className="">
        <div className=" max-w-[1200px] mx-auto">
          <GameCard
            image="/images/gameImages/toyblast.png"
            title="Toy Blast"
            description="Launched in 2015, Toy Blast has steadily become one of the most popular puzzle games globally. By combining the intuitive tap-and-blast game mechanic with best-in-class art direction, Toy Blast evolved exponentially while the team grew and developed alongside it. Today, with more than 200 million downloads, Toy Blast has become a daily source of joy across the world."
            link="/games/toy-blast"
            googleLink="https://play.google.com/store/apps/details?id=com.peakgames.toyblast"
            appstoreLink="https://apps.apple.com/us/app/toy-blast/id890378044"
          />
        </div>
      </div>

      <div className="bg-[#F9F9F9]">
        <div className=" max-w-[1200px] mx-auto">
          <GameCard
            image="/images/gameImages/toonblast.png"
            title="Toon Blast"
            description="Toon Blast was able to hit unprecedented heights immediately after its launch and reached 100 million users in its first year. With a completely novel approach to user experience, a never-ending content design and an intrinsic social experience at its core, Toon Blast represented a paradigm shift in puzzle games. To date, Toon Blast is one of the most popular games in the US and ranks among the top-5 grossing iOS games in the same market."
            link="/games/toy-blast"
            googleLink="https://play.google.com/store/apps/details?id=com.peakgames.toyblast"
            appstoreLink="https://apps.apple.com/us/app/toy-blast/id890378044"
            direction="flex-row-reverse"
          />
        </div>
      </div>

      <div className="">
        <div className=" max-w-[1200px] mx-auto">
          <GameCard
            image="/images/gameImages/matchfactory.png"
            title="Match Factory"
            description="Our latest addition to the puzzle gaming universe promises to continue the legacy of innovation and entertainment set by its predecessors Toon Blast and Toy Blast. Launched with cutting-edge game mechanics, it immerses players in a captivating world of 3D match games. As we embark on this new journey, we anticipate Match Factory to reach millions of players around the world by offering a daily source of delight."
            link="/games/toy-blast"
            googleLink="https://play.google.com/store/apps/details?id=com.peakgames.toyblast"
            appstoreLink="https://apps.apple.com/us/app/toy-blast/id890378044"
          />
        </div>
      </div>
    </div>
  );
};

export default GamesSection;
