"use client";
import { RootState } from "@/redux/store";
import { Instagram, Linkedin, X as CloseIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { menuItems } from "@/app/constants/MenuItems";
import { setSidebarOpen } from "@/redux/sidebar/sidebarSlice";
import { motion } from "framer-motion";

const Sidebar = () => {
  const pathname = usePathname();
  const isReduxOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isReduxOpen) {
      setVisible(true);
    }
  }, [isReduxOpen]);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <motion.div
      initial={false}
      animate={{ x: visible ? 0 : 350 }}
      transition={{ type: "tween", duration: 0.4 }}
      onAnimationComplete={() => {
        if (!visible) {
          dispatch(setSidebarOpen(false));
        }
      }}
      className="fixed top-0 right-0 z-[100] h-full w-[350px] bg-[#212325] flex flex-col justify-between pointer-events-auto"
    >
      <div>
        <div className="flex justify-between pt-[10px] px-[20px]">
          <div className="flex items-center h-[50px]">
            <Image
              width={100}
              height={100}
              src={"/images/peak.png"}
              alt="Bgai_Logo"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="flex items-center">
            <button onClick={handleClose}>
              <CloseIcon size={30} color="white" />
            </button>
          </div>
        </div>
        <div className="pt-[10px]">
          <ul className="flex flex-col gap-[5px] text-[#fff]">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`h-full w-full flex items-center px-[20px] py-[10px] hover:bg-[#363739] duration-300 ${
                    pathname === item.path ? "bg-[#363739] rounded-md" : ""
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social icons */}
      <div className="flex gap-[15px] justify-center items-center pb-[20px]">
        <a
          href="https://www.instagram.com/bgaitech/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:opacity-80 transition"
        >
          <Instagram size={24} color="white" />
        </a>
        <a
          href="https://www.linkedin.com/company/bg-ai-tech-co/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:opacity-80 transition"
        >
          <Linkedin size={24} color="white" />
        </a>
      </div>
    </motion.div>
  );
};

export default Sidebar;
