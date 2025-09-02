import React from "react";

import "./focus.scss";
const Focus = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-[10px] ">
      <div className="focus-header">
        <h2 className="text-[3rem] text-[#444444]">
          <span className="font-[600]"> Focus </span> on Playing Your Best Game
        </h2>
        <p className="text-[#444444]">
          We take care of the extras — so you can focus on creating, coding, and
          leveling up what you do best.
        </p>
      </div>

      <div className="features-container py-[20px]">
        <div className="feature-box">
          <h2 className="feature-title">Snacks & Energy</h2>
          <p className="feature-text">
            From coffee breaks to quick bites, we keep the fuel flowing so you
            can stay sharp through every sprint, playtest, and late-night idea
            drop.
          </p>
        </div>

        <div className="feature-box">
          <h2 className="feature-title">Events</h2>
          <p className="feature-text">
            LAN parties, game jams, movie nights — we love having fun together
            beyond the screen. It’s not just about work; it’s about building
            memories as a squad.
          </p>
        </div>

        <div className="feature-box">
          <h2 className="feature-title">Workspace</h2>
          <p className="feature-text">
            Our setup is simple: comfortable space, fast internet, and a
            creative vibe. Whether you need quiet to grind code or a brainstorm
            corner to drop ideas, we’ve got you covered.
          </p>
        </div>

        <div className="feature-box">
          <h2 className="feature-title">Gear</h2>
          <p className="feature-text">
            Choose your loadout. Mac or PC, tablet or drawing pad — whatever
            tools you need to build epic games, they’re in your hands.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Focus;
