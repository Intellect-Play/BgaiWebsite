import CustomButton from "@/app/_components/CustomButton";
import { ChevronRight } from "lucide-react";
import React from "react";

interface ReadyBannerProps {
  title: string;
  description?: string;
  backgroundImage: string;
  overlayColor?: string;
  height?: string;
  textColor?: string;
  textSize?: string;
  textWeight?: string;
}

const ReadyToJoinUs: React.FC<ReadyBannerProps> = ({
  title,
  description,
  backgroundImage,
  overlayColor = "rgba(0,0,0,0.7)",
  height = "60vh",
  textColor,
  textSize,
  textWeight,
}) => {
  return (
    <div
      className="relative  w-full flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height,
      }}
    >
      {/* Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-center"
        style={{
          backgroundColor: overlayColor,
        }}
      >
        <h1
          className={`text-4xl font-bold `}
          style={{
            color: textColor,
            fontSize: textSize,
            fontWeight: textWeight,
          }}
        >
          {title.split(/(join)/i).map((part, index) =>
            /join/i.test(part) ? (
              <span key={index} className="font-[600]">
                {part}
              </span>
            ) : (
              <span key={index}>{part}</span>
            )
          )}
        </h1>
        <div>
          <CustomButton
            title="SEE OPEN POSITIONS"
            width="17rem"
            expandedWidth="17.5rem"
            textColor="#fff"
            icon={<ChevronRight />}
          />
        </div>
      </div>
    </div>
  );
};

export default ReadyToJoinUs;
