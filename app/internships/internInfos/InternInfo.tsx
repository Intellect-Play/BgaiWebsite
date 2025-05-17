import React from "react";
import "./interninfo.scss";
const InternInfo = () => {
  return (
    <div>
      <div className="intern-info-container">
        <div className="info-box">
          <h2 className="info-title">
            To help you stand out, here are some application tips
          </h2>
          <ul className="info-list">
            <li>
              Find the internship role that motivates you the most! Do your
              research about the positions, go beyond the job description
            </li>
            <li>
              Dig into our website and learn more about{" "}
              <span className="link-text">How We Work</span>
            </li>
            <li>
              You don’t have to be a hard–core gamer but we hope you enjoy
              playing games
            </li>
            <li>
              Along with your resume, we’d love to learn about your motivation
              to the gaming world! Please share any academic or personal
              projects that showcase your technical skills or creative tools
              you’re familiar with. Ensure that the information you provide is
              up to date and truly reflects you
            </li>
          </ul>
        </div>

        <div className="info-box">
          <h2 className="info-title">Hiring Process</h2>
          <p>
            After getting your application we will review and let you know about
            the process via email. As a next stage there will be a role based
            assessment proccess. If you progress to the next stage you'll be
            invited for a video interview with one of our recruiters and team
            members. On the final interview, you'll meet with one of our team
            leads and have a chance to talk more about the internship details.
          </p>
          <p>
            Throughout the interview process, we will assess your excitement for
            the role, technical expertise, and curiosity about the mobile gaming
            world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InternInfo;
