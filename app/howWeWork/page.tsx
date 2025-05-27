"use client";
import React, { useEffect, useState } from "react";
import PageBannerComponent from "../_components/PageBannerComponent";
import HowWeWorkCard from "../_components/howWeWork/howWeWorkCard";
import { howWeWorkItems } from "../constants/howWeWorkItems";
import ReadyToJoinUs from "../home/ReadyToJoinUs/ReadyToJoinUs";
import axios from "axios";
import { truncateText } from "../_utils/truncateText";
import { useRouter } from "next/navigation";

interface HowWeWorkItem {
  _id: string;
  title: string;
  description: string;
  image: string;
}

const HowWeWork = () => {
  const [items, setItems] = useState<HowWeWorkItem[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/bgaiv1/howweworks`
      );
      setItems(res.data.howWeWork || []);
    } catch (err) {
      console.error("Failed to fetch howWeWork items", err);
      setItems([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <PageBannerComponent
        title="How We Work"
        backgroundImage="/images/howwework.jpg"
        height="70vh"
        textColor="#fff"
        textSize="4rem"
        textWeight="600"
      />
      <div className="bg-[#F9F9F9] py-[5rem] ">
        <div className="max-w-[1200px] mx-auto  ">
          <div className="flex justify-center items-center gap-[30px] flex-wrap">
            {loading ? (
              <p>Loading...</p>
            ) : items.length === 0 ? (
              <p>No data found.</p>
            ) : (
              items.map((item) => (
                <div key={item._id}>
                  <HowWeWorkCard
                    title={item.title}
                    description={truncateText(item.description, 65)}
                    imageSrc={
                      item.image.startsWith("http")
                        ? item.image
                        : `${process.env.NEXT_PUBLIC_API_URL}${item.image}`
                    }
                    onReadMoreClick={() =>
                      router.push(`/howWeWork/${item._id}`)
                    }
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <ReadyToJoinUs
        backgroundImage="/images/guysimage.jpg"
        title="Ready to join us?"
        textSize="4rem"
        textColor="#fff"
      />
    </div>
  );
};

export default HowWeWork;
