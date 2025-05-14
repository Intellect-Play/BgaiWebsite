"use client";
import React, { useEffect, useState } from "react";
import Logo from "../../_assets/images/peak.png";
import DarkLogo from "../../_assets/images/secondpeak.png";

import Image from "next/image";
import { menuItems } from "@/app/constants/MenuItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setSidebarOpen, toggleSidebar } from "@/redux/sidebar/sidebarSlice";
import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import Sidebar from "../Sidebar/Sidebar";
import CustomButton from "@/app/_components/CustomButton";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const pathname = usePathname();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`w-full z-[10] fixed top-0 left-0  transition-colors duration-700 h-[70px] flex items-center px-[10px], 
        ${
          scrolled
            ? "bg-[#fff] text-[#000] shadow-lg"
            : "bg-transparent text-[#fff]"
        }
        `}
      >
        <div className="max-w-[1000px] px-[10px] mx-auto w-full flex justify-between items-center">
          <motion.div
            initial={{ y: scrolled ? 20 : 0, opacity: scrolled ? 0 : 1 }}
            animate={{ y: 0, opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            className=" h-[50px]"
          >
            <Image
              src={scrolled ? DarkLogo : Logo}
              alt="Bgai_Logo"
              className="h-full w-auto object-contain"
            />
          </motion.div>

          <ul className="flex header__mobile  text-[18px]  h-full items-center">
            {menuItems.map((item) => (
              <motion.li
                key={item.path}
                initial={{ y: scrolled ? 20 : 0, opacity: scrolled ? 0 : 1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className=" "
              >
                <Link
                  href={item.path}
                  className={`h-full flex items-center font-[600]  transition duration-200 ease-linear   py-[18px] px-[18px] px-3 ${
                    pathname === item.path
                      ? scrolled
                        ? "bg-[#000]/10 text-[#000]"
                        : "bg-[#fff]/10 text-[#fff]"
                      : ""
                  }       ${
                    scrolled
                      ? "hover:bg-[#000]/10 hover:text-[#000]"
                      : "hover:bg-[#fff]/10 hover:text-[#fff]"
                  }

                  `}
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </ul>

          <div className="header__hamburger">
            <button
              className="p-[15px] cursor-pointer"
              onClick={() => dispatch(toggleSidebar())}
            >
              <Menu color={scrolled ? "#000" : "#fff"} size={30} />
            </button>
          </div>
        </div>
      </div>
      <Sidebar />
    </>
  );
};

export default Header;
