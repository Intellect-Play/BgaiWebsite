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

const HowWeWorkCard: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  showReadMore = true,
  onReadMoreClick,
}) => {
  return (
    <div
      className={`bg-[#fff] cursor-pointer  transition-transform duration-300 hover:-translate-y-[3px] max-w-[22rem] ${
        showReadMore ? "h-[350px] " : "h-[320px]"
      }  rounded-[4px] overflow-hidden shadow-[0_35px_35px_rgba(0,0,0,0.25)] flex flex-col`}
    >
      <div className="relative w-full h-[150px]">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>

      <div className="p-4 flex flex-col gap-[5px] flex-1 items-start justify-start py-[40px] px-[30px]">
        <h2 className="text-[20px] font-[700] text-gray-800 mb-2 text-[#444444] ">
          {title}
        </h2>
        <p className="text-gray-600 text-[#444444] text-[17px] ">
          {description}
        </p>

        {showReadMore && (
          <button
            onClick={onReadMoreClick}
            className="mt-[10px] flex justify-center items-center font-[600] text-[#444444]  text-[14px] font-bold text-red-700 hover:text-red-900 transition"
          >
            READ MORE <ChevronRight size={14} color="#B12028" />
          </button>
        )}
      </div>
    </div>
  );
};

export default HowWeWorkCard;
