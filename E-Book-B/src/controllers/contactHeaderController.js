const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getContactHeader = async (req, res) => {
  const existing = await prisma.contactHeaderSection.findFirst();
  res.json(existing);
};

exports.updateContactHeader = async (req, res) => {
  const body = req.body;
  const existing = await prisma.contactHeaderSection.findFirst();

  if (!existing) return res.status(404).json({ message: "Not found" });

  const updated = await prisma.contactHeaderSection.update({
    where: { id: existing.id },
    data: body,
  });

  res.json(updated);
};

exports.initializeDefaults = async (req, res) => {
  const existing = await prisma.contactHeaderSection.findFirst();
  if (existing) return res.json({ message: "Already exists", data: existing });

  const created = await prisma.contactHeaderSection.create({
    data: {
      badgeText: "CONNECT WITH US",
      badgeTextColor: "#ffffff",
      badgeBgColor: "#00dcff",
      h1TextPart1: "Let's Connect And Create Websites",
      h1TextPart1Color: "#ffffff",
      h1TextPart2: "Together",
      h1TextPart2Color: "#00dcff",
      paragraphText:
        "We believe in the power of connection. Whether you have a project in mind, a question to ask, or just want to explore the possibilities, we’re here for you. Let’s collaborate, innovate, and create something extraordinary together.",
      paragraphTextColor: "#ffffff",
      backgroundColor: "#000000",
    },
  });

  res.json({ message: "Initialized with defaults", data: created });
};

exports.resetDefaults = async (req, res) => {
  const existing = await prisma.contactHeaderSection.findFirst();
  if (!existing) return res.status(404).json({ message: "Not found" });

  const reset = await prisma.contactHeaderSection.update({
    where: { id: existing.id },
    data: {
      badgeText: "CONNECT WITH US",
      badgeTextColor: "#ffffff",
      badgeBgColor: "#00dcff",
      h1TextPart1: "Let's Connect And Create Websites",
      h1TextPart1Color: "#ffffff",
      h1TextPart2: "Together",
      h1TextPart2Color: "#00dcff",
      paragraphText:
        "We believe in the power of connection. Whether you have a project in mind, a question to ask, or just want to explore the possibilities, we’re here for you. Let’s collaborate, innovate, and create something extraordinary together.",
      paragraphTextColor: "#ffffff",
      backgroundColor: "#000000",
    },
  });

  res.json({ message: "Reset to defaults", data: reset });
};
