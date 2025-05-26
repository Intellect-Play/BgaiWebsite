import { COLORS } from "@/app/constants/colors/colors";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface CardProps {
  id: string;
  imageSrc: string;
  title: string;
  description?: string;
  showReadMore?: boolean;
  onReadMoreClick?: () => void;
}

const Explore: React.FC<CardProps> = ({
  id,
  imageSrc,
  title,
  description,
  onReadMoreClick,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/jobs/${id}`);
  };

  return (
    <div onClick={handleClick}>
      <div>
        <div
          className={`bg-[#fff] max-h-[15rem] h-[15rem]  cursor-pointer  transition-transform duration-300 hover:-translate-y-[3px] w-[22rem] max-w-[22rem] 
     rounded-[4px] overflow-hidden shadow-[0_2px_6px_rgba(0,0,0,0.03)] flex flex-col`}
        >
          <div className="relative w-full h-[150px]">
            <Image src={imageSrc} alt={title} fill className="object-cover" />
          </div>

          <div className="p-4 flex flex-col gap-[5px] flex-1 items-start justify-start py-[20px] px-[30px]">
            <h2 className="text-[20px] font-[700] text-gray-800 mb-2 text-[#444444] ">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
