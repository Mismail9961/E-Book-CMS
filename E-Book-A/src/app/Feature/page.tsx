"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface FeatureSectionContent {
  topText?: string;
  topColor?: string;
  h1Text?: string;
  h1Color?: string;
  subText?: string;
  subColor?: string;
  boldText?: string;
  boldColor?: string;
  bgColor?: string;
}

const AdminFeatureEditor = () => {
  const [data, setData] = useState<FeatureSectionContent>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/feature-section")
      .then(res => setData(res.data))
      .catch(err => console.error("Fetch error", err))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (field: keyof FeatureSectionContent, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      await axios.put("http://localhost:5000/api/feature-section", data);
      alert("Updated successfully");
    } catch (err) {
      console.error("Update failed", err);
      alert("Update failed");
    }
  };

  const handleInit = async () => {
    try {
      await axios.post("http://localhost:5000/api/feature-section/init");
      alert("Initialized");
      window.location.reload();
    } catch (err) {
      console.error("Init failed", err);
      alert("Init failed");
    }
  };

  const handleReset = async () => {
    try {
      await axios.post("http://localhost:5000/api/feature-section/reset-defaults");
      alert("Reset to defaults");
      window.location.reload();
    } catch (err) {
      console.error("Reset failed", err);
      alert("Reset failed");
    }
  };

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🎨 Feature Section Editor</h2>

      {Object.entries({
        topText: "Top Text",
        topColor: "Top Color",
        h1Text: "H1 Text",
        h1Color: "H1 Color",
        subText: "Sub Text",
        subColor: "Sub Color",
        boldText: "Bold Text",
        boldColor: "Bold Color",
        bgColor: "Background Color"
      }).map(([key, label]) => (
        <div key={key} className="mb-4">
          <label className="block mb-1 font-medium">{label}</label>
          <input
            type={key.toLowerCase().includes("color") ? "color" : "text"}
            value={data[key as keyof FeatureSectionContent] || ""}
            onChange={(e) => handleChange(key as keyof FeatureSectionContent, e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
      ))}

      <div className="flex flex-wrap gap-4 mt-6">
        <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
        <button onClick={handleInit} className="px-4 py-2 bg-green-600 text-white rounded">Initialize</button>
        <button onClick={handleReset} className="px-4 py-2 bg-red-600 text-white rounded">Reset Defaults</button>
      </div>
    </div>
  );
};

export default AdminFeatureEditor;
