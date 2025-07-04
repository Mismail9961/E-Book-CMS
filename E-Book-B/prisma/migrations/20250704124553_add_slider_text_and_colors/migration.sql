/*
  Warnings:

  - You are about to drop the `Slider` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SliderImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SliderImage" DROP CONSTRAINT "SliderImage_sliderId_fkey";

-- AlterTable
ALTER TABLE "SliderImage1" ADD COLUMN     "bgColor" TEXT,
ADD COLUMN     "h1Color" TEXT,
ADD COLUMN     "h1Text" TEXT,
ADD COLUMN     "h3Color" TEXT,
ADD COLUMN     "h3Text" TEXT,
ADD COLUMN     "pColor" TEXT,
ADD COLUMN     "pText" TEXT;

-- DropTable
DROP TABLE "Slider";

-- DropTable
DROP TABLE "SliderImage";
