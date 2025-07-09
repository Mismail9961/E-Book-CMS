const cloudinary = require("../utils/cloudinary");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const streamifier = require("streamifier");

// GET last section
exports.getLastSection = async (req, res) => {
  try {
    const section = await prisma.lastSection.findFirst();
    res.json(section);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Last Section" });
  }
};

// PUT update last section (text, colors, bgImage)
exports.updateLastSection = async (req, res) => {
  try {
    const data = req.body;

    const section = await prisma.lastSection.findFirst();
    if (!section) {
      return res.status(404).json({ error: "Last Section not found" });
    }

    const updated = await prisma.lastSection.update({
      where: { id: section.id },
      data,
    });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update Last Section" });
  }
};

// PUT reset default (text/colors only, not image)
exports.resetLastSectionDefaults = async (req, res) => {
  try {
    const section = await prisma.lastSection.findFirst();
    if (!section) {
      return res.status(404).json({ error: "Last Section not found" });
    }

    const updated = await prisma.lastSection.update({
      where: { id: section.id },
      data: {
        h1Text: "Stay Connected With Us",
        h1TextColour: "#000000",
        h3Text: "We're here to help you succeed",
        h3TextColour: "#333333",
        formBgColour: "#FFFFFF",
        formButtonBgColour: "#000000",
        formButtonText: "Submit",
        formButtonTextColour: "#FFFFFF",
        // bgImage stays unchanged
      },
    });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to reset Last Section defaults" });
  }
};

// POST upload image and update bgImage
exports.uploadLastSectionImage = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: "No file provided" });
    }

    const streamUpload = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "last_section",
            resource_type: "image",
          },
          (error, result) => {
            if (result) resolve(result);
            else reject(error);
          }
        );
        streamifier.createReadStream(file.buffer).pipe(stream);
      });
    };

    const result = await streamUpload();

    const section = await prisma.lastSection.findFirst();
    if (!section) {
      return res.status(404).json({ error: "Section not found" });
    }

    const updated = await prisma.lastSection.update({
      where: { id: section.id },
      data: {
        bgImage: result.secure_url,
      },
    });

    res.json({ message: "Image uploaded successfully", url: result.secure_url, updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Image upload failed" });
  }
};
