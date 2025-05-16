"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="w-full h-screen bg-[#f2f2f2] dark:bg-[#F9F9F9] flex items-center justify-center">
      <div className="relative w-[100px] h-[100px]">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 left-0 w-full h-full rounded-full border border-[#60a5fa]"
            initial={{ scale: 0.5, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
        <div className="w-[30px] h-[30px] rounded-full bg-[#60a5fa] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />
      </div>
    </div>
  );
}
