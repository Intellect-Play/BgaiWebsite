import React from "react";
import "./boxes.scss";

const Boxes = () => {
  return (
    <div>
      <div className="internship-container">
        <div className="internship-box">
          <h2 className="title text-center">Summer Internships</h2>
          <p>
            Our summer internship programs aims to foster both personal and
            professional growth while giving you a taste of what it’s like to
            work in a fast–paced, collaborative environment.
          </p>
          <p>
            We're welcoming 3rd and 4th grad university students to join our
            summer internship programs. You’ll spend two productive months with
            us, working in the office 5 days a week and getting hands–on
            experience with our teams. Just be sure your schedule is clear so
            you can fully dive in and make the most of it!
          </p>
          <p className="red-text">
            Applications are now closed! Thank you for your interest, hope to
            see you next year!
          </p>
        </div>

        <div className="internship-box">
          <h2 className="title text-center">Long–Term Internships</h2>
          <p>
            Long–term internships provide a more in–depth opportunity to gain
            hands–on experience in your field of study or interest. It’s a
            stepping stone towards making a significant entry into the gaming
            world.
          </p>
          <p>
            You'll be an important part of the team that you'll be joining to,
            leaving your fingerprints on the projects you contribute. We're
            welcoming 4th grade university students to join our long term
            internship programs. We expect you to be with us in our office at
            least 3 days a week.
          </p>
          <p className="red-text">
            We open long–term positions from time to time, so keep an eye on our
            website!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
