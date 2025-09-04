import { footerData } from "@/app/constants/footerItems";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#212325] py-[50px]">
      <div className="max-w-[1200px] mx-auto px-[20px] flex-col">
        <div className="flex flex-wrap justify-between items-start gap-[20px]">
          <div className="w-[200px]">
            <Image
              height={100}
              width={100}
              alt="logo"
              src={"/images/peak.png"}
            />
          </div>

          {footerData.map((section, i) => (
            <div key={i} className="w-[200px]">
              <h2 className="mb-[5px] text-[20px] text-[#fff] font-[600]">
                {section.title}
              </h2>
              <ul className="flex flex-col gap-[2px] text-[14px] text-[#A3A4A8]">
                {section.links.map((link, j) => (
                  <li key={j} className=" hover:text-[#fff] duration-300">
                    <Link href={link.path} className="">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-between border-t-[1px] border-t-[#A3A4A8]  mt-[30px] pt-[20px]  ">
          <div className="text-[#A3A4A8]">
            <p>© Bgai. All Rights Reserved</p>
          </div>
          <div className="flex gap-[10px] justify-center items-center pb-[20px]">
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
