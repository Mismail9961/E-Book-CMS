const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const setDefaultCard = async (req, res) => {
    try {
        const existing = await prisma.cards.findFirst();
        if (existing) return res.status(400).json({ message: "Default card already exists." });

        const defaultCard = await prisma.cards.create({
            data: {
                h1Text1: "Why Choose Professional",
                h1Text1Color: "#000428",
                h1Text2: "Web Design Company?",
                h1Text2Color: "#000428",
                cardBgColor: "#ffffff",
                cardInsideNumber: "01",
                cardBodyText: "Before launching your digital presence, having a well-defined plan is crucial. Our experts conduct thorough research on your industry, competitors, and target market to develop a tailored digital strategy that aligns with your goals. This strategic approach ensures a strong foundation for your website’s success.",
                cardBodyTextColor: "#000000",
                cardH2Text: "Have A Clear Web Strategy",
                cardH2TextColor: "#3E1774",
            },
        });

        res.status(201).json(defaultCard);
    } catch (error) {
        console.error("Error setting default card:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// GET /api/cards
const getAllCards = async (req, res) => {
    try {
        const cards = await prisma.cards.findMany();
        res.json(cards);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch cards' });
    }
};

// PUT /api/cards/:id
const updateCard = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCard = await prisma.cards.update({
            where: { id },
            data: req.body,
        });
        res.json(updatedCard);
    } catch (error) {
        console.error("Error updating card:", error);
        res.status(500).json({ error: 'Failed to update card' });
    }
};

const cardResetDefaults = async (req, res) => {
  try {
    const existing = await prisma.cards.findFirst();
    if (!existing) return res.status(404).json({ message: 'No record found to reset' });

    const updated = await prisma.cards.update({
      where: { id: existing.id },
      data: {
        h1Text1: "Why Choose Professional",
        h1Text1Color: "#000428",
        h1Text2: "Web Design Company?",
        h1Text2Color: "#000428",
        cardBgColor: "#ffffff",
        cardInsideNumber: "01",
        cardBodyText: "Before launching your digital presence, having a well-defined plan is crucial. Our experts conduct thorough research on your industry, competitors, and target market to develop a tailored digital strategy that aligns with your goals. This strategic approach ensures a strong foundation for your website’s success.",
        cardBodyTextColor: "#000000",
        cardH2Text: "Have A Clear Web Strategy",
        cardH2TextColor: "#3E1774",
      },
    });

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createCard = async (req, res) => {
  try {
    const newCard = await prisma.cards.create({
      data: req.body,
    });
    res.status(201).json(newCard);
  } catch (error) {
    console.error("Error creating card:", error);
    res.status(500).json({ error: "Failed to create card" });
  }
};



module.exports = {
  setDefaultCard,
  getAllCards,
  updateCard,
  cardResetDefaults,
  createCard
};
