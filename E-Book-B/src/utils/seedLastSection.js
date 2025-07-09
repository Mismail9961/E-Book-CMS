const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedLastSection() {
  const existing = await prisma.lastSection.findFirst();

  if (!existing) {
    await prisma.lastSection.create({
      data: {
        h1Text: "Stay Connected With Us",
        h1TextColour: "#000000",
        h3Text: "We're here to help you succeed",
        h3TextColour: "#333333",
        formBgColour: "#FFFFFF",
        formButtonBgColour: "#000000",
        formButtonText: "Submit",
        formButtonTextColour: "#FFFFFF",
        bgImage: "", // You can add a default Cloudinary image here
      },
    });

    console.log("✅ LastSection initialized with default values");
  } else {
    console.log("ℹ️ LastSection already exists, skipping seed");
  }

  await prisma.$disconnect();
}

seedLastSection().catch((err) => {
  console.error("Error seeding LastSection:", err);
});
