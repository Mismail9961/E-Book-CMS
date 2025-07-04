// src/controllers/heroSectionController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const path = require('path');
const fs = require('fs');

// GET hero section
exports.getHeroSection = async (req, res) => {
  try {
    const hero = await prisma.heroSection.findFirst();
    if (!hero) return res.status(404).json({ message: 'Not found' });
    res.json(hero);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT update hero section
exports.updateHeroSection = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    console.log(`[Hero Update] Received update request for ID: ${id}`);
    console.log(`[Hero Update] New data:`, data);

    const updated = await prisma.heroSection.update({ where: { id }, data });

    console.log(`[Hero Update] Successfully updated hero section with ID: ${id}`);
    res.json(updated);
  } catch (err) {
    console.error(`[Hero Update] Error updating hero section:`, err.message);
    res.status(500).json({ error: err.message });
  }
};


// POST init hero section
exports.initHeroSection = async (req, res) => {
  try {
    const exists = await prisma.heroSection.findFirst();
    if (exists) return res.status(400).json({ message: 'Already initialized' });

    const hero = await prisma.heroSection.create({
      data: {
        h1Text: 'We Grow Brands Online',
        h1TextColour: '#ffffff',
        h3Text: 'Custom Websites, Branding & Digital Marketing',
        h3TextColour: '#ffffff',
        pText: 'We work closely with our clients...',
        pTextColour: '#dddddd',
        buttonText: 'REQUEST QUOTE',
        buttonTextColour: '#272267',
        buttonBgColour: '#ffffff',
        formBgColour: '#23257B',
        formButtonBgColour: '#281055',
        formButtonText: 'Get Started',
        formButtonTextColour: '#ffffff',
        bgVideo: 'https://pearsonbookspublishing.co.uk/neo/assets/video/large.mp4', 
      },
    });

    res.status(201).json(hero);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET defaults (optional)
exports.getHeroDefaults = async (req, res) => {
  try {
    res.json({
      h1Text: 'We Grow Brands Online',
      h1TextColour: '#ffffff',
      h3Text: 'Custom Websites, Branding & Digital Marketing',
      h3TextColour: '#ffffff',
      pText: 'We work closely with our clients...',
      pTextColour: '#dddddd',
      buttonText: 'REQUEST QUOTE',
      buttonTextColour: '#272267',
      buttonBgColour: '#ffffff',
      formBgColour: '#23257B',
      formButtonBgColour: '#281055',
      formButtonText: 'Get Started',
      formButtonTextColour: '#ffffff',
      bgVideo: 'https://pearsonbookspublishing.co.uk/neo/assets/video/large.mp4',
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST upload video to server
exports.uploadVideo = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: 'No video uploaded' });
    }

    // Save to /public/uploads with unique name
    const uploadPath = path.join(__dirname, '../../public/uploads');
    if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath, { recursive: true });

    const fileName = Date.now() + '-' + file.originalname;
    const fullPath = path.join(uploadPath, fileName);
    fs.writeFileSync(fullPath, file.buffer);

    // Respond with the public URL
    const videoUrl = `/uploads/${fileName}`;
    res.status(200).json({ url: videoUrl });
  } catch (err) {
    console.error('Upload failed:', err);
    res.status(500).json({ message: 'Upload failed' });
  }
};
