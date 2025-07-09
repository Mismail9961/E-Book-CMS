"use client";
import React, { useEffect, useState } from "react";
import API from "../utils/api";

const AdminAboutUsH1Editor = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await API.get("/");
      setData(res.data);
    } catch (error) {
      console.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, value) => {
    if (!data) return;
    setData({ ...data, [field]: value });
  };

  const handleSave = async () => {
    if (!data?.id) return;
    try {
      await API.put(`/${data.id}`, data);
      alert("Saved successfully!");
    } catch (error) {
      alert("Failed to save.");
    }
  };

  const handleReset = async () => {
    try {
      await API.post("/reset-defaults");
      await fetchData();
      alert("Reset to default values!");
    } catch (error) {
      alert("Failed to reset.");
    }
  };

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6 bg-white shadow rounded max-w-3xl mx-auto mt-10 space-y-4">
      <h1 className="text-2xl font-bold">Edit About Us Section</h1>

      {!data ? (
        <div className="text-center space-y-4">
          <p>No content found. Click below to initialize default content.</p>
          <button
            onClick={handleReset}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Reset to Defaults
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="color"
              value={data.divBg || ""}
              onChange={(e) => handleChange("divBg", e.target.value)}
            />
            <label>Section Background</label>

            <input
              type="text"
              value={data.h3Text || ""}
              onChange={(e) => handleChange("h3Text", e.target.value)}
              placeholder="h3Text"
              className="col-span-2 border p-2"
            />

            <input
              type="color"
              value={data.h3TextColour || ""}
              onChange={(e) => handleChange("h3TextColour", e.target.value)}
            />
            <label>h3 Text Colour</label>

            <input
              type="color"
              value={data.h3cardBg || ""}
              onChange={(e) => handleChange("h3cardBg", e.target.value)}
            />
            <label>h3 Card Background</label>

            <input
              type="text"
              value={data.h1Text || ""}
              onChange={(e) => handleChange("h1Text", e.target.value)}
              placeholder="h1Text"
              className="col-span-2 border p-2"
            />

            <input
              type="color"
              value={data.h1TextColour || ""}
              onChange={(e) => handleChange("h1TextColour", e.target.value)}
            />
            <label>h1 Text Colour</label>

            <textarea
              value={data.pText || ""}
              onChange={(e) => handleChange("pText", e.target.value)}
              placeholder="Paragraph Text"
              className="col-span-2 border p-2"
              rows={3}
            />

            <input
              type="color"
              value={data.pTextColour || ""}
              onChange={(e) => handleChange("pTextColour", e.target.value)}
            />
            <label>Paragraph Text Colour</label>
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>

            <button
              onClick={handleReset}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Reset to Defaults
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminAboutUsH1Editor;
