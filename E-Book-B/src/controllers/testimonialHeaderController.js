const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Default values
const defaultData = {
  topBadgeText: "WE FOCUS ON DRIVING MEASURABLE RESULTS",
  topBadgeTextColor: "#FFFFFF",
  topBadgeBgColor: "#00CFFF",
  h1TextPrefix: "Client's",
  h1TextPrefixColor: "#FFFFFF",
  h1TextMain: "Testimonials",
  h1TextMainColor: "#00E6F6",
  sectionBgColor: "#0F0A1E",
};

// GET
exports.getHeader = async (req, res) => {
  try {
    const data = await prisma.testimonialHeader.findFirst();
    if (!data) return res.status(404).json({ message: "Header not found" });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching header" });
  }
};

// PUT (update)
exports.updateHeader = async (req, res) => {
  try {
    const existing = await prisma.testimonialHeader.findFirst();
    if (!existing) return res.status(404).json({ message: "Header not initialized" });

    const updated = await prisma.testimonialHeader.update({
      where: { id: existing.id },
      data: req.body,
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "Error updating header" });
  }
};

// POST /initialize (create only if not exists)
exports.initializeDefaults = async (req, res) => {
  try {
    const existing = await prisma.testimonialHeader.findFirst();
    if (existing) return res.json({ message: "Already initialized", data: existing });

    const created = await prisma.testimonialHeader.create({ data: defaultData });
    res.json({ message: "Initialized with defaults", data: created });
  } catch (error) {
    res.status(500).json({ error: "Error initializing header" });
  }
};

// POST /reset-defaults
exports.resetToDefaults = async (req, res) => {
  try {
    const existing = await prisma.testimonialHeader.findFirst();
    if (!existing) return res.status(404).json({ message: "Header not initialized" });

    const reset = await prisma.testimonialHeader.update({
      where: { id: existing.id },
      data: defaultData,
    });

    res.json({ message: "Reset to default", data: reset });
  } catch (error) {
    res.status(500).json({ error: "Error resetting header" });
  }
};
