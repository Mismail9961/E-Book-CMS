"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface WorkSection {
  id: string;
  h2Text?: string;
  h2TextColour?: string;
  h1Text?: string;
  h1TextColour?: string;
  pText?: string;
  pTextColour?: string;
  image?: string;
  buttonText: string;
  buttonTextColour: string;
  buttonBgColour?: string;
  buttonColourOnClick?: string;
  buttonColourOnHover?: string;
  button2Text: string;
  button2TextColour: string;
  button2BgColour?: string;
  button2ColourOnClick?: string;
  button2ColourOnHover?: string;
  button3Text: string;
  button3TextColour: string;
  button3BgColour?: string;
  button3ColourOnClick?: string;
  button3ColourOnHover?: string;
  button4Text: string;
  button4TextColour: string;
  button4BgColour?: string;
  button4ColourOnClick?: string;
  button4ColourOnHover?: string;
  createdAt: string;
  updatedAt: string;
}

const WorkSection = () => {
  const [section, setSection] = useState<WorkSection | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/worksection")
      .then((res) => setSection(res.data))
      .catch((err) => console.error("Failed to load Work Section", err));
  }, []);

  if (!section) return <div className="text-center py-10">Loading Work Section...</div>;

  const renderButton = (
    text: string,
    textColor: string,
    bgColor?: string,
    hoverColor?: string,
    clickColor?: string
  ) => (
    <button
      style={{
        color: textColor,
        backgroundColor: bgColor || "#1D1D60",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverColor || bgColor || "#272267";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = bgColor || "#1D1D60";
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.backgroundColor = clickColor || "#3A3A80";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.backgroundColor = hoverColor || bgColor || "#272267";
      }}
      className="px-6 py-3 font-bold text-base sm:text-lg rounded-[10px] transition-all duration-300"
    >
      {text}
    </button>
  );

  return (
    <div className="w-full py-12 px-4 flex flex-col items-center bg-white">
      {/* Header Section */}
      <div className="text-center max-w-4xl mb-10">
        <h3
          className="text-xl sm:text-2xl font-semibold"
          style={{ color: section.h2TextColour }}
        >
          {section.h2Text}
        </h3>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2"
          style={{ color: section.h1TextColour }}
        >
          {section.h1Text}
        </h1>
        <p
          className="mt-4 text-base sm:text-lg md:text-xl font-semibold"
          style={{ color: section.pTextColour }}
        >
          {section.pText}
        </p>
      </div>

      {/* Dynamic Buttons */}
      <div className="flex flex-wrap justify-center gap-4 w-full max-w-3xl">
        {renderButton(
          section.buttonText,
          section.buttonTextColour,
          section.buttonBgColour,
          section.buttonColourOnHover,
          section.buttonColourOnClick
        )}
        {renderButton(
          section.button2Text,
          section.button2TextColour,
          section.button2BgColour,
          section.button2ColourOnHover,
          section.button2ColourOnClick
        )}
        {renderButton(
          section.button3Text,
          section.button3TextColour,
          section.button3BgColour,
          section.button3ColourOnHover,
          section.button3ColourOnClick
        )}
        {renderButton(
          section.button4Text,
          section.button4TextColour,
          section.button4BgColour,
          section.button4ColourOnHover,
          section.button4ColourOnClick
        )}
      </div>

      {/* Image Section - Repeated Twice */}
      {section.image && (
        <div className="w-full py-10 px-4 flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="w-full md:w-[40%]">
            <img
              src={section.image}
              alt="Work Section Left"
              className="w-full h-auto rounded-xl object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-[40%]">
            <img
              src={section.image}
              alt="Work Section Right"
              className="w-full h-auto rounded-xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkSection;
