"use client";
import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-[30px] right-[30px] bg-[#B12028] p-3 rounded-[5px] shadow-lg hover:bg-[#900000] transition-all duration-300 z-50 group"
      >
        <ChevronUp
          size={24}
          className="text-[#ffffff80] group-hover:text-white transition-colors duration-300"
        />
      </button>
    )
  );
};

export default ScrollToTopButton;
