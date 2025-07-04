"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface SliderImage {
  id: string;
  imageUrl: string;
}

const InfiniteSlider: React.FC = () => {
  const [topImages, setTopImages] = useState<SliderImage[]>([]);
  const [bottomImages, setBottomImages] = useState<SliderImage[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get<SliderImage[]>("http://localhost:5000/api/slider");
        const images = res.data;

        if (!Array.isArray(images)) {
          console.error("❌ Invalid response:", images);
          return;
        }

        // Split first 6 for top, last 6 for bottom (or duplicate if < 6)
        const top = images.slice(0, 6);
        const bottom = images.slice(-6);

        setTopImages(top.length === 6 ? top : [...top, ...top].slice(0, 6));
        setBottomImages(bottom.length === 6 ? bottom : [...bottom, ...bottom].slice(0, 6));
      } catch (err) {
        console.error("❌ Failed to fetch slider images:", err);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-[20vh] flex flex-col bg-[#2D0D5D]">
      {/* Top slider */}
      <div className="absolute top-0 left-0 flex h-1/2 gap-40 items-center whitespace-nowrap animate-marquee-right">
        {[...topImages, ...topImages].map((img, idx) => (
          <img
            key={`top-${img.id}-${idx}`}
            src={img.imageUrl}
            alt={`Top-${idx}`}
            className=" mx-2 flex items-center justify-center gap-7 rounded"
          />
        ))}
      </div>

      {/* Bottom slider */}
      <div className="absolute bottom-0 left-0 flex h-1/2 gap-40  items-center whitespace-nowrap animate-marquee-left">
        {[...bottomImages, ...bottomImages].map((img, idx) => (
          <img
            key={`bottom-${img.id}-${idx}`}
            src={img.imageUrl}
            alt={`Bottom-${idx}`}
            className=" mx-2 flex-shrink-0 rounded"
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
