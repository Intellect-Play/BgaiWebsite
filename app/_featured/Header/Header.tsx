"use client";
import React, { useState } from "react";
import Logo from "../../_assets/images/peak.png";
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

const Header: React.FC = () => {
  const pathname = usePathname();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full z-[10] fixed top-0 left-0 bg-transparent h-[70px] flex items-center">
        <div className="max-w-[1000px] mx-auto w-full flex justify-between items-center">
          <div className="flex items-center h-[50px]">
            <Image
              src={Logo}
              alt="Bgai_Logo"
              className="h-full w-auto object-contain"
            />
          </div>

          <ul className="flex header__mobile gap-[30px] text-[#fff] h-full items-center">
            {menuItems.map((item) => (
              <li className=" " key={item.path}>
                <Link
                  href={item.path}
                  className={`h-full flex items-center   py-[10px] px-[10px] px-3 ${
                    pathname === item.path
                      ? "bg-[#fff]/10 text-[#fff]   rounded-md"
                      : ""
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="header__hamburger">
            <button
              className="p-[15px] cursor-pointer"
              onClick={() => dispatch(toggleSidebar())}
            >
              <Menu color="white" size={30} />
            </button>
          </div>
        </div>
      </div>
      <Sidebar />
    </>
  );
};

export default Header;
