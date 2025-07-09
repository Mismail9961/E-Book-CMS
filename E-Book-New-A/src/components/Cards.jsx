"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const defaultCardData = {
  h1Text1: "Why Choose Professional",
  h1Text1Color: "#000428",
  h1Text2: "Web Design Company?",
  h1Text2Color: "#000428",
  cardBgColor: "#ffffff",
  cardInsideNumber: "01",
  cardBodyText:
    "Before launching your digital presence, having a well-defined plan is crucial. Our experts conduct thorough research on your industry, competitors, and target market to develop a tailored digital strategy that aligns with your goals. This strategic approach ensures a strong foundation for your website’s success.",
  cardBodyTextColor: "#000000",
  cardH2Text: "Have A Clear Web Strategy",
  cardH2TextColor: "#3E1774",
};

const AdminCardsEditor = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState(null);

  const fetchCards = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/cards");
      setCards(res.data);
    } catch (err) {
      console.error("Error fetching cards:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, [name]: value } : card
      )
    );
  };

  const handleSave = async (id) => {
    const card = cards.find((c) => c.id === id);
    if (!card) return;

    setSavingId(id);
    try {
      await axios.put(`http://localhost:5000/api/cards/${id}`, card);
      alert("✅ Card updated!");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to update.");
    } finally {
      setSavingId(null);
    }
  };

  const handleReset = async (id) => {
    const confirmReset = window.confirm("Reset this card to default values?");
    if (!confirmReset) return;

    try {
      await axios.put(`http://localhost:5000/api/cards/${id}`, defaultCardData);
      await fetchCards();
      alert("✅ Reset to default.");
    } catch (err) {
      console.error(err);
      alert("❌ Reset failed.");
    }
  };

  const handleAddCard = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/cards", defaultCardData);
      setCards((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("Failed to add card:", err);
    }
  };

  if (loading) return <p>Loading cards...</p>;

  const fields = [
    "h1Text1",
    "h1Text1Color",
    "h1Text2",
    "h1Text2Color",
    "cardBgColor",
    "cardInsideNumber",
    "cardBodyText",
    "cardBodyTextColor",
    "cardH2Text",
    "cardH2TextColor",
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow rounded-lg mt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">🛠️ Admin: Manage Cards</h2>
        <button
          onClick={handleAddCard}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          ➕ Add New Card
        </button>
      </div>

      {cards.map((card, index) => (
        <div
          key={card.id}
          className="border border-gray-300 p-4 rounded-lg mb-8 bg-gray-50"
        >
          <h3 className="font-bold text-lg mb-4">
            ✏️ Editing Card #{index + 1}
          </h3>

          {fields.map((field) => (
            <div key={field} className="mb-4">
              <label className="block font-medium mb-1 capitalize">{field}</label>
              <input
                type={field.toLowerCase().includes("color") ? "color" : "text"}
                name={field}
                value={card[field] || ""}
                onChange={(e) => handleChange(card.id, e)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          ))}

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => handleSave(card.id)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
              disabled={savingId === card.id}
            >
              {savingId === card.id ? "Saving..." : "💾 Save"}
            </button>

            <button
              onClick={() => handleReset(card.id)}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              🔁 Reset
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminCardsEditor;
