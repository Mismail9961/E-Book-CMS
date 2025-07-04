-- CreateTable
CREATE TABLE "HeroSection" (
    "id" TEXT NOT NULL,
    "h1Text" TEXT NOT NULL,
    "h1TextColour" TEXT NOT NULL,
    "h3Text" TEXT NOT NULL,
    "h3TextColour" TEXT NOT NULL,
    "pText" TEXT NOT NULL,
    "pTextColour" TEXT NOT NULL,
    "buttonText" TEXT NOT NULL,
    "buttonTextColour" TEXT NOT NULL,
    "buttonBgColour" TEXT NOT NULL,
    "formBgColour" TEXT NOT NULL,
    "formButtonBgColour" TEXT NOT NULL,
    "formButtonText" TEXT NOT NULL,
    "formButtonTextColour" TEXT NOT NULL,
    "bgVideo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HeroSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HeroSection2" (
    "id" TEXT NOT NULL,
    "h1Text" TEXT,
    "h1TextColour" TEXT,
    "pointsText" TEXT,
    "pointsTextColour" TEXT,
    "pText" TEXT,
    "pTextColour" TEXT,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HeroSection2_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkSection" (
    "id" TEXT NOT NULL,
    "h2Text" TEXT,
    "h2TextColor" TEXT,
    "h1Text" TEXT,
    "h1TextColor" TEXT,
    "pText" TEXT,
    "pTextColor" TEXT,
    "buttonText" TEXT,
    "buttonBgColor" TEXT,
    "buttonTextColor" TEXT,
    "image1" TEXT,
    "image2" TEXT,
    "bgColor" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IndustriesSection" (
    "id" TEXT NOT NULL,
    "h2Text" TEXT,
    "h2TextColor" TEXT,
    "h1Text" TEXT,
    "h1TextColor" TEXT,
    "pText1" TEXT,
    "pText1Color" TEXT,
    "pText2" TEXT,
    "pText2Color" TEXT,
    "bgColor" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IndustriesSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Slider" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Slider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SliderImage" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "sliderId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SliderImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DoubleSlider" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DoubleSlider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DoubleSliderImage" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "sliderId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DoubleSliderImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestimonialSection" (
    "id" TEXT NOT NULL,
    "h2Text" TEXT,
    "h2TextColor" TEXT,
    "h1Text" TEXT,
    "h1TextColor" TEXT,
    "bgColor" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TestimonialSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestimonialCard" (
    "id" TEXT NOT NULL,
    "text" TEXT,
    "bgColor" TEXT,
    "sectionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TestimonialCard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SliderImage" ADD CONSTRAINT "SliderImage_sliderId_fkey" FOREIGN KEY ("sliderId") REFERENCES "Slider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoubleSliderImage" ADD CONSTRAINT "DoubleSliderImage_sliderId_fkey" FOREIGN KEY ("sliderId") REFERENCES "DoubleSlider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestimonialCard" ADD CONSTRAINT "TestimonialCard_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "TestimonialSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
