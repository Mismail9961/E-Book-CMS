const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cloudinary = require('../utils/cloudinary');
const fs = require('fs');

// Helper to extract publicId from a Cloudinary URL
const getPublicIdFromUrl = (url) => {
  if (!url) return null;
  const parts = url.split('/');
  const file = parts.pop(); // e.g. abc123.jpg
  const [publicId] = file.split('.');
  const folder = parts.pop(); // e.g. work-section
  return `${folder}/${publicId}`;
};

// GET section
exports.getWorkSection = async (req, res) => {
  try {
    const section = await prisma.workSection.findFirst();
    if (!section) return res.status(404).json({ message: 'Not found' });
    res.json(section);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE section
exports.updateWorkSection = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updated = await prisma.workSection.update({
      where: { id },
      data,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// INIT default content
exports.initWorkSection = async (req, res) => {
  try {
    const exists = await prisma.workSection.findFirst();
    if (exists) return res.status(400).json({ message: 'Already initialized' });

    const section = await prisma.workSection.create({
      data: {
        h2Text: 'Why Work With Us',
        h2TextColour: '#00E0F0',
        h1Text: 'We Help You Grow',
        h1TextColour: '#ffffff',
        pText: 'Choose from multiple publishing paths, all designed to elevate your book and your brand.',
        pTextColour: '#ffffff',
        buttonText: 'Start Now',
        buttonTextColour: '#ffffff',
        buttonBgColour: '#1D1D60',
        buttonColourOnHover: '#272267',
        buttonColourOnClick: '#3A3A80',
        button2Text: 'Get a Quote',
        button2TextColour: '#ffffff',
        button2BgColour: '#272267',
        button2ColourOnHover: '#1D1D60',
        button2ColourOnClick: '#3A3A80',
        button3Text: 'Publish Fast',
        button3TextColour: '#ffffff',
        button3BgColour: '#1D1D60',
        button4Text: 'Free Consultation',
        button4TextColour: '#ffffff',
        button4BgColour: '#272267',
        image: 'https://example.com/work-section.jpg',
      },
    });

    res.status(201).json(section);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.uploadImage = async (req, res) => {
  try {
    const section = await prisma.workSection.findFirst();

    // Remove old image from Cloudinary if it exists
    if (section?.image?.includes('res.cloudinary.com')) {
      const publicId = section.image.split('/').pop().split('.')[0];
      await cloudinary.uploader.destroy(`work-section/${publicId}`);
    }

    // Upload new image
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'work-section',
    });

    // Delete local file after upload
    fs.unlinkSync(req.file.path);

    // Update DB with new image URL
    const updated = await prisma.workSection.update({
      where: { id: section.id },
      data: { image: result.secure_url },
    });

    res.status(200).json({ message: 'Image updated', url: result.secure_url });
  } catch (err) {
    res.status(500).json({ error: 'Image upload failed', details: err.message });
  }
};

// RESET section to defaults
exports.resetWorkSectionDefaults = async (req, res) => {
  try {
    const existing = await prisma.workSection.findFirst();
    if (!existing) return res.status(404).json({ message: 'No existing section to reset' });

    const updated = await prisma.workSection.update({
      where: { id: existing.id },
      data: {
        h2Text: 'Why Work With Us',
        h2TextColour: '#00E0F0',
        h1Text: 'We Help You Grow',
        h1TextColour: '#ffffff',
        pText: 'Choose from multiple publishing paths, all designed to elevate your book and your brand.',
        pTextColour: '#ffffff',
        buttonText: 'Start Now',
        buttonTextColour: '#ffffff',
        buttonBgColour: '#1D1D60',
        buttonColourOnHover: '#272267',
        buttonColourOnClick: '#3A3A80',
        button2Text: 'Get a Quote',
        button2TextColour: '#ffffff',
        button2BgColour: '#272267',
        button2ColourOnHover: '#1D1D60',
        button2ColourOnClick: '#3A3A80',
        button3Text: 'Publish Fast',
        button3TextColour: '#ffffff',
        button3BgColour: '#1D1D60',
        button4Text: 'Free Consultation',
        button4TextColour: '#ffffff',
        button4BgColour: '#272267',
        image: 'https://example.com/work-section.jpg',
      },
    });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
