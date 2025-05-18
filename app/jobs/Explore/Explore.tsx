import { COLORS } from "@/app/constants/colors/colors";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  showReadMore?: boolean;
  onReadMoreClick?: () => void;
}

const Explore: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  onReadMoreClick,
}) => {
  return (
    <div className=" ">
      <div>
        <div
          className={`bg-[#fff]  cursor-pointer  transition-transform duration-300 hover:-translate-y-[3px] w-[22rem] max-w-[22rem] 
     rounded-[4px] overflow-hidden shadow-[0_35px_35px_rgba(0,0,0,0.25)] flex flex-col`}
        >
          <div className="relative w-full h-[150px]">
            <Image src={imageSrc} alt={title} fill className="object-cover" />
          </div>

          <div className="p-4 flex flex-col gap-[5px] flex-1 items-start justify-start py-[20px] px-[30px]">
            <h2 className="text-[20px] font-[700] text-gray-800 mb-2 text-[#444444] ">
              {title}
            </h2>

            <p className="flex justify-center items-center text-[#444444]">
              <ChevronRight size={20} color={COLORS.primary} /> {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
