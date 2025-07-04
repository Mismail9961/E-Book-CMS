-- CreateTable
CREATE TABLE "FeatureSectionContent" (
    "id" TEXT NOT NULL,
    "topText" TEXT,
    "topColor" TEXT,
    "h1Text" TEXT,
    "h1Color" TEXT,
    "subText" TEXT,
    "subColor" TEXT,
    "boldText" TEXT,
    "boldColor" TEXT,
    "bgColor" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeatureSectionContent_pkey" PRIMARY KEY ("id")
);
