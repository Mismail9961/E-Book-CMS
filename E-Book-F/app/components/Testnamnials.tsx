"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  text: "Digital Silk is not just a company – they’re a team of experts who turn visions into digital realities with unparalleled expertise, enthusiasm, and creativeness.",
  role: "Vice President at National Golf Foundation",
  name: "Ted Eleftheriou, PGA",
  logo: "P&G"
}));

const TestimonialsSlider = () => {
  return (
    <div className="bg-[#341166] py-16 px-4 mb-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h4 className="text-cyan-400 text-[24px] sm:text-[24px] uppercase tracking-wide font-semibold">
          Client Stories & Testimonials
        </h4>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
          BEST RATED DIGITAL AGENCY
        </h2>
      </div>

      {/* Testimonials */}
      <div className="flex flex-wrap justify-center w-full gap-6 px-3 sm:px-0">
        {testimonials.slice(0, 2).map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="relative bg-[#341166]  text-white border border-cyan-400 rounded-xl p-6 max-w-md w-full flex flex-col items-center justify-center min-h-[250px]"
          >
            {/* Left arrow */}
            {index === 0 && (
              <ChevronLeft className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 h-6 w-6" />
            )}

            <p className="mb-4 text-center text-sm leading-relaxed">
              {testimonial.text}
            </p>
            <p className="font-semibold text-sm text-cyan-300">
              {testimonial.role}
            </p>
            <h3 className="text-lg font-bold mt-1">{testimonial.name}</h3>
            <div className="text-xl italic text-gray-300 mt-1">
              {testimonial.logo}
            </div>

            {/* Right arrow */}
            {index === 1 && (
              <ChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cyan-400 h-6 w-6" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;
