import React, { useEffect, useState } from "react";

const API_BASE = "http://localhost:5000/api/about-us-cards";

const AdminAboutUsCardsEditor = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}`)
      .then((res) => res.json())
      .then((resData) => {
        console.log("Frontend received:", resData);
        setData(resData);
      })
      .catch(() => alert("Failed to fetch data."))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (field, value) => {
    if (!data) return;
    setData({ ...data, [field]: value });
  };

  const handleSave = async () => {
    if (!data?.id) return;
    try {
      await fetch(`${API_BASE}/${data.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      alert("Saved successfully!");
    } catch {
      alert("Failed to save.");
    }
  };

  const handleReset = async () => {
    try {
      await fetch(`${API_BASE}/reset-defaults`, { method: "POST" });
      const res = await fetch(`${API_BASE}`);
      const result = await res.json();
      setData(result);
      alert("Reset to defaults!");
    } catch {
      alert("Failed to reset.");
    }
  };

  if (loading) return <p className="p-4">Loading...</p>;
  if (!data) return <p className="p-4">No data available.</p>;

  const renderCard = (num) => {
    const prefix = `card${num}`;
    return (
      <div key={num} className="border p-4 rounded bg-gray-100 space-y-2">
        <h2 className="text-lg font-semibold">Card {num}</h2>
        <input
          className="border p-2 w-full"
          placeholder="Title 1"
          value={data?.[`${prefix}Title1`] || ""}
          onChange={(e) => handleChange(`${prefix}Title1`, e.target.value)}
        />
        <input
          className="border p-2 w-full"
          placeholder="Title 2"
          value={data?.[`${prefix}Title2`] || ""}
          onChange={(e) => handleChange(`${prefix}Title2`, e.target.value)}
        />
        <textarea
          className="border p-2 w-full"
          placeholder="Paragraph"
          rows={3}
          value={data?.[`${prefix}Paragraph`] || ""}
          onChange={(e) => handleChange(`${prefix}Paragraph`, e.target.value)}
        />
        <div className="flex gap-4 flex-wrap">
          <div>
            <label>Title Colour 1</label>
            <input
              type="color"
              value={data?.[`${prefix}TitleColour1`] || "#000000"}
              onChange={(e) =>
                handleChange(`${prefix}TitleColour1`, e.target.value)
              }
            />
          </div>
          <div>
            <label>Title Colour 2</label>
            <input
              type="color"
              value={data?.[`${prefix}TitleColour2`] || "#000000"}
              onChange={(e) =>
                handleChange(`${prefix}TitleColour2`, e.target.value)
              }
            />
          </div>
          <div>
            <label>Text Colour</label>
            <input
              type="color"
              value={data?.[`${prefix}TextColour`] || "#000000"}
              onChange={(e) =>
                handleChange(`${prefix}TextColour`, e.target.value)
              }
            />
          </div>
          <div>
            <label>Card Background</label>
            <input
              type="color"
              value={data?.[`${prefix}Bg`] || "#ffffff"}
              onChange={(e) => handleChange(`${prefix}Bg`, e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6 bg-white">
      <h1 className="text-2xl font-bold">Edit “What We Stand For” Section</h1>

      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <label>Section Background</label>
        <input
          type="color"
          value={data?.sectionBg || "#ffffff"}
          onChange={(e) => handleChange("sectionBg", e.target.value)}
        />

        <label>h3Text</label>
        <input
          placeholder="h3Text"
          value={data?.h3Text || ""}
          onChange={(e) => handleChange("h3Text", e.target.value)}
        />

        <label>h3Text Colour</label>
        <input
          type="color"
          value={data?.h3TextColour || "#000000"}
          onChange={(e) => handleChange("h3TextColour", e.target.value)}
        />

        <label>h1Text</label>
        <input
          placeholder="h1Text"
          value={data?.h1Text || ""}
          onChange={(e) => handleChange("h1Text", e.target.value)}
        />

        <label>h1Text Colour</label>
        <input
          type="color"
          value={data?.h1TextColour || "#000000"}
          onChange={(e) => handleChange("h1TextColour", e.target.value)}
        />
      </div>

      {/* Render 3 Cards */}
      {[1, 2, 3].map((n) => renderCard(n))}

      {/* Button 1 */}
      <div className="bg-blue-50 p-4 rounded space-y-2">
        <h2 className="text-lg font-semibold">Button 1</h2>
        <input
          className="border p-2 w-full"
          placeholder="Button 1 Text"
          value={data.button1Text || ""}
          onChange={(e) => handleChange("button1Text", e.target.value)}
        />
        <label>Text Colour</label>
        <input
          type="color"
          value={data.button1TextColour || "#000000"}
          onChange={(e) => handleChange("button1TextColour", e.target.value)}
        />
        <label>Background Colour</label>
        <input
          type="color"
          value={data.button1BgColour || "#ffffff"}
          onChange={(e) => handleChange("button1BgColour", e.target.value)}
        />
      </div>

      {/* Button 2 */}
      <div className="bg-green-50 p-4 rounded space-y-2">
        <h2 className="text-lg font-semibold">Button 2</h2>
        <input
          className="border p-2 w-full"
          placeholder="Button 2 Text"
          value={data.button2Text || ""}
          onChange={(e) => handleChange("button2Text", e.target.value)}
        />
        <label>Text Colour</label>
        <input
          type="color"
          value={data.button2TextColour || "#000000"}
          onChange={(e) => handleChange("button2TextColour", e.target.value)}
        />
        <label>Background Colour</label>
        <input
          type="color"
          value={data.button2BgColour || "#ffffff"}
          onChange={(e) => handleChange("button2BgColour", e.target.value)}
        />
      </div>

      {/* Actions */}
      <div className="flex gap-4 pt-6">
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

export default AdminAboutUsCardsEditor;
