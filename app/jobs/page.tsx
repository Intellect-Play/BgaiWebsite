"use client";
import React, { useEffect, useState } from "react";
import PageBannerComponent from "../_components/PageBannerComponent";
import Explore from "./Explore/Explore";
import { jobItems } from "../constants/jobItems";
import "../jobs/jobs.scss";
import CustomButton from "../_components/CustomButton";
import { ChevronRight } from "lucide-react";
import axios from "axios";

interface Job {
  _id: string;
  title: string;
  description: string;
  image: string;
}

const page = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/bgaiv1/jobs`,
          {
            params: { page: 1, limit: 100 },
          }
        );
        console.log("Gelen veri:", res.data);
        setJobs(res.data.jobs || []);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <PageBannerComponent
        title="Jobs"
        textSize="4.3rem"
        textColor="white"
        textWeight="600"
        backgroundImage="/images/jobImage.jpg"
        height="65vh"
      />

      <div className="bg-[#F9F9F9]">
        <div className="max-w-[1100px] pt-[5rem] mx-auto">
          <p className="text-[3rem] jobsCenter">
            <span className="font-[700] text-[#444444]"> Explore </span> jobs
          </p>
          <p className="max-w-[1200px] jobsParagraph text-[18px] text-[#444444]">
            Everyone says ‘we are a team’. It’s up to you to find the right one.
            Peak teams are autonomous, fast-moving and focused on improving
            constantly to become the best at what they do. We work together to
            support every member of our team and to make each other stronger. We
            aspire to make a huge impact at a global level and are looking for
            the right people that will help us continue our massive growth.
          </p>
        </div>

        <div className="flex py-[3rem] flex-wrap max-w-[1200px] mx-auto gap-[30px] justify-center items-center">
          {jobs.map((item) => (
            <Explore
              key={item._id}
              id={item._id}
              title={item.title}
              description={item.description}
              imageSrc={`${process.env.NEXT_PUBLIC_API_URL}${item.image}`}
            />
          ))}
        </div>
      </div>

      <div className="peak-section">
        <div className="peak-left">
          <h2>
            Are you curious to learn <br /> more about life at{" "}
            <strong>Peak?</strong>
          </h2>
        </div>
        <div className="peak-right">
          <p>
            We form an environment that makes it easy for you to focus on doing
            your best.
          </p>
          <CustomButton
            title="EXPLORE"
            width="10rem"
            expandedWidth="10.5rem"
            icon={<ChevronRight />}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
