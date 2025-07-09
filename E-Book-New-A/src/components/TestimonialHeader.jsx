"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminTestimonialHeaderEditor = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const API = "http://localhost:5000/api/testimonial-header";

  const fetchHeader = async () => {
    try {
      const res = await axios.get(`${API}`);
      setData(res.data);
    } catch (err) {
      console.error("Fetch failed", err);
    }
  };

  useEffect(() => {
    fetchHeader();
  }, []);

  const handleChange = (field, value) => {
    if (!data) return;
    setData({ ...data, [field]: value });
  };

  const saveChanges = async () => {
    try {
      setLoading(true);
      await axios.put(`${API}`, data);
      alert("Saved successfully!");
    } catch (err) {
      console.error("Save failed", err);
      alert("Error saving");
    } finally {
      setLoading(false);
    }
  };

  const initializeDefaults = async () => {
    try {
      const res = await axios.post(`${API}/initialize`);
      setData(res.data.data);
      alert("Initialized with default values");
    } catch (err) {
      console.error(err);
    }
  };

  const resetDefaults = async () => {
    try {
      const res = await axios.post(`${API}/reset-defaults`);
      setData(res.data.data);
      alert("Reset to default values");
    } catch (err) {
      console.error(err);
    }
  };

  if (!data) {
    return (
      <div className="p-4">
        <button
          onClick={initializeDefaults}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Initialize Section
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6 bg-gray-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold">Edit Testimonial Header</h2>

      <div className="grid grid-cols-1 gap-4">
        {/* Top Badge */}
        <div>
          <label className="font-semibold">Top Badge Text</label>
          <input
            type="text"
            value={data.topBadgeText}
            onChange={(e) => handleChange("topBadgeText", e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div className="flex gap-4">
          <div>
            <label>Text Color</label>
            <input
              type="color"
              value={data.topBadgeTextColor}
              onChange={(e) => handleChange("topBadgeTextColor", e.target.value)}
              className="w-full h-10"
            />
          </div>
          <div>
            <label>Background Color</label>
            <input
              type="color"
              value={data.topBadgeBgColor}
              onChange={(e) => handleChange("topBadgeBgColor", e.target.value)}
              className="w-full h-10"
            />
          </div>
        </div>

        {/* H1 Texts */}
        <div>
          <label>Heading Prefix (e.g., "Client's")</label>
          <input
            type="text"
            value={data.h1TextPrefix}
            onChange={(e) => handleChange("h1TextPrefix", e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="color"
            value={data.h1TextPrefixColor}
            onChange={(e) => handleChange("h1TextPrefixColor", e.target.value)}
            className="w-24 h-10 mt-2"
          />
        </div>

        <div>
          <label>Heading Main (e.g., "Testimonials")</label>
          <input
            type="text"
            value={data.h1TextMain}
            onChange={(e) => handleChange("h1TextMain", e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="color"
            value={data.h1TextMainColor}
            onChange={(e) => handleChange("h1TextMainColor", e.target.value)}
            className="w-24 h-10 mt-2"
          />
        </div>

        {/* Background */}
        <div>
          <label>Section Background Color</label>
          <input
            type="color"
            value={data.sectionBgColor}
            onChange={(e) => handleChange("sectionBgColor", e.target.value)}
            className="w-full h-10"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={saveChanges}
          className="px-6 py-2 bg-green-600 text-white rounded"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
        <button
          onClick={resetDefaults}
          className="px-6 py-2 bg-red-500 text-white rounded"
        >
          Reset to Defaults
        </button>
      </div>
    </div>
  );
};

export default AdminTestimonialHeaderEditor;
