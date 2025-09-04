import { COLORS } from "@/app/constants/colors/colors";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string; // HTML string
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
      className={[
        // layout
        "group relative flex flex-col overflow-hidden",
        // surface
        "rounded-xl border border-black/5 bg-white shadow-sm",
        // size (keep close to your original footprint)
        "w-[22rem] max-w-[22rem]",
        // motion
        "transition-all duration-300 hover:shadow-md hover:-translate-y-0.5",
        // focus (if the whole card is focusable later, ring looks ready)
        "focus-within:ring-2 focus-within:ring-black/10",
      ].join(" ")}
    >
      {/* Media */}
      <div className="relative h-[150px] w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 90vw, 22rem"
          priority={false}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 px-5 py-5">
        <h2 className="text-[18px] font-semibold leading-6 text-gray-900">
          {title}
        </h2>

        {/* HTML description (clamped to ~3 lines visually) */}
        <div
          className="text-[15px] leading-6 text-gray-700"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
          }}
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {showReadMore && (
          <button
            type="button"
            onClick={onReadMoreClick}
            className="mt-2 inline-flex  items-center gap-1 self-start text-sm font-medium text-blue-500 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
            aria-label={`Read more about ${title}`}
          >
            READ MORE
            <ChevronRight size={16} color={COLORS.primary} />
          </button>
        )}
      </div>
    </div>
  );
};

export default HowWeWorkCard;
