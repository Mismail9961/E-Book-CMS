"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

type HeroSection = {
  h1Text: string;
  h1TextColour: string;
  h3Text: string;
  h3TextColour: string;
  pText: string;
  pTextColour: string;
  buttonText: string;
  buttonTextColour: string;
  buttonBgColour: string;
  formBgColour: string;
  formButtonBgColour: string;
  formButtonText: string;
  formButtonTextColour: string;
  bgVideo: string;
};

const Hero = () => {
  const [heroData, setHeroData] = useState<HeroSection | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    services: {
      web: false,
      app: false,
      branding: false,
      digital: false,
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/herosection");
        setHeroData(res.data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({
        ...prev,
        services: { ...prev.services, [name]: checked },
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  if (!heroData) {
    return <div className="text-white p-10">Loading...</div>;
  }

  return (
    <div className="relative w-full min-h-[70vh] overflow-hidden flex items-center justify-center">
      <video
        src={heroData.bgVideo}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="relative z-10 w-full h-full px-4 py-10 sm:px-8 md:px-12 flex flex-col md:flex-row justify-between items-center gap-10 bg-black/40">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
          <h1
            className="text-xl sm:text-2xl md:text-3xl font-semibold"
            style={{ color: heroData.h1TextColour }}
          >
            {heroData.h1Text}
          </h1>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            style={{ color: heroData.h3TextColour }}
          >
            {heroData.h3Text}
          </h2>
          <p
            className="text-sm sm:text-base text-white leading-relaxed"
            style={{ color: heroData.pTextColour }}
          >
            {heroData.pText}
          </p>
          <button
            className="sm:text-lg font-bold py-2 px-6 rounded-md w-fit transition hover:opacity-90"
            style={{
              backgroundColor: heroData.buttonBgColour,
              color: heroData.buttonTextColour,
            }}
          >
            {heroData.buttonText}
          </button>
        </div>

        {/* Right Form */}
        <div
          className="w-full md:w-[40%] p-5 rounded-lg shadow-lg"
          style={{ backgroundColor: heroData.formBgColour }}
        >
          <div className="relative p-6 rounded-lg text-white">
            <div className="absolute -top-6 -right-6 w-[65px] h-[65px] bg-[#281055] rounded-full flex items-center justify-center text-[11px] font-bold text-center px-2 py-1">
              UP TO 50% OFF
            </div>

            <h2 className="text-2xl font-bold text-center mb-2">
              Start A Conversation With Us
            </h2>
            <p className="text-sm text-center mb-4">
              What services are you looking for?
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-2">
                {[{ name: "web", label: "Web Development" },
                  { name: "app", label: "App Development" },
                  { name: "branding", label: "Branding" },
                  { name: "digital", label: "Digital Marketing" },
                ].map(({ name, label }) => (
                  <label key={name} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name={name}
                      checked={
                        form.services[name as keyof typeof form.services]
                      }
                      onChange={handleChange}
                      className="accent-purple-600"
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black placeholder-gray-700 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black placeholder-gray-700 outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black placeholder-gray-700 outline-none"
              />
              <textarea
                name="message"
                placeholder="Tell us about your project"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black placeholder-gray-700 outline-none"
              />
              <button
                type="submit"
                className="w-full py-2 rounded text-[18px] font-semibold hover:opacity-90 transition"
                style={{
                  backgroundColor: heroData.formButtonBgColour,
                  color: heroData.formButtonTextColour,
                }}
              >
                {heroData.formButtonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
