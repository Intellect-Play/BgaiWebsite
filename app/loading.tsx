"use client";
import { useEffect, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingWrapperProps {
  children: ReactNode;
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1, filter: "blur(0px)" }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              filter: "blur(10px)",
              transition: { duration: 0.5 },
            }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center bg-[#f2f2f2] dark:bg-[#F9F9F9]"
          >
            <img
              src="/images/logoBG.png"
              alt="Loading..."
              className="w-[300px] h-[200px]"
            />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
