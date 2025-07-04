"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

type HeroSection2 = {
  h1Text: string;
  h1TextColour: string;
  pointsText: string; // JSON string or comma-separated
  pointsTextColour: string;
  pText: string;
  pTextColour: string;
  image: string;
};

const HeroSection2 = () => {
  const [data, setData] = useState<HeroSection2 | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/herosection2");
        setData(res.data);
      } catch (err) {
        console.error("Failed to fetch HeroSection2", err);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <div className="p-10 text-white">Loading...</div>;
  }

  const points: string[] =
    data.pointsText?.includes("[")
      ? JSON.parse(data.pointsText)
      : data.pointsText?.split(",") || [];

  return (
    <div className="w-full h-[70vh] flex flex-col md:flex-row items-center justify-center px-4 md:px-12 py-10 gap-8">
      {/* Text Content */}
      <div className="w-full md:w-1/2 text-[#0a0a23]">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          style={{ color: data.h1TextColour }}
        >
          {data.h1Text}
        </h1>

        <ul className="mt-6 space-y-4 font-bold text-lg sm:text-xl" style={{ color: data.pointsTextColour }}>
          {points.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <p
          className="mt-6 font-semibold text-base sm:text-lg leading-relaxed"
          style={{ color: data.pTextColour }}
        >
          {data.pText}
        </p>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={data.image}
          alt="Hero Visual"
          className="w-full max-w-md md:max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection2;
