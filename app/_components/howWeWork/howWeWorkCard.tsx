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

const HowWeWorkCard: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  showReadMore = true,
  onReadMoreClick,
}) => {
  return (
    <div
      className={`bg-[#fff] cursor-pointer  transition-transform duration-300 hover:-translate-y-[3px] min-w-[22rem] max-w-[22rem] ${
        showReadMore ? "h-[350px] " : "h-[320px]"
      }  rounded-[4px] overflow-hidden shadow-[0_2px_6px_rgba(0,0,0,0.03)] flex flex-col`}
    >
      <div className="relative w-full h-[150px]">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>

      <div className="py-[40px] px-[30px] flex flex-col gap-[5px] flex-1 items-start justify-start">
        <h2 className="text-[20px] font-[700] text-gray-800 mb-2 text-[#444444] ">
          {title}
        </h2>
        <div
          className=" w-full  text-[17px] text-[#444444] [&>*]:max-w-full [&>*]:break-words  "
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>

        {showReadMore && (
          <button
            onClick={onReadMoreClick}
            className="mt-[10px] flex justify-center items-center font-[600] text-[#444444]  text-[14px] font-bold text-red-700 hover:text-red-900 transition"
          >
            READ MORE <ChevronRight size={14} color={COLORS.primary} />
          </button>
        )}
      </div>
    </div>
  );
};

export default HowWeWorkCard;
