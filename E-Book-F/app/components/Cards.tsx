import React from "react";

const cardsData = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: "Have A Clear Web Strategy",
  content:
    "Before launching your digital presence, having a well-defined plan is crucial. Our experts conduct thorough research on your industry, competitors, and target market to develop a tailored digital strategy that aligns with your goals. This strategic approach ensures a strong foundation for your website’s success.",
}));

const WebStrategyCards = () => {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-20 py-10 bg-[#F5F5F5]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="bg-[#F5F5F5] p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5F5F5] text-[#3E1774] font-bold shadow-sm mr-4">
                {String(card.id).padStart(2, "0")}
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-[#3E1774]">
                {card.title}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {card.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebStrategyCards;
