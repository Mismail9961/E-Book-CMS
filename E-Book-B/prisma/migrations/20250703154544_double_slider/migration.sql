/*
  Warnings:

  - You are about to drop the `DoubleSlider` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DoubleSliderImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DoubleSliderImage" DROP CONSTRAINT "DoubleSliderImage_sliderId_fkey";

-- DropTable
DROP TABLE "DoubleSlider";

-- DropTable
DROP TABLE "DoubleSliderImage";

-- CreateTable
CREATE TABLE "InfiniteSliderImage" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InfiniteSliderImage_pkey" PRIMARY KEY ("id")
);
