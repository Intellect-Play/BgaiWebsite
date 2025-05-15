import React from "react";

interface PageBannerProps {
  title: string;
  description?: string;
  backgroundImage: string;
  overlayColor?: string; // default siyah transparan
  height?: string;
  textColor?: string;
  textSize?: string;
  textWeight?: string;
}

const PageBannerComponent: React.FC<PageBannerProps> = ({
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
      className="relative w-full flex items-center justify-center text-center"
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
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg max-w-[600px]">{description}</p>
        )}
      </div>
    </div>
  );
};

export default PageBannerComponent;
