"use client";
import React, { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "../Header/Header";
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="">
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
