"use client";
import React, { useEffect, useState } from "react";
import PageBannerComponent from "../_components/PageBannerComponent";
import ReadyToJoinUs from "../home/ReadyToJoinUs/ReadyToJoinUs";
import ProjectsCard from "../_components/Projects/ProjectsCard";

interface ProjectType {
  _id: string;
  title: string;
  image: string;
  description?: string;
  createdAt: string;
}

const page = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const apiEndpoint = "api/bgaiv1/projects";

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/${apiEndpoint}`
        ); // API endpointin buysa
        const data = await res.json();
        if (data.success) {
          setProjects(data.projects);
        }
      } catch (err) {
        console.error("Veri çekilemedi", err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <PageBannerComponent
        title="Projects"
        textSize="4.3rem"
        textColor="white"
        textWeight="600"
        backgroundImage="/images/lifeAtPeak.jpg"
        height="65vh"
      />

      <div className="flex py-[5rem] flex-wrap max-w-[1200px] mx-auto gap-[30px] justify-center items-center">
        {projects.map((project) => (
          <ProjectsCard
            key={project._id}
            id={project._id}
            title={project.title}
            imageSrc={`${process.env.NEXT_PUBLIC_API_URL}${project?.image}`}
          />
        ))}
      </div>

      <ReadyToJoinUs
        backgroundImage="/images/guysimage.jpg"
        title="Start shaping your future!"
        textSize="4rem"
        textColor="#fff"
      />
    </div>
  );
};

export default page;
