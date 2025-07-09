"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const defaultTestimonialData = {
  subtitle: "CLIENT STORIES & TESTIMONIALS",
  title: "BEST RATED DIGITAL AGENCY",
  quote:
    "Digital Silk is not just a company – they’re a team of experts who turn visions into digital realities with unparalleled expertise, enthusiasm, and creativeness.",
  position: "Vice President at National Golf Foundation",
  name: "Ted Eleftheriou, PGA",
  company: "P&G",
  subtitleColor: "#00D1FF",
  titleColor: "#FFFFFF",
  quoteColor: "#FFFFFF",
  nameColor: "#FFFFFF",
  positionColor: "#FFFFFF",
  companyColor: "#C2C2C2",
  bgColor: "#300C5B",
  cardColor: "#2B0057",
};

const AdminTestimonialEditor = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState(null);

  const fetchTestimonials = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/testimonials");
      setTestimonials(res.data);
    } catch (err) {
      console.error("Error fetching testimonials:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    setTestimonials((prev) =>
      prev.map((testimonial) =>
        testimonial.id === id ? { ...testimonial, [name]: value } : testimonial
      )
    );
  };

  const handleSave = async (id) => {
    const testimonial = testimonials.find((t) => t.id === id);
    if (!testimonial) return;

    setSavingId(id);
    try {
      await axios.put(`http://localhost:5000/api/testimonials/${id}`, testimonial);
      alert("✅ Testimonial updated!");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to update testimonial.");
    } finally {
      setSavingId(null);
    }
  };

  const handleAddTestimonial = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/testimonials", defaultTestimonialData);
      setTestimonials((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("Failed to add testimonial:", err);
    }
  };

  const fields = [
    "subtitle",
    "subtitleColor",
    "title",
    "titleColor",
    "quote",
    "quoteColor",
    "position",
    "positionColor",
    "name",
    "nameColor",
    "company",
    "companyColor",
    "bgColor",
    "cardColor",
  ];

  if (loading) return <p>Loading testimonials...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow rounded-lg mt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">🛠️ Admin: Manage Testimonials</h2>
        <button
          onClick={handleAddTestimonial}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          ➕ Add New Testimonial
        </button>
      </div>

      {testimonials.map((testimonial, index) => (
        <div
          key={testimonial.id}
          className="border border-gray-300 p-4 rounded-lg mb-8 bg-gray-50"
        >
          <h3 className="font-bold text-lg mb-4">✏️ Editing Testimonial #{index + 1}</h3>

          {fields.map((field) => (
            <div key={field} className="mb-4">
              <label className="block font-medium mb-1 capitalize">{field}</label>
              {field.includes("Color") || field.includes("bg") || field.includes("card") ? (
                <input
                  type="color"
                  name={field}
                  value={testimonial[field] || "#000000"}
                  onChange={(e) => handleChange(testimonial.id, e)}
                  className="w-full h-10 p-1 border border-gray-300 rounded"
                />
              ) : field === "quote" ? (
                <textarea
                  name={field}
                  value={testimonial[field] || ""}
                  onChange={(e) => handleChange(testimonial.id, e)}
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              ) : (
                <input
                  type="text"
                  name={field}
                  value={testimonial[field] || ""}
                  onChange={(e) => handleChange(testimonial.id, e)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              )}
            </div>
          ))}

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => handleSave(testimonial.id)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
              disabled={savingId === testimonial.id}
            >
              {savingId === testimonial.id ? "Saving..." : "💾 Save"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminTestimonialEditor;
