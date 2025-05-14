import React, { useState } from "react";

interface CustomButtonProps {
  title: string;
  icon?: React.ReactNode;
  width?: string;
  expandedWidth?: string;
  height?: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  icon,
  width = "12rem",
  expandedWidth = "15rem",
  height = "3rem",
  onClick,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className="group flex items-center gap-2 text-[18px] font-[700] cursor-pointer rounded-full text-[#fff] bg-[#B12028] hover:bg-gray-300 transition-all duration-300 overflow-hidden pl-[40px]"
      style={{
        width: hovered ? expandedWidth : width,
        height,
      }}
    >
      <span className="flex items-center text-center gap-2">{title}</span>
      <span
        className={`ml-auto transition-all duration-300 pr-[10px] ${
          hovered ? "opacity-100 ml-4" : "opacity-0 ml-0"
        }`}
      >
        {icon}
      </span>
    </button>
  );
};

export default CustomButton;
