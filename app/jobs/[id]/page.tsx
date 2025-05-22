"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import "./jobDetail.scss";
import PageBannerComponent from "@/app/_components/PageBannerComponent";

const JobDetailPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:3001/api/bgaiv1/jobs/${id}`
        );
        setJob(res.data.job);
      } catch (err) {
        console.error("Job fetch error", err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchJob();
  }, [id]);

  if (loading) return <p className="job-detail-loading">Loading...</p>;
  if (!job) return <p className="job-detail-error">Job not found</p>;

  return (
    <>
      <PageBannerComponent
        title="Open Positions"
        textSize="4.3rem"
        textColor="white"
        textWeight="600"
        backgroundImage="/images/jobImage.jpg"
        height="65vh"
      />
      <div className="job-detail-wrapper">
        <div className="job-detail-container">
          <div className="job-detail-image-wrapper">
            <Image
              src={`http://localhost:3001${job.image}`}
              alt={job.title}
              fill
              className="job-detail-image"
            />
          </div>

          <div className="job-detail-content">
            <h1 className="job-detail-title">{job.title}</h1>
            <p className="job-detail-expire">
              Expire Date: {new Date(job.expireDate).toLocaleDateString()}
            </p>

            <div className="job-detail-info-box">
              <h3>Requirements</h3>
              <div className="job-detail-description">
                <div
                  dangerouslySetInnerHTML={{ __html: job.description }}
                ></div>
              </div>
              {/* <ul>
                <li>
                  &lt;p&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;ul&gt;, &lt;li&gt;,
                  &lt;a&gt; tag'leri desteklenir
                </li>
                <li>Görseller dahil edilecekse img URL olarak eklenmeli</li>
                <li>
                  Editor ile gelen HTML backend'e string olarak kaydedilmelidir
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetailPage;
