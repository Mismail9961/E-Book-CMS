"use client";
import React, { useEffect, useState } from "react";

type AboutHeroSection = {
  id: string;
  h1Text?: string;
  h1TextColour?: string;
  pointsText?: string;
  pointsTextColour?: string;
  pText?: string;
  pTextColour?: string;
  image?: string;
};

const API_BASE = "http://localhost:5000/api/about-hero-section";

const AdminAboutHeroSectionEditor = () => {
  const [data, setData] = useState<AboutHeroSection | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    fetch(API_BASE)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch(() => alert("Failed to fetch data."))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (field: keyof AboutHeroSection, value: string) => {
    if (!data) return;
    setData({ ...data, [field]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleSave = async () => {
    if (!data?.id) return;

    const formData = new FormData();
    for (const key in data) {
      const value = data[key as keyof AboutHeroSection];
      if (value !== undefined && value !== null) {
        formData.append(key, value);
      }
    }

    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const res = await fetch(`${API_BASE}/${data.id}`, {
        method: "PUT",
        body: formData,
      });

      const updated = await res.json();
      setData(updated);
      setImageFile(null);
      alert("Saved successfully!");
    } catch {
      alert("Failed to save.");
    }
  };

  const handleReset = async () => {
    try {
      await fetch(`${API_BASE}/reset-defaults`, { method: "POST" });
      const res = await fetch(API_BASE);
      const resetData = await res.json();
      setData(resetData);
      alert("Reset successfully!");
    } catch {
      alert("Failed to reset.");
    }
  };

  if (loading) return <p className="p-4">Loading...</p>;

  if (!data)
    return (
      <div className="p-6 text-center">
        <p>No data found.</p>
        <button
          onClick={handleReset}
          className="bg-red-600 text-white px-4 py-2 mt-4 rounded"
        >
          Initialize Default Content
        </button>
      </div>
    );

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6 bg-white rounded shadow mt-10">
      <h1 className="text-2xl font-bold">Edit About Hero Section</h1>

      <div className="space-y-4">
        {/* h1 Text and Color */}
        <input
          className="w-full border p-2"
          placeholder="Heading (h1Text)"
          value={data.h1Text || ""}
          onChange={(e) => handleChange("h1Text", e.target.value)}
        />
        <input
          type="color"
          value={data.h1TextColour || "#000000"}
          onChange={(e) => handleChange("h1TextColour", e.target.value)}
        />

        {/* Points */}
        <input
          className="w-full border p-2"
          placeholder="Points (comma separated)"
          value={data.pointsText || ""}
          onChange={(e) => handleChange("pointsText", e.target.value)}
        />
        <input
          type="color"
          value={data.pointsTextColour || "#000000"}
          onChange={(e) => handleChange("pointsTextColour", e.target.value)}
        />

        {/* Paragraph */}
        <textarea
          className="w-full border p-2"
          placeholder="Paragraph Text"
          rows={4}
          value={data.pText || ""}
          onChange={(e) => handleChange("pText", e.target.value)}
        />
        <input
          type="color"
          value={data.pTextColour || "#000000"}
          onChange={(e) => handleChange("pTextColour", e.target.value)}
        />

        {/* Image */}
        <div>
          <p className="font-medium mb-1">Current Image:</p>
          {data.image && (
            <img
              src={data.image}
              alt="Current"
              className="w-full max-h-64 object-cover rounded mb-2"
            />
          )}
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-4 pt-4">
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
        <button
          onClick={handleReset}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Reset to Defaults
        </button>
      </div>
    </div>
  );
};

export default AdminAboutHeroSectionEditor;
