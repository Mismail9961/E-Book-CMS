const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const path = require('path');
const fs = require('fs');

exports.getHeroSection2 = async (req, res) => {
  try {
    const hero = await prisma.heroSection2.findFirst();
    if (!hero) return res.status(404).json({ message: 'Hero Section 2 not found' });
    res.json(hero);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateHeroSection2 = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updated = await prisma.heroSection2.update({ where: { id }, data });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.initHeroSection2 = async (req, res) => {
  try {
    const exists = await prisma.heroSection2.findFirst();
    if (exists) return res.status(400).json({ message: 'Already initialized' });

    const section = await prisma.heroSection2.create({
      data: {
        h1Text: 'Why Choose Us?',
        h1TextColour: '#1E3075',
        pointsText: 'Creative Designs,Fast Delivery,Affordable Pricing',
        pointsTextColour: '#1E3075',
        pText: 'We deliver powerful digital solutions for businesses.',
        pTextColour: '##1E3075',
        image: 'https://pearsonbookspublishing.co.uk/neo/assets/images/web-designs-with-trophy.png.webp', // will be uploaded later
      },
    });

    res.status(201).json(section);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.uploadImage = async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ message: 'No image uploaded' });

    const imageUrl = `http://localhost:5000/uploads/${file.filename}`;
    res.status(200).json({ url: imageUrl });
  } catch (err) {
    res.status(500).json({ message: 'Image upload failed', error: err.message });
  }
};


exports.resetHeroSection2Defaults = async (req, res) => {
  try {
    const existing = await prisma.heroSection2.findFirst();
    if (!existing) return res.status(404).json({ message: 'No record found to reset' });

    const updated = await prisma.heroSection2.update({
      where: { id: existing.id },
      data: {
        h1Text: 'Why Choose Us?',
        h1TextColour: '#1E3075',
        pointsText: 'Creative Designs,Fast Delivery,Affordable Pricing',
        pointsTextColour: '#1E3075',
        pText: 'We deliver powerful digital solutions for businesses.',
        pTextColour: '#1E3075',
        image: 'https://pearsonbookspublishing.co.uk/neo/assets/images/web-designs-with-trophy.png.webp', // you can also reset to default image here
      },
    });

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
