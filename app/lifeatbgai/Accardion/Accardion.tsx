"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./accardion.scss";
import { COLORS } from "@/app/constants/colors/colors";

const items = [
  {
    title: "Growth Opportunities",
    description:
      "Take ownership of projects, expand your skills, and grow with a fast-developing studio that values creativity and initiative.",
  },
  {
    title: "Creative Freedom",
    description:
      "Your ideas directly influence our games—every team member plays a key role in shaping gameplay and design.",
  },
  {
    title: "Flexible Work Style",
    description:
      "Work remotely or in hybrid mode across our international team, with flexible hours that fit your lifestyle.",
  },
  {
    title: "Rewards & Recognition",
    description:
      "Enjoy competitive pay, performance bonuses, and opportunities to share in the success of our published games.",
  },
  {
    title: "Team Culture",
    description:
      "Join a supportive, diverse, and collaborative environment where innovation, fun, and open communication thrive.",
  },
];

const Accardion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F9F9F9] py-[30px]">
      <div className="benefits-wrapper">
        <div className="benefits-left">
          <h2 className="font-[600]">
            Perks <span>&</span> Benefits
          </h2>
        </div>

        <div className="benefits-right">
          {items.map((item, index) => (
            <div
              key={index}
              className={`accordion-item ${openIndex === index ? "open" : ""}`}
            >
              <div className="accordion-title" onClick={() => toggle(index)}>
                {item.title}
                <span className="icon" style={{ color: COLORS.primary }}>
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </div>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    className="accordion-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{item.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accardion;
