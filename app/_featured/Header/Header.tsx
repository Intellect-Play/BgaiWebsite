"use client";
import React, { useState } from "react";
import Logo from "../../_assets/images/peak.png";
import Image from "next/image";
import { menuItems } from "@/app/constants/MenuItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import "./header.scss";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 bg-[#f4f4f4] h-[70px] flex items-center">
      <div className="max-w-[1000px] mx-auto w-full flex justify-between items-center">
        <div className="flex items-center h-[50px]">
          <Image
            src={Logo}
            alt="Bgai_Logo"
            className="h-full w-auto object-contain"
          />
        </div>

        <ul className="flex header__mobile gap-[30px]  h-full items-center">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`h-full flex items-center px-3 ${
                  pathname === item.path ? "bg-[#f4d4]  rounded-md" : ""
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="header__hamburger">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
