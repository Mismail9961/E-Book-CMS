'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminHeroSection2Editor = () => {
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchHeroSection2 = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/herosection2');
      setForm(data);
    } catch (err) {
      console.error('Fetch failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const initHeroSection2 = async () => {
    try {
      const { data } = await axios.post('http://localhost:5000/api/herosection2/init');
      alert('Initialized successfully');
      setForm(data);
    } catch (err) {
      alert(err?.response?.data?.message || 'Initialization failed');
    }
  };

  const resetToDefaults = async () => {
    try {
      const { data } = await axios.post('http://localhost:5000/api/herosection2/reset-defaults');
      setForm(data);
      alert('Reset to default values');
    } catch (err) {
      console.error('Reset failed:', err);
      alert('Failed to reset');
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await axios.post('http://localhost:5000/api/herosection2/upload-image', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setForm((prev) => (prev ? { ...prev, image: res.data.url } : prev));
      alert('Image uploaded successfully!');
    } catch (err) {
      console.error('Image upload failed', err);
      alert('Upload failed');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => (prev ? { ...prev, [name]: value } : prev));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form) return;

    const updated = {
      h1Text: form.h1Text,
      h1TextColour: form.h1TextColour,
      pointsText: form.pointsText,
      pointsTextColour: form.pointsTextColour,
      pText: form.pText,
      pTextColour: form.pTextColour,
      image: form.image,
    };

    try {
      await axios.put(`http://localhost:5000/api/herosection2/${form.id}`, updated);
      alert('Updated Successfully!');
    } catch (err) {
      console.error('Update failed', err);
      alert('Update failed');
    }
  };

  useEffect(() => {
    fetchHeroSection2();
  }, []);

  if (loading) return <p className="p-4">Loading...</p>;

  if (!form) {
    return (
      <div className="p-4 space-y-4">
        <p className="text-red-500">No Hero Section 2 Found</p>
        <button
          type="button"
          onClick={initHeroSection2}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Initialize Hero Section 2
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Hero Section 2 Editor</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
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

        <textarea
          name="pointsText"
          value={form.pointsText}
          onChange={handleChange}
          placeholder="Bullet Points (comma separated)"
          className="border p-2 rounded col-span-2"
          rows={3}
        />
        <label className="flex flex-col text-sm col-span-2">
          Points Text Colour
          <input
            type="color"
            name="pointsTextColour"
            value={form.pointsTextColour}
            onChange={handleChange}
            className="w-full"
          />
        </label>

        <textarea
          name="pText"
          value={form.pText}
          onChange={handleChange}
          placeholder="Paragraph Text"
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

        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="border p-2 rounded col-span-2"
        />
        <label className="flex flex-col text-sm col-span-2">
          Or Upload New Image
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border mt-1"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded col-span-2"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={resetToDefaults}
          className="bg-gray-600 text-white px-4 py-2 rounded col-span-2"
        >
          Reset to Defaults
        </button>
      </form>
    </div>
  );
};

export default AdminHeroSection2Editor;
