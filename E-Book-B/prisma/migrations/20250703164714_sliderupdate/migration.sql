/*
  Warnings:

  - You are about to drop the `InfiniteSliderImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "InfiniteSliderImage";

-- CreateTable
CREATE TABLE "SliderImage1" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SliderImage1_pkey" PRIMARY KEY ("id")
);
