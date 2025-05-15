"use client";
import React, { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollToTopButton from "@/app/_components/ScroolToTop/ScrollToTop";
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="">
        <Header />
        {children}
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Layout;
