"use client";
import React, { useState } from "react";

const Hero = () => {
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
    // Submission logic here
  };

  return (
    <div className="relative h-[70vh] mb-20  w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://pearsonbookspublishing.co.uk/neo/assets/video/large.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-4 md:px-10 py-10 text-white bg-black/40 gap-10 md:gap-0">
        {/* Left Text Section */}
        <div className="md:w-1/2 w-full flex flex-col justify-center gap-4 text-center md:text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#2DEBFF]">
            TAKE THE SKILLS TO ROAD
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Digitizing Your Business Growth
          </h2>
        </div>

        {/* Right Form Section */}
        <div className="md:w-[40%] w-full bg-[#23257B]/60 p-5 rounded-lg shadow-lg">
          <div className="relative bg-gradient-to-b p-6 rounded-lg">
            <div className="absolute -top-6 -right-6 bg-[#281055] text-white w-[65px] h-[65px] rounded-full flex items-center justify-center text-xs font-bold text-center p-2">
              UPTO 50% OFF
            </div>
            <h2 className="text-2xl font-bold mb-2 text-center">
              Start A Conversation With Us
            </h2>
            <p className="text-sm text-center mb-4">
              What services are you looking for?
            </p>
            <form onSubmit={handleSubmit} className="space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: "web", label: "Web Development" },
                  { name: "app", label: "App Development" },
                  { name: "branding", label: "Branding" },
                  { name: "digital", label: "Digital Marketing" },
                ].map(({ name, label }) => (
                  <label key={name} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name={name}
                      checked={form.services[name as keyof typeof form.services]}
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
                className="w-full py-2 rounded bg-gradient-to-r from-purple-700 to-indigo-900 hover:opacity-90 transition text-white font-semibold"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
