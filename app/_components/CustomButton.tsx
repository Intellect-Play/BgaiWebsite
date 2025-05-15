import React, { useState } from "react";

interface CustomButtonProps {
  title: string;
  icon?: React.ReactNode;
  width?: string;
  expandedWidth?: string;
  height?: string;
  bgColor?: string;
  textColor?: string;
  fontSize?: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  icon,
  width = "12rem",
  expandedWidth = "15rem",
  height = "3rem",
  bgColor = "#B12028",
  textColor = "#fff",
  fontSize = "18px",
  onClick,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className="group flex items-center gap-2  font-[700] cursor-pointer rounded-full  hover:bg-gray-300 transition-all duration-300 overflow-hidden pl-[40px]"
      style={{
        width: hovered ? expandedWidth : width,
        height,
        backgroundColor: bgColor,
        fontSize: fontSize,
        color: textColor,
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
