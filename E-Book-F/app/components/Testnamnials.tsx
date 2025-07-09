"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  id: string;
  subtitle?: string;
  title?: string;
  quote?: string;
  position?: string;
  name?: string;
  company?: string;
  bgColor?: string;
  textColor?: string;
  cardColor?: string;
};

const ITEMS_PER_PAGE = 2;

const TestimonialsSlider = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [subtitle, setSubtitle] = useState("Client Stories & Testimonials");
  const [title, setTitle] = useState("BEST RATED DIGITAL AGENCY");
  const [bgColor, setBgColor] = useState("#2F0743");
  const [textColor, setTextColor] = useState("#ffffff");
  const [cardColor, setCardColor] = useState("#3C096C");
  const [currentPage, setCurrentPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchTestimonials = async (page: number) => {
    try {
      setLoading(true);
      const skip = page * ITEMS_PER_PAGE;
      const res = await axios.get(
        `http://localhost:5000/api/testimonials?skip=${skip}&limit=${ITEMS_PER_PAGE}`
      );
      const data = res.data;

      if (data.length < ITEMS_PER_PAGE) setHasMore(false);
      else setHasMore(true);

      if (page === 0) {
        setTestimonials(data);
      } else {
        setTestimonials(data); // Only 2 shown per page
      }

      if (data.length > 0 && page === 0) {
        const t = data[0];
        setSubtitle(t.subtitle || subtitle);
        setTitle(t.title || title);
        setBgColor(t.bgColor || bgColor);
        setTextColor(t.textColor || textColor);
        setCardColor(t.cardColor || cardColor);
      }
    } catch (error) {
      console.error("Failed to load testimonials", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials(0);
  }, []);

  const handleNext = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchTestimonials(nextPage);
  };

  const handlePrev = () => {
    const prevPage = currentPage - 1;
    if (prevPage >= 0) {
      setCurrentPage(prevPage);
      fetchTestimonials(prevPage);
    }
  };

  return (
    <div className="py-16 px-4 mb-20" style={{ backgroundColor: bgColor }}>
      {/* Header */}
      <div className="text-center mb-10">
        <h4 className="text-[24px] uppercase tracking-wide font-semibold text-cyan-400">
          {subtitle}
        </h4>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2" style={{ color: textColor }}>
          {title}
        </h2>
      </div>

      {/* Testimonials + Arrows */}
      <div className="relative flex justify-center items-center gap-6">
        <button onClick={handlePrev} disabled={currentPage === 0}>
          <ChevronLeft className="text-cyan-400 w-8 h-8" />
        </button>

        {/* Testimonials */}
        <div className="flex flex-wrap gap-6 justify-center w-full max-w-5xl px-3 sm:px-0">
          {loading ? (
            <p className="text-white">Loading...</p>
          ) : (
            testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-[#341166] text-white border border-cyan-400 rounded-xl p-6 max-w-md w-full flex flex-col items-center justify-center min-h-[250px]"
                style={{ backgroundColor: cardColor, color: textColor }}
              >
                <p className="mb-4 text-center text-sm leading-relaxed">
                  {testimonial.quote}
                </p>
                <p className="font-semibold text-sm text-cyan-300 text-center">
                  {testimonial.position}
                </p>
                <h3 className="text-lg font-bold mt-1 text-center">{testimonial.name}</h3>
                <div className="text-xl italic text-gray-300 mt-1 text-center">
                  {testimonial.company}
                </div>
              </div>
            ))
          )}
        </div>

        <button onClick={handleNext} disabled={!hasMore}>
          <ChevronRight className="text-cyan-400 w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
