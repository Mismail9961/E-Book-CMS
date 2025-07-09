"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const AdminWorkSectionEditor = () => {
  const [form, setForm] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/worksection").then((res) => {
      setForm(res.data);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => (prev ? { ...prev, [name]: value } : prev));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/worksection/upload-image",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setForm((prev) => (prev ? { ...prev, image: res.data.url } : prev));
      alert("Image uploaded!");
    } catch (err) {
      alert("Image upload failed.");
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form) return;

    try {
      await axios.put(`http://localhost:5000/api/worksection/${form.id}`, form);
      alert("Updated successfully!");
    } catch (err) {
      alert("Update failed!");
      console.error(err);
    }
  };

  if (!form) return <p className="p-4">Loading...</p>;

  const PreviewButton = ({
    text,
    textColor,
    bgColor,
    hoverColor,
    clickColor,
  }) => (
    <button
      type="button"
      style={{
        color: textColor,
        backgroundColor: bgColor || "#1D1D60",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverColor || bgColor || "#272267";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = bgColor || "#1D1D60";
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.backgroundColor = clickColor || "#3A3A80";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.backgroundColor = hoverColor || bgColor || "#272267";
      }}
      className="px-6 py-2 font-bold rounded transition-all duration-200"
    >
      {text || "Preview"}
    </button>
  );

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold mb-4">Edit Work Section</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          "h2Text", "h2TextColour",
          "h1Text", "h1TextColour",
          "pText", "pTextColour",
          "buttonText", "buttonTextColour", "buttonBgColour", "buttonColourOnClick", "buttonColourOnHover",
          "button2Text", "button2TextColour", "button2BgColour", "button2ColourOnClick", "button2ColourOnHover",
          "button3Text", "button3TextColour", "button3BgColour", "button3ColourOnClick", "button3ColourOnHover",
          "button4Text", "button4TextColour", "button4BgColour", "button4ColourOnClick", "button4ColourOnHover",
        ].map((field) => (
          <div key={field}>
            <label className="block font-medium mb-1">{field}</label>
            {field.toLowerCase().includes("colour") ? (
              <input
                type="color"
                name={field}
                value={form[field] || "#000000"}
                onChange={handleChange}
                className="w-full h-10"
              />
            ) : field.toLowerCase().includes("text") && field !== "pText" ? (
              <input
                type="text"
                name={field}
                value={form[field] || ""}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            ) : (
              <textarea
                name={field}
                value={form[field] || ""}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            )}
          </div>
        ))}

        <div className="col-span-full">
          <label className="block font-medium mb-1">Image</label>
          {form.image && (
            <img
              src={form.image}
              alt="Current"
              className="w-full max-w-sm rounded shadow mb-2"
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full"
          />
        </div>

        <div className="col-span-full space-y-2">
          <label className="block font-medium mb-1">Button Previews</label>
          <div className="flex flex-wrap gap-4">
            <PreviewButton
              text={form.buttonText}
              textColor={form.buttonTextColour}
              bgColor={form.buttonBgColour}
              hoverColor={form.buttonColourOnHover}
              clickColor={form.buttonColourOnClick}
            />
            <PreviewButton
              text={form.button2Text}
              textColor={form.button2TextColour}
              bgColor={form.button2BgColour}
              hoverColor={form.button2ColourOnHover}
              clickColor={form.button2ColourOnClick}
            />
            <PreviewButton
              text={form.button3Text}
              textColor={form.button3TextColour}
              bgColor={form.button3BgColour}
              hoverColor={form.button3ColourOnHover}
              clickColor={form.button3ColourOnClick}
            />
            <PreviewButton
              text={form.button4Text}
              textColor={form.button4TextColour}
              bgColor={form.button4BgColour}
              hoverColor={form.button4ColourOnHover}
              clickColor={form.button4ColourOnClick}
            />
          </div>
        </div>

        <div className="col-span-full">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminWorkSectionEditor;
