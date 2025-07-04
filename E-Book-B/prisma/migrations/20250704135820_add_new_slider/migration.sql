/*
  Warnings:

  - You are about to drop the column `bgColor` on the `SliderImage1` table. All the data in the column will be lost.
  - You are about to drop the column `h1Color` on the `SliderImage1` table. All the data in the column will be lost.
  - You are about to drop the column `h1Text` on the `SliderImage1` table. All the data in the column will be lost.
  - You are about to drop the column `h3Color` on the `SliderImage1` table. All the data in the column will be lost.
  - You are about to drop the column `h3Text` on the `SliderImage1` table. All the data in the column will be lost.
  - You are about to drop the column `pColor` on the `SliderImage1` table. All the data in the column will be lost.
  - You are about to drop the column `pText` on the `SliderImage1` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SliderImage1" DROP COLUMN "bgColor",
DROP COLUMN "h1Color",
DROP COLUMN "h1Text",
DROP COLUMN "h3Color",
DROP COLUMN "h3Text",
DROP COLUMN "pColor",
DROP COLUMN "pText";
