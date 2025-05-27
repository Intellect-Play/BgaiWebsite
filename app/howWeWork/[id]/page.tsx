"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import "./howWeWorkDetail.scss";
import PageBannerComponent from "@/app/_components/PageBannerComponent";

interface HowWeWorkItem {
  _id: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
}

const HowWeWorkDetailPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState<HowWeWorkItem | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchItem = async () => {
    if (!id) return;
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/bgaiv1/howweworks/${id}`
      );
      setItem(res.data.howWeWork);
    } catch (err) {
      console.error("Error fetching how we work detail:", err);
      setItem(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchItem();
  }, [id]);

  if (loading) return <div className="detail-loading">Loading...</div>;
  if (!item) return <div className="detail-error">Item not found.</div>;

  return (
    <>
      <PageBannerComponent
        title="How We Work"
        backgroundImage="/images/howwework.jpg"
        height="70vh"
        textColor="#fff"
        textSize="4rem"
        textWeight="600"
      />
      <div className="howwework-detail-container">
        <div className="howwework-detail-inner">
          <div className="detail-image-wrapper">
            <Image
              src={
                item.image.startsWith("http")
                  ? item.image
                  : `${process.env.NEXT_PUBLIC_API_URL}${item.image}`
              }
              alt={item.title}
              fill
              className="detail-image"
            />
          </div>
          <div className="detail-text-wrapper">
            <h1>{item.title}</h1>
            <div
              className="detail-description"
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWeWorkDetailPage;
