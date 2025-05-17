import React from "react";

import "./focus.scss";
const Focus = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-[10px] ">
      <div className="focus-header">
        <h2 className="text-[3rem] text-[#444444]">
          <span className="font-[600]"> Focus </span> on doing what you do best
        </h2>
        <p className="text-[#444444]">
          The rest is up to us! We form an environment that makes it easy for
          you to focus on doing your best work.
        </p>
      </div>

      <div className="features-container py-[20px]">
        <div className="feature-box">
          <h2 className="feature-title">Food</h2>
          <p className="feature-text">
            Enjoy your favorite food choices at any time of day. Our team of
            culinary experts prepares delicious breakfast, lunch, and dinner in
            our spacious kitchen to make your life easy and tasty. Additionally,
            we offer a variety of snacks and beverages to cater to both healthy
            and less healthy preferences.
          </p>
        </div>

        <div className="feature-box">
          <h2 className="feature-title">Events</h2>
          <p className="feature-text">
            We frequently have fun together on company trips, cinema nights,
            brunches, concerts, outdoor activities and monthly get together
            parties in our office. We create lots of opportunities to enjoy life
            to the max - but only during weekdays, because it's up to you how
            you spend your weekend.
          </p>
        </div>

        <div className="feature-box">
          <h2 className="feature-title">Location</h2>
          <p className="feature-text">
            Our office is at the heart of Istanbul. We’re very close to major
            public transportation lines and the Bosphorus is just around the
            corner - so if you need a break or seeking inspiration, just walk up
            to the terrace, soak up the jaw dropping views and relax.
          </p>
        </div>

        <div className="feature-box">
          <h2 className="feature-title">Equipment</h2>
          <p className="feature-text">
            Freedom to choose your tools and equipment. Whether it’s a Mac, an
            IDE or any software or hardware - choose whatever equipment you need
            to thrive on.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Focus;
