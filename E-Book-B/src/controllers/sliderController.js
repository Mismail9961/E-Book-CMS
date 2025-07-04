const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cloudinary = require('../utils/cloudinary');
const fs = require('fs');

// GET: all slider images
exports.getAllImages = async (req, res) => {
  try {
    const images = await prisma.sliderImage1.findMany();
    res.json(images);
  } catch (err) {
    console.error("❌ Error fetching images:", err);
    res.status(500).json({ error: "Failed to get images" });
  }
};

// POST: Upload and create initial images
exports.initSlider = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No images received" });
    }

    const uploaded = await Promise.all(
      req.files.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path);
        if (fs.existsSync(file.path)) {
          fs.unlinkSync(file.path);
        }

        return await prisma.sliderImage1.create({
          data: {
            imageUrl: result.secure_url,
          },
        });
      })
    );

    res.status(201).json({ message: "Images uploaded", images: uploaded });
  } catch (err) {
    console.error("❌ Upload error:", err);
    res.status(500).json({ error: "Upload failed", details: err.message });
  }
};

// PUT: Upload a new image to Cloudinary (but don't update DB)
exports.updateImage = async (req, res) => {
  const { id } = req.params;

  try {
    const image = await prisma.sliderImage1.findUnique({ where: { id } });
    if (!image) return res.status(404).json({ message: 'Image not found' });

    const result = await cloudinary.uploader.upload(req.file.path);
    fs.unlinkSync(req.file.path); // remove temp file

    res.json({ message: 'Image uploaded to Cloudinary only', newImageUrl: result.secure_url });
  } catch (err) {
    console.error("❌ Upload error:", err);
    res.status(500).json({ error: "Image upload failed" });
  }
};




// PUT: Set default text and color content for all entries
exports.setDefaultSliderContent = async (req, res) => {
  try {
    const sliders = await prisma.sliderImage1.findMany();

    const updates = await Promise.all(
      sliders.map((slide) =>
        prisma.sliderImage1.update({
          where: { id: slide.id },
          data: {
            h1Text: slide.h1Text ?? "Clients Across Industries",
            h1Color: slide.h1Color ?? "#00E0E8",

            h3Text: slide.h3Text ?? "Full-Service Web Design Agency",
            h3Color: slide.h3Color ?? "#FFFFFF",

            pText: slide.pText ?? "From startups to Fortune 500 companies.",
            pColor: slide.pColor ?? "#FFFFFF",

            bgColor: slide.bgColor ?? "#2D0D5D",
          },
        })
      )
    );

    res.json({ message: "Default text/colors initialized", count: updates.length });
  } catch (err) {
    console.error("❌ Failed to set defaults:", err);
    res.status(500).json({ error: "Failed to initialize default content" });
  }
};
