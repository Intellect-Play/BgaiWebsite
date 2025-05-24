import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import "./ProjectsCard.scss";

interface CardProps {
  id: string;
  imageSrc: string;
  title: string;
  description?: string;
  showReadMore?: boolean;
  onReadMoreClick?: () => void;
}

const ProjectsCard: React.FC<CardProps> = ({
  id,
  imageSrc,
  title,
  onReadMoreClick,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/projects/${id}`);
  };

  return (
    <div className="projects-card-wrapper" onClick={handleClick}>
      <div className="projects-card group">
        <div className="projects-card-image">
          <Image src={imageSrc} alt={title} fill className="image" />
        </div>
        <div className="projects-card-content">
          <h3>{title}</h3>
          {/* <p>{description}</p> */}
          <div
            className="read-more"
            onClick={(e) => {
              handleClick;
            }}
          >
            Read more <ChevronRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
