const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// GET: Get the AboutUsH1 data
exports.getAboutUsH1 = async (req, res) => {
  try {
    const data = await prisma.aboutUsH1.findFirst();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch About Us data." });
  }
};

// PUT: Update the AboutUsH1 section by ID
exports.updateAboutUsH1 = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const data = await prisma.aboutUsH1.update({
      where: { id },
      data: updatedData,
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to update About Us section." });
  }
};

// POST: Reset and initialize default AboutUsH1 content
exports.resetAboutUsH1Defaults = async (req, res) => {
  try {
    const existing = await prisma.aboutUsH1.findFirst();
    if (existing) {
      await prisma.aboutUsH1.delete({ where: { id: existing.id } });
    }

    const defaultData = await prisma.aboutUsH1.create({
      data: {
        divBg: "#150E1A",
        h3Text: "WELCOME TO OUR BUBBLE",
        h3TextColour: "#fffff",
        h3cardBg: "#0E42B7",
        h1Text: "We are a collective of creatives based across The Globe, here to help your brand burst onto the digital stage.",
        h1TextColour: "#fffff",
        pText: "Burst is home to a hive of talented creatives who put digital first. We have cultivated deep experience across the digital landscape, making us leaders in designing your complete online presence. From building brand identity to web design, managing social media platforms, digital marketing & everything in between – we thrive on making your brand shine in the spotlight.",
        pTextColour: "#ffffff",
      },
    });

    res.status(201).json(defaultData);
  } catch (error) {
    res.status(500).json({ error: "Failed to reset About Us section." });
  }
};
