"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminContactHeaderEditor = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const API = "http://localhost:5000/api/contact-header";

  const fetchData = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data);
    } catch (err) {
      console.error("Fetch failed", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (field, value) => {
    if (!data) return;
    setData({ ...data, [field]: value });
  };

  const saveChanges = async () => {
    try {
      setLoading(true);
      await axios.put(API, data);
      alert("Changes saved");
    } catch (err) {
      console.error("Save failed", err);
      alert("Failed to save changes");
    } finally {
      setLoading(false);
    }
  };

  const initializeDefaults = async () => {
    try {
      const res = await axios.post(`${API}/initialize`);
      setData(res.data.data);
      alert("Initialized with defaults");
    } catch (err) {
      console.error("Initialization failed", err);
    }
  };

  const resetDefaults = async () => {
    try {
      const res = await axios.post(`${API}/reset-defaults`);
      setData(res.data.data);
      alert("Reset to defaults");
    } catch (err) {
      console.error("Reset failed", err);
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
    <div className="p-6 max-w-4xl mx-auto space-y-6 bg-gray-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Edit Contact Header Section</h2>

      <div className="grid grid-cols-1 gap-4">
        {/* Badge */}
        <div>
          <label>Badge Text</label>
          <input
            type="text"
            value={data.badgeText}
            onChange={(e) => handleChange("badgeText", e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <div className="flex gap-4 mt-2">
            <div>
              <label>Text Color</label>
              <input
                type="color"
                value={data.badgeTextColor}
                onChange={(e) =>
                  handleChange("badgeTextColor", e.target.value)
                }
                className="h-10 w-24"
              />
            </div>
            <div>
              <label>Background Color</label>
              <input
                type="color"
                value={data.badgeBgColor}
                onChange={(e) =>
                  handleChange("badgeBgColor", e.target.value)
                }
                className="h-10 w-24"
              />
            </div>
          </div>
        </div>

        {/* Heading Part 1 */}
        <div>
          <label>Heading Text Part 1</label>
          <input
            type="text"
            value={data.h1TextPart1}
            onChange={(e) => handleChange("h1TextPart1", e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="color"
            value={data.h1TextPart1Color}
            onChange={(e) => handleChange("h1TextPart1Color", e.target.value)}
            className="h-10 w-24 mt-2"
          />
        </div>

        {/* Heading Part 2 */}
        <div>
          <label>Heading Text Part 2</label>
          <input
            type="text"
            value={data.h1TextPart2}
            onChange={(e) => handleChange("h1TextPart2", e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="color"
            value={data.h1TextPart2Color}
            onChange={(e) => handleChange("h1TextPart2Color", e.target.value)}
            className="h-10 w-24 mt-2"
          />
        </div>

        {/* Paragraph */}
        <div>
          <label>Paragraph Text</label>
          <textarea
            value={data.paragraphText}
            onChange={(e) => handleChange("paragraphText", e.target.value)}
            className="w-full border px-3 py-2 rounded"
            rows={4}
          />
          <input
            type="color"
            value={data.paragraphTextColor}
            onChange={(e) => handleChange("paragraphTextColor", e.target.value)}
            className="h-10 w-24 mt-2"
          />
        </div>

        {/* Background */}
        <div>
          <label>Section Background Color</label>
          <input
            type="color"
            value={data.backgroundColor}
            onChange={(e) => handleChange("backgroundColor", e.target.value)}
            className="h-10 w-full"
          />
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={saveChanges}
          className="px-6 py-2 bg-green-600 text-white rounded"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
        <button
          onClick={resetDefaults}
          className="px-6 py-2 bg-red-600 text-white rounded"
        >
          Reset to Defaults
        </button>
      </div>
    </div>
  );
};

export default AdminContactHeaderEditor;
