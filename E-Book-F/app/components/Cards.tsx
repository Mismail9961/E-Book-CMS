"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

// Full card type with dynamic fields
type CardType = {
  id: string;
  cardInsideNumber?: string;
  cardH2Text?: string;
  cardBodyText?: string;
  cardH2TextColor?: string;
  cardBodyTextColor?: string;
  cardBgColor?: string;
};

const WhyChooseProfessional = () => {
  const [cardsData, setCardsData] = useState<CardType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/cards");
        setCardsData(res.data);
      } catch (err) {
        console.error("Failed to fetch card data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="w-full bg-white">
      {/* Heading Section */}
      <div className="px-4 md:px-12 lg:px-20 py-10 bg-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#000428] leading-tight max-w-[606px]">
          Why Choose <span className="text-[#3E1774]">Professional</span> Web Design Company?
        </h1>
      </div>

      {/* Cards Section */}
      <div className="px-4 sm:px-6 lg:px-20 py-10 bg-[#F5F5F5]">
        {loading ? (
          <p>Loading...</p>
        ) : cardsData.length === 0 ? (
          <p>No cards available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {cardsData.map((card, index) => (
              <div
                key={card.id}
                className="p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                style={{ backgroundColor: card.cardBgColor || "#F5F5F5" }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5F5F5] text-[#3E1774] font-bold shadow-sm mr-4">
                    {String(card.cardInsideNumber || index + 1).padStart(2, "0")}
                  </div>
                  <h2
                    className="text-lg sm:text-xl font-semibold"
                    style={{ color: card.cardH2TextColor || "#3E1774" }}
                  >
                    {card.cardH2Text || "Card Title"}
                  </h2>
                </div>
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ color: card.cardBodyTextColor || "#333" }}
                >
                  {card.cardBodyText || "Card content goes here."}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WhyChooseProfessional;
