/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `SliderImage` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `SliderImage` table. All the data in the column will be lost.
  - Added the required column `publicId` to the `SliderImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `SliderImage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SliderImage" DROP CONSTRAINT "SliderImage_sliderId_fkey";

-- AlterTable
ALTER TABLE "SliderImage" DROP COLUMN "imageUrl",
DROP COLUMN "updatedAt",
ADD COLUMN     "publicId" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "SliderImage" ADD CONSTRAINT "SliderImage_sliderId_fkey" FOREIGN KEY ("sliderId") REFERENCES "Slider"("id") ON DELETE CASCADE ON UPDATE CASCADE;
