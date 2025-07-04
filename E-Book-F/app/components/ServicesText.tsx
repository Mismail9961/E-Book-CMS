"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface FeatureContent {
  topText?: string;
  topColor?: string;
  h1Text?: string;
  h1Color?: string;
  subText?: string;
  subColor?: string;
  boldText?: string;
  boldColor?: string;
  bgColor?: string;
}

const FeatureSection = () => {
  const [content, setContent] = useState<FeatureContent>({
    topText: "",
    topColor: "#00E0F0",
    h1Text: "",
    h1Color: "#ffffff",
    subText: "",
    subColor: "#ffffff",
    boldText: "",
    boldColor: "#ffffff",
    bgColor: "#4F2283",
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/feature-section").then((res) => {
      if (res.data) {
        setContent(res.data);
      }
    }).catch((err) => {
      console.error("❌ Error loading feature section:", err);
    });
  }, []);

  return (
    <div
      className="w-full py-16 px-4"
      style={{ backgroundColor: content.bgColor || "#4F2283" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {content.topText && (
          <h3
            className="text-[22px] sm:text-[26px] font-semibold"
            style={{ color: content.topColor }}
          >
            {content.topText}
          </h3>
        )}
        {content.h1Text && (
          <h1
            className="text-[30px] sm:text-[40px] md:text-[50px] font-bold mt-2"
            style={{ color: content.h1Color }}
          >
            {content.h1Text}
          </h1>
        )}
        {content.subText && (
          <p
            className="font-medium text-[16px] sm:text-[18px] mt-4"
            style={{ color: content.subColor }}
          >
            {content.subText}
          </p>
        )}
        {content.boldText && (
          <p
            className="font-semibold text-[18px] sm:text-[22px] mt-1"
            style={{ color: content.boldColor }}
          >
            {content.boldText}
          </p>
        )}
      </div>
    </div>
  );
};

export default FeatureSection;
