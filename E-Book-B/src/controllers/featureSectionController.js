const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET
exports.getFeatureContent = async (req, res) => {
  try {
    const content = await prisma.featureSectionContent.findFirst();
    res.json(content || {});
  } catch (err) {
    console.error("❌ Fetch failed", err);
    res.status(500).json({ error: "Fetch failed" });
  }
};

// PUT
exports.updateFeatureContent = async (req, res) => {
  try {
    const {
      topText, topColor,
      h1Text, h1Color,
      subText, subColor,
      boldText, boldColor,
      bgColor
    } = req.body;

    const existing = await prisma.featureSectionContent.findFirst();
    if (!existing) return res.status(404).json({ message: "No content found" });

    const updated = await prisma.featureSectionContent.update({
      where: { id: existing.id },
      data: {
        topText, topColor,
        h1Text, h1Color,
        subText, subColor,
        boldText, boldColor,
        bgColor
      }
    });

    res.json(updated);
  } catch (err) {
    console.error("❌ Update failed", err);
    res.status(500).json({ error: "Update failed" });
  }
};

// POST /init
exports.initFeatureContent = async (req, res) => {
  try {
    const exists = await prisma.featureSectionContent.findFirst();
    if (exists) return res.status(400).json({ message: "Already initialized" });

    const created = await prisma.featureSectionContent.create({
      data: {
        topText: "CLIENTS ACROSS INDUSTRIES",
        topColor: "#00E0F0",
        h1Text: "FULL-SERVICE WEB DESIGN AGENCY",
        h1Color: "#FFFFFF",
        subText: "From startups to Fortune 500 companies,",
        subColor: "#FFFFFF",
        boldText: "we create custom solutions that grow brands online.",
        boldColor: "#FFFFFF",
        bgColor: "#4F2283"
      }
    });

    res.status(201).json({ message: "Initialized", data: created });
  } catch (err) {
    console.error("❌ Init failed", err);
    res.status(500).json({ error: "Init failed" });
  }
};

// POST /reset-defaults
exports.resetFeatureDefaults = async (req, res) => {
  try {
    const content = await prisma.featureSectionContent.findFirst();
    if (!content) return res.status(404).json({ message: "No content found" });

    const reset = await prisma.featureSectionContent.update({
      where: { id: content.id },
      data: {
        topText: "CLIENTS ACROSS INDUSTRIES",
        topColor: "#00E0F0",
        h1Text: "FULL-SERVICE WEB DESIGN AGENCY",
        h1Color: "#FFFFFF",
        subText: "From startups to Fortune 500 companies,",
        subColor: "#FFFFFF",
        boldText: "we create custom solutions that grow brands online.",
        boldColor: "#FFFFFF",
        bgColor: "#4F2283"
      }
    });

    res.json({ message: "Defaults restored", data: reset });
  } catch (err) {
    console.error("❌ Reset failed", err);
    res.status(500).json({ error: "Reset failed" });
  }
};
