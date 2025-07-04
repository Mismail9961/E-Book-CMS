const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get section
exports.getHeroSection3 = async (req, res) => {
  try {
    const section = await prisma.heroSection3.findFirst();
    if (!section) return res.status(404).json({ message: 'Not found' });
    res.json(section);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update section
exports.updateHeroSection3 = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updated = await prisma.heroSection3.update({
      where: { id },
      data,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Initialize default content
exports.initHeroSection3 = async (req, res) => {
  try {
    const exists = await prisma.heroSection3.findFirst();
    if (exists) return res.status(400).json({ message: 'Already initialized' });

    const section = await prisma.heroSection3.create({
      data: {
        divBg: '#1D1D60', // New field
        div1Bg: '#00E0F0',
        div2Bg: '#00E0F0',
        h1Text: 'Stay Ahead in 2025!',
        h1TextColour: '#ffffff',
        pText:
          'Navigate the publishing process effortlessly. We provide professional support every step of the way, ensuring your publishing experience is smooth and successful.',
        pTextColour: '#ffffff',
        buttonText: 'GET STARTED',
        buttonTextColour: '#272267',
        buttonBgColour: '#ffffff',
        image: 'https://pearsonbookspublishing.co.uk/neo/assets/images/cta.webp',
      },
    });

    res.status(201).json(section);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Reset to default values
exports.resetHeroSection3Defaults = async (req, res) => {
  try {
    const existing = await prisma.heroSection3.findFirst();
    if (!existing) {
      return res.status(404).json({ message: 'No existing section to reset' });
    }

    const updated = await prisma.heroSection3.update({
      where: { id: existing.id },
      data: {
        divBg: '#1D1D60', // New field
        div1Bg: '#00E0F0',
        div2Bg: '#00E0F0',
        h1Text: 'Stay Ahead in 2025!',
        h1TextColour: '#ffffff',
        pText:
          'Navigate the publishing process effortlessly. We provide professional support every step of the way, ensuring your publishing experience is smooth and successful.',
        pTextColour: '#ffffff',
        buttonText: 'GET STARTED',
        buttonTextColour: '#272267',
        buttonBgColour: '#ffffff',
        image: 'https://pearsonbookspublishing.co.uk/neo/assets/images/cta.webp',
      },
    });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

