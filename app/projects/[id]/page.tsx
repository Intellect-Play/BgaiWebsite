"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "./ProjectDetailPage.scss";
import PageBannerComponent from "@/app/_components/PageBannerComponent";

interface Project {
  _id: string;
  title: string;
  image: string;
  description: string;
  createdAt: string;
}

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/bgaiv1/projects/${id}`
        );
        const data = await res.json();
        if (data.success) {
          setProject(data.project);
        }
      } catch (error) {
        console.error("Project fetch failed:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProject();
  }, [id]);

  if (loading) return <div className="project-detail-loading">Loading...</div>;
  if (!project)
    return <div className="project-detail-error">Project not found</div>;

  return (
    <>
      <PageBannerComponent
        title="Project"
        textSize="4.3rem"
        textColor="white"
        textWeight="600"
        backgroundImage="/images/lifeAtPeak.jpg"
        height="65vh"
      />

      <div className="project-detail">
        <h1 className="project-title">{project.title}</h1>

        <div className="project-image-wrapper">
          <img
            src={`${process.env.NEXT_PUBLIC_API_URL}${project.image}`}
            alt={project.title}
            className="project-image"
          />
        </div>

        <div
          className="project-description"
          dangerouslySetInnerHTML={{ __html: project.description }}
        ></div>

        <div className="project-footer">
          <span>
            Created at: {new Date(project.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailPage;
