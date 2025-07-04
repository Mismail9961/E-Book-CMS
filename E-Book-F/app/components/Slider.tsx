"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface SliderImage {
  id: string;
  imageUrl: string;
}

const InfiniteSlider = () => {
  const [images, setImages] = useState<SliderImage[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get<SliderImage[]>("http://localhost:5000/api/slider");
        const data = res.data;

        // Take only first 10 images (or duplicate if fewer)
        const limited = data.slice(0, 10);
        setImages(limited.length < 10 ? [...limited, ...limited].slice(0, 10) : limited);
      } catch (err) {
        console.error("Failed to fetch images", err);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="slider-container bg-[#2D0D5D] h-[12vh] w-full overflow-hidden relative">
      <div className="slider-track flex items-center h-full animate-slider">
        {[...images, ...images].map((img, idx) => (
          <div
            key={`${img.id}-${idx}`}
            className="slider-box mx-2 flex flex-col items-center justify-center h-[70%] w-[20vw] sm:w-[12vw] flex-shrink-0 rounded overflow-hidden"
          >
            <img
              src={img.imageUrl}
              alt={`Slide ${idx}`}
              className=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
