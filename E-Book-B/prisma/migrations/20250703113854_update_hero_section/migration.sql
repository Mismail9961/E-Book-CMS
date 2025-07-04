/*
  Warnings:

  - You are about to drop the `IndustriesSection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TestimonialCard` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TestimonialSection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WorkSection` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TestimonialCard" DROP CONSTRAINT "TestimonialCard_sectionId_fkey";

-- DropTable
DROP TABLE "IndustriesSection";

-- DropTable
DROP TABLE "TestimonialCard";

-- DropTable
DROP TABLE "TestimonialSection";

-- DropTable
DROP TABLE "WorkSection";

-- CreateTable
CREATE TABLE "HeroSection3" (
    "id" TEXT NOT NULL,
    "h1Text" TEXT,
    "h1TextColour" TEXT,
    "pText" TEXT,
    "pTextColour" TEXT,
    "buttonText" TEXT NOT NULL,
    "buttonTextColour" TEXT NOT NULL,
    "buttonBgColour" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HeroSection3_pkey" PRIMARY KEY ("id")
);
