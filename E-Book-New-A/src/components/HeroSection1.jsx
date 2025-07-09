"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const AdminHeroEditor = () => {
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(true);

  const initHeroSection = async () => {
    try {
      const { data } = await axios.post("http://localhost:5000/api/herosection/init");
      alert("Initialized successfully");
      setForm(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchHeroSection = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/herosection");
      setForm(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const handleReset = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/herosection/defaults");
      setForm((prev) => ({ ...prev, ...data, id: prev.id }));
      alert("Form reset to default values");
    } catch (err) {
      console.error("Failed to reset to defaults", err);
    }
  };

  useEffect(() => {
    fetchHeroSection();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`http://localhost:5000/api/herosection/${form.id}`, form);
      alert("Updated Successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="p-4">Loading...</p>;

  if (!form)
    return (
      <div className="p-4 space-y-4">
        <p className="text-red-500">No Hero Section Found</p>
        <button
          type="button"
          onClick={initHeroSection}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Initialize Hero Section
        </button>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Hero Section Editor</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {/* H1 Text */}
        <input
          type="text"
          name="h1Text"
          value={form.h1Text}
          onChange={handleChange}
          placeholder="H1 Text"
          className="border p-2 rounded"
        />
        <label className="flex flex-col text-sm">
          H1 Text Colour
          <input
            type="color"
            name="h1TextColour"
            value={form.h1TextColour}
            onChange={handleChange}
            className="w-full"
          />
        </label>

        {/* H3 Text */}
        <input
          type="text"
          name="h3Text"
          value={form.h3Text}
          onChange={handleChange}
          placeholder="H3 Text"
          className="border p-2 rounded"
        />
        <label className="flex flex-col text-sm">
          H3 Text Colour
          <input
            type="color"
            name="h3TextColour"
            value={form.h3TextColour}
            onChange={handleChange}
            className="w-full"
          />
        </label>

        {/* Paragraph */}
        <textarea
          name="pText"
          value={form.pText}
          onChange={handleChange}
          placeholder="Paragraph"
          className="border p-2 rounded col-span-2"
          rows={3}
        />
        <label className="flex flex-col text-sm col-span-2">
          Paragraph Text Colour
          <input
            type="color"
            name="pTextColour"
            value={form.pTextColour}
            onChange={handleChange}
            className="w-full"
          />
        </label>

        {/* Button */}
        <input
          type="text"
          name="buttonText"
          value={form.buttonText}
          onChange={handleChange}
          placeholder="Button Text"
          className="border p-2 rounded"
        />
        <label className="flex flex-col text-sm">
          Button Text Colour
          <input
            type="color"
            name="buttonTextColour"
            value={form.buttonTextColour}
            onChange={handleChange}
            className="w-full"
          />
        </label>
        <label className="flex flex-col text-sm col-span-2">
          Button Background Colour
          <input
            type="color"
            name="buttonBgColour"
            value={form.buttonBgColour}
            onChange={handleChange}
            className="w-full"
          />
        </label>

        {/* Form Styling */}
        <label className="flex flex-col text-sm">
          Form Background Colour
          <input
            type="color"
            name="formBgColour"
            value={form.formBgColour}
            onChange={handleChange}
            className="w-full"
          />
        </label>
        <input
          type="text"
          name="formButtonText"
          value={form.formButtonText}
          onChange={handleChange}
          placeholder="Form Button Text"
          className="border p-2 rounded"
        />
        <label className="flex flex-col text-sm">
          Form Button Text Colour
          <input
            type="color"
            name="formButtonTextColour"
            value={form.formButtonTextColour}
            onChange={handleChange}
            className="w-full"
          />
        </label>
        <label className="flex flex-col text-sm">
          Form Button Background Colour
          <input
            type="color"
            name="formButtonBgColour"
            value={form.formButtonBgColour}
            onChange={handleChange}
            className="w-full"
          />
        </label>

        {/* Background Video */}
        <input
          type="text"
          name="bgVideo"
          value={form.bgVideo}
          onChange={handleChange}
          placeholder="Background Video URL"
          className="border p-2 rounded col-span-2"
        />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded col-span-2">
          Update
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="bg-gray-500 text-white px-4 py-2 rounded col-span-2"
        >
          Reset to Defaults
        </button>
      </form>
    </div>
  );
};

export default AdminHeroEditor;
