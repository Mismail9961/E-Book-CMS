"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

type CTAData = {
  h1Text: string;
  h1TextColour: string;
  pText: string;
  pTextColour: string;
  buttonText: string;
  buttonTextColour: string;
  buttonBgColour: string;
  image: string;
  div1Bg: string; // top border
  div2Bg: string; // bottom border
  divBg: string;  // center background
};

const CallToAction = () => {
  const [data, setData] = useState<CTAData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/herosection3");
        setData(res.data);
      } catch (err) {
        console.error("Failed to fetch CallToAction data", err);
      }
    };
    fetchData();
  }, []);

  if (!data) return <div className="text-white p-10">Loading...</div>;

  return (
    <div className="w-full" style={{ backgroundColor: data.divBg }}>
      {/* Top Border */}
      <div className="h-2 w-full" style={{ backgroundColor: data.div1Bg }} />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-10 gap-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-start">
            <h1
              className="text-3xl md:text-5xl font-bold leading-tight"
              style={{ color: data.h1TextColour }}
            >
              {data.h1Text}
            </h1>
            <p
              className="mt-2 text-base md:text-lg max-w-2xl leading-relaxed"
              style={{ color: data.pTextColour }}
            >
              {data.pText}
            </p>
            <div
              className="mt-4 font-bold text-[18px] py-2 px-6 rounded-md hover:opacity-90 transition cursor-pointer"
              style={{
                color: data.buttonTextColour,
                backgroundColor: data.buttonBgColour,
              }}
            >
              {data.buttonText}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={data.image}
            alt="Call to action"
            className="w-full h-[50vh] object-cover"
          />
        </div>
      </div>

      {/* Bottom Border */}
      <div className="h-2 w-full" style={{ backgroundColor: data.div2Bg }} />
    </div>
  );
};

export default CallToAction;
