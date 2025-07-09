const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// GET: Fetch the section
exports.getAboutUsCards = async (req, res) => {
  try {
    const data = await prisma.aboutUsCards.findFirst();
    res.json(data);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: "Failed to fetch About Us Cards section." });
  }
};

// PUT: Update section by ID
exports.updateAboutUsCards = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const existing = await prisma.aboutUsCards.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ error: "Section not found." });
    }

    const data = await prisma.aboutUsCards.update({
      where: { id },
      data: updatedData,
    });
    res.json(data);
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ error: "Failed to update About Us Cards section." });
  }
};

// POST: Reset + seed default values
exports.resetAboutUsCardsDefaults = async (req, res) => {
  try {
    const existing = await prisma.aboutUsCards.findFirst();
    if (existing) {
      await prisma.aboutUsCards.delete({ where: { id: existing.id } });
    }

    const defaultData = await prisma.aboutUsCards.create({
      data: {
        sectionBg: "#ffffff",
        h3Text: "OUR AGENCY’S VALUES",
        h3TextColour: "#1E1256",
        h1Text: "What We Stand For 🚀",
        h1TextColour: "#000000",

        card1Title1: "Some go the extra mile.",
        card1Title2: "We’ll run a marathon.",
        card1TitleColour1: "#ffffff",
        card1TitleColour2: "#00E0F0",
        card1Paragraph:
          "Good enough isn’t good enough for us. We pride ourselves with creating exceptional digital work...",
        card1TextColour: "#ffffff",
        card1Bg: "#22155D",

        card2Title1: "Some go the extra mile.",
        card2Title2: "We’ll run a marathon.",
        card2TitleColour1: "#ffffff",
        card2TitleColour2: "#00E0F0",
        card2Paragraph:
          "Good enough isn’t good enough for us. We pride ourselves with creating exceptional digital work...",
        card2TextColour: "#ffffff",
        card2Bg: "#22155D",

        card3Title1: "Some go the extra mile.",
        card3Title2: "We’ll run a marathon.",
        card3TitleColour1: "#ffffff",
        card3TitleColour2: "#00E0F0",
        card3Paragraph:
          "Good enough isn’t good enough for us. We pride ourselves with creating exceptional digital work...",
        card3TextColour: "#ffffff",
        card3Bg: "#22155D",

        button1Text: "EXPLORE OUR SERVICES",
        button1TextColour: "#000000",
        button1BgColour: "#ffffff",

        button2Text: "LET’S TALK",
        button2TextColour: "#000000",
        button2BgColour: "#ffffff",
      },
    });

    res.status(201).json(defaultData);
  } catch (error) {
    console.error("Reset error:", error);
    res.status(500).json({ error: "Failed to reset About Us Cards section." });
  }
};
