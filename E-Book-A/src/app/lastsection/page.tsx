"use client";
import React, { useEffect, useState, ChangeEvent } from "react";
import axios from "axios";

type LastSection = {
  id: string;
  h1Text: string;
  h1TextColour: string;
  h3Text: string;
  h3TextColour: string;
  formBgColour: string;
  formButtonBgColour: string;
  formButtonText: string;
  formButtonTextColour: string;
  bgImage: string;
  createdAt: string;
  updatedAt: string;
};

const API_URL = "http://localhost:5000/api/lastsection";

const AdminLastSectionEditor = () => {
  const [section, setSection] = useState<LastSection | null>(null);
  const [formData, setFormData] = useState<Partial<LastSection>>({});
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  // Fetch section
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API_URL);
        setSection(res.data);
        setFormData(res.data);
      } catch (err) {
        console.error("Failed to fetch section:", err);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleTextUpdate = async () => {
    try {
      setLoading(true);
      const res = await axios.put(API_URL, formData);
      alert("Section updated!");
      setSection(res.data);
    } catch (err) {
      alert("Update failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async () => {
    if (!imageFile) return alert("Please select an image");
    const form = new FormData();
    form.append("image", imageFile);

    try {
      setLoading(true);
      const res = await axios.post(`${API_URL}/upload-image`, form);
      alert("Image uploaded successfully");
      setSection(res.data.updated);
      setFormData((prev) => ({ ...prev, bgImage: res.data.url }));
    } catch (err) {
      alert("Image upload failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleResetDefaults = async () => {
    try {
      setLoading(true);
      const res = await axios.put(`${API_URL}/reset-defaults`);
      alert("Defaults restored");
      setSection(res.data);
      setFormData(res.data);
    } catch (err) {
      alert("Reset failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!formData || !section) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow rounded space-y-6">
      <h2 className="text-2xl font-bold">🛠️ Admin: Last Section Editor</h2>

      {/* Image Preview & Upload */}
      <div>
        <p className="font-semibold mb-2">Current Background Image:</p>
        <img
          src={formData.bgImage}
          alt="Current Background"
          className="w-full h-64 object-cover rounded mb-3"
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button
          onClick={handleImageUpload}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Upload Image
        </button>
      </div>

      {/* Text & Colors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="h1Text"
          value={formData.h1Text || ""}
          onChange={handleInputChange}
          placeholder="h1 Text"
          className="border p-2 rounded"
        />
        <input
          name="h1TextColour"
          type="color"
          value={formData.h1TextColour || "#000000"}
          onChange={handleInputChange}
          className="w-16 h-10"
        />

        <input
          name="h3Text"
          value={formData.h3Text || ""}
          onChange={handleInputChange}
          placeholder="h3 Text"
          className="border p-2 rounded"
        />
        <input
          name="h3TextColour"
          type="color"
          value={formData.h3TextColour || "#000000"}
          onChange={handleInputChange}
          className="w-16 h-10"
        />

        <label className="flex flex-col">
          Form BG Colour
          <input
            name="formBgColour"
            type="color"
            value={formData.formBgColour || "#ffffff"}
            onChange={handleInputChange}
            className="w-16 h-10"
          />
        </label>

        <label className="flex flex-col">
          Button BG Colour
          <input
            name="formButtonBgColour"
            type="color"
            value={formData.formButtonBgColour || "#000000"}
            onChange={handleInputChange}
            className="w-16 h-10"
          />
        </label>

        <input
          name="formButtonText"
          value={formData.formButtonText || ""}
          onChange={handleInputChange}
          placeholder="Button Text"
          className="border p-2 rounded"
        />
        <input
          name="formButtonTextColour"
          type="color"
          value={formData.formButtonTextColour || "#ffffff"}
          onChange={handleInputChange}
          className="w-16 h-10"
        />
      </div>

      {/* Actions */}
      <div className="flex space-x-4 pt-4">
        <button
          onClick={handleTextUpdate}
          disabled={loading}
          className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Save Changes
        </button>
        <button
          onClick={handleResetDefaults}
          disabled={loading}
          className="px-5 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Reset Text & Colors
        </button>
      </div>
    </div>
  );
};

export default AdminLastSectionEditor;
