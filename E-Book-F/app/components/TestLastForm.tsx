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
  };

  return (
    <div className="relative w-full min-h-[90vh] overflow-hidden flex items-center justify-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://pearsonbookspublishing.co.uk/neo/assets/video/large.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      <div className="relative z-10 bg-black w-full h-full px-4 py-10 sm:px-8 md:px-12 flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            We Grow <span className="text-[#2DEBFF]">Brands</span> Online
          </h1>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-medium">
            Custom Websites, Branding & Digital Marketing
          </h3>
          <p className="text-sm sm:text-base leading-relaxed">
            We work closely with our clients to ensure each project meets their
            brand guidelines and business goals, providing technical and
            marketing expertise to ensure optimal results.
          </p>
          <button className="bg-white text-[#272267] text-base sm:text-lg font-bold py-2 px-6 rounded-md w-fit">
            REQUEST QUOTE
          </button>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-[40%] bg-[#23257B]/60 p-5 rounded-lg shadow-lg mt-6 md:mt-0">
          <div className="relative bg-gradient-to-b from-[#23257B] to-[#1a144f] p-6 rounded-lg text-white">
            {/* Discount Badge */}
            <div className="absolute -top-6 -right-6 w-[65px] h-[65px] bg-[#281055] rounded-full flex items-center justify-center text-[11px] font-bold text-center px-2 py-1">
              UP TO 50% OFF
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">
              Start A Conversation With Us
            </h2>
            <p className="text-sm text-center mb-4">
              What services are you looking for?
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              {/* Checkboxes */}
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

              {/* Text Inputs */}
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
