"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./accardion.scss";
import { COLORS } from "@/app/constants/colors/colors";

const items = [
  {
    title: "Learning & Development",
    description:
      "Keep on learning. We are frequently attending relevant conferences and have several on-demand learning platforms at your disposal. If you need anything on top of that let us know - we’ll make it ready for you.",
  },
  {
    title: "Compensation",
    description:
      "Only a free mind can do great things. Our compensation leaves no room for worries.",
  },
  {
    title: "Travels",
    description:
      "Broaden your horizon together with your team during various trips and events. Some teams link this to a conference, some just choose a country they want to explore together.",
  },
  {
    title: "Health",
    description:
      "The most precious thing we have is our health. We provide you, your spouse and your children with a fully-paid private insurance package to ensure you’re covered in case you need it. Feel free to also take advice or a second opinion from our company doctor.",
  },
  {
    title: "Relocation",
    description:
      "We offer a relocation package that makes life easier for you while relocating and making yourself comfy in Istanbul – one of the most vibrant and cosmopolitan cities in the world.",
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
