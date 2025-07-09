const { PrismaClient } = require("@prisma/client");
const { Readable } = require("stream");
const prisma = new PrismaClient();
const cloudinary = require("../utils/cloudinary");

exports.getAboutHeroSection = async (req, res) => {
  try {
    const section = await prisma.aboutHeroSection.findFirst();
    res.json(section);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: "Failed to fetch About Hero Section" });
  }
};


const bufferToStream = (buffer) => {
  const readable = new Readable();
  readable.push(buffer);
  readable.push(null);
  return readable;
};

exports.updateAboutHeroSection = async (req, res) => {
  const { id } = req.params;
  try {
    const existing = await prisma.aboutHeroSection.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ error: "Not found" });

    let imageUrl = existing.image;

    if (req.file) {
      const streamUpload = () => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "about_hero_section" },
            (error, result) => {
              if (result) resolve(result);
              else reject(error);
            }
          );
          bufferToStream(req.file.buffer).pipe(stream);
        });
      };

      try {
        const result = await streamUpload();
        imageUrl = result.secure_url;
      } catch (err) {
        console.error("Cloudinary upload error:", err);
        return res.status(500).json({ error: "Cloudinary upload failed" });
      }
    }

    const updated = await prisma.aboutHeroSection.update({
      where: { id },
      data: {
        h1Text: req.body.h1Text,
        h1TextColour: req.body.h1TextColour,
        pointsText: req.body.pointsText,
        pointsTextColour: req.body.pointsTextColour,
        pText: req.body.pText,
        pTextColour: req.body.pTextColour,
        image: imageUrl,
      },
    });

    return res.json(updated);
  } catch (err) {
    console.error("Update error:", err);
    return res.status(500).json({ error: "Update failed" });
  }
};


exports.resetAboutHeroSectionDefaults = async (req, res) => {
  try {
    const existing = await prisma.aboutHeroSection.findFirst();
    if (existing) {
      await prisma.aboutHeroSection.delete({ where: { id: existing.id } });
    }

    const section = await prisma.aboutHeroSection.create({
      data: {
        h1Text: "Who We Are",
        h1TextColour: "#111111",
        pointsText: "Innovative, Passionate, Global",
        pointsTextColour: "#555555",
        pText: "We are a creative agency with a global mindset...",
        pTextColour: "#777777",
        image: "https://res.cloudinary.com/demo/image/upload/v1700000000/sample.jpg", // default image
      },
    });

    res.status(201).json(section);
  } catch (error) {
    console.error("Reset error:", error);
    res.status(500).json({ error: "Failed to reset About Hero Section" });
  }
};
