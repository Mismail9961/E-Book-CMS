const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// GET /api/testimonials?skip=0&limit=2
exports.getTestimonials = async (req, res) => {
  try {
    const skip = parseInt(req.query.skip) || 0;
    const limit = parseInt(req.query.limit) || 2;

    const data = await prisma.testimonial.findMany({
      skip,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(data);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    res.status(500).json({ error: "Failed to fetch testimonials." });
  }
};

exports.createTestimonial = async (req, res) => {
  try {
    const newItem = await prisma.testimonial.create({ data: req.body });
    res.status(201).json(newItem);
  } catch (err) {
    console.error("Create error:", err);
    res.status(500).json({ error: "Failed to create testimonial." });
  }
};

exports.updateTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await prisma.testimonial.update({
      where: { id },
      data: req.body,
    });
    res.json(updated);
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ error: "Failed to update testimonial." });
  }
};

exports.deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.testimonial.delete({ where: { id } });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: "Failed to delete testimonial." });
  }
};

exports.setDefaultTestimonials = async (req, res) => {
  try {
    const existing = await prisma.testimonial.findFirst();
    if (existing) {
      return res
        .status(400)
        .json({ message: "Testimonials already initialized." });
    }

    const defaultTestimonial = await prisma.testimonial.create({
      data: {
        subtitle: "CLIENT STORIES & TESTIMONIALS",
        subtitleColor: "#00E6F6",
        title: "BEST RATED DIGITAL AGENCY",
        titleColor: "#ffffff",
        quote:
          "Digital Silk is not just a company – they’re a team of experts who turn visions into digital realities with unparalleled expertise, enthusiasm, and creativeness.",
        quoteColor: "#ffffff",
        position: "Vice President at National Golf Foundation",
        positionColor: "#ffffff",
        name: "Ted Eleftheriou, PGA",
        nameColor: "#ffffff",
        company: "P&G",
        companyColor: "#BFBFBF",
        bgColor: "#2F0743",
        cardColor: "#3C096C",
      },
    });

    res.status(201).json(defaultTestimonial);
  } catch (err) {
    console.error("Error initializing testimonials:", err);
    res.status(500).json({ error: "Failed to initialize testimonials." });
  }
};
