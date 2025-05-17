"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./accardion.scss";

const items = [
  "Learning & Development",
  "Compensation",
  "Travels",
  "Health",
  "Relocation",
];

const Accardion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="benefits-wrapper">
      <div className="benefits-left">
        <h2>
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
              {item}
              <span className="icon">{openIndex === index ? "▲" : "▼"}</span>
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
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accardion;
