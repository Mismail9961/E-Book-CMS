📚 E-Book CMS — Admin Editable Website
This is a full-stack CMS web application built with React (Frontend), Node.js + Express (Backend), Prisma (ORM), and Cloudinary (Image Upload). It enables a site owner to visually manage all content—headings, text, colors, slider images, testimonials, buttons, and layout styles—directly from an admin interface.

🚀 Live Sections Editable via Admin
🔧 Features Breakdown
🎨 Admin Panel
All sections support live editing with instant UI feedback.

✅ Slider Image Uploader
Upload or replace images for a horizontally scrolling slider

Supports 10 images per row

Admin can update image individually

Images stored on Cloudinary

✅ Testimonial Header Editor
Update badge text, prefix, and main heading

Fully customizable text and background colors

Initialize or reset default values from the backend

✅ Testimonial Cards Editor
Add unlimited testimonials

Edit quote, name, position, company

Customize colors for all text types (e.g., name, title, quote)

Save updates per testimonial

✅ Work Section Editor
Modify heading (h1, h2), paragraph, and 4 call-to-action buttons

Upload section image to Cloudinary

Customize all colors: text, background, hover, click

Preview buttons with real-time styles

🌐 User Side
Horizontally scrolling image slider (top row LTR, bottom RTL)

Loads images dynamically from /api/slider

Responsive layout for desktop and mobile

Testimonials display dynamically with design consistency

Content reflects admin edits instantly

## 📁 Technologies Used

| Layer       | Technology        |
|-------------|-------------------|
| Frontend    | React, TypeScript |
| Styling     | Tailwind CSS      |
| Backend     | Node.js, Express  |
| ORM         | Prisma            |
| Image Upload| Cloudinary        |
| Database    | PostgreSQL (via Neon or local) |
| Auth (opt)  | Clerk/AuthJS (if added) |

---
Admin Structure :
📁 app/
├── components/
│ ├── SliderImageUploader.tsx # Admin: Slider image upload/replace
│ ├── AdminTestimonialHeaderEditor.tsx # Admin: Header title/badge manager
│ ├── AdminTestimonialEditor.tsx # Admin: Testimonial cards manager
│ ├── AdminWorkSectionEditor.tsx # Admin: Work/services section editor
│ ├── UserImageSlider.tsx # User-facing image slider
│ └── ...
├── pages/
│ ├── index.tsx # Main frontend page
│ └── admin/ # Admin section routing
├── styles/
│ └── globals.css
├── public/
└── ...

Frontend Structure :
📁 app/
├── 📁 components/                      # All reusable & section-specific components
│   ├── AdminTestimonialEditor.tsx         # Admin: Manage testimonial cards
│   ├── AdminTestimonialHeaderEditor.tsx   # Admin: Edit testimonial section heading
│   ├── AdminWorkSectionEditor.tsx         # Admin: Edit work section content
│   ├── UserImageSlider.tsx                # User-facing image slider
│   └── ...
│
├── 📁 pages/                           # Page routing
│   ├── index.tsx                          # Main homepage
│   └── admin/
│       ├── slider.tsx                     # Admin slider page
│       ├── testimonials.tsx               # Admin testimonials page
│       ├── worksection.tsx                # Admin work section page
│       └── ...
│
├── 📁 styles/                         # Global and section styles
│   └── globals.css
│
├── 📁 public/                         # Static assets
│   └── ...
│
├── 📁 utils/                          # Optional: Shared utility functions
│   └── cloudinaryUpload.ts (if client upload used)
│
├── tailwind.config.js                # Tailwind CSS configuration
├── tsconfig.json                     # TypeScript config
└── next.config.js                    # Optional: Proxy backend / Cloudinary domain config

Backend Structure :
📁 backend/
├── 📁 controllers/                     # Route handler logic
│   ├── sliderController.js
│   ├── testimonialController.js
│   ├── testimonialHeaderController.js
│   └── workSectionController.js
│
├── 📁 routes/                          # API route definitions
│   ├── sliderRoutes.js
│   ├── testimonialRoutes.js
│   ├── testimonialHeaderRoutes.js
│   └── workSectionRoutes.js
│
├── 📁 prisma/                          # Prisma schema and migrations
│   ├── schema.prisma
│   └── migrations/
│
├── 📁 uploads/                         # Temporary or local file storage
│   └── (if using diskStorage instead of memoryStorage)
│
├── 📁 utils/                           # Utility modules
│   └── cloudinary.js                      # Cloudinary config and uploader
│
├── server.js or index.js              # Entry point to Express app
├── multer.js                          # Multer middleware (memoryStorage)
├── .env                               # Environment variables
├── package.json
└── README.md (backend specific, optional


Prisma Model:
model HeroSection {
  id                   String   @id @default(uuid())
  h1Text               String
  h1TextColour         String
  h3Text               String
  h3TextColour         String
  pText                String
  pTextColour          String
  buttonText           String
  buttonTextColour     String
  buttonBgColour       String
  formBgColour         String
  formButtonBgColour   String
  formButtonText       String
  formButtonTextColour String
  bgVideo              String
  createdAt            DateTime @default(now())
  updatedAt            DateTime @updatedAt
}

model HeroSection2 {
  id               String   @id @default(uuid())
  h1Text           String?
  h1TextColour     String?
  pointsText       String? // e.g. comma-separated or JSON
  pointsTextColour String?
  pText            String?
  pTextColour      String?
  image            String? // URL
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt
}

model HeroSection3 {
  id               String   @id @default(uuid())
  divBg            String?
  div1Bg           String?
  div2Bg           String?
  h1Text           String?
  h1TextColour     String?
  pText            String?
  pTextColour      String?
  buttonText       String
  buttonTextColour String
  buttonBgColour   String
  image            String?
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt
}

model WorkSection {
  id                   String   @id @default(uuid())
  h2Text               String?
  h2TextColour         String?
  h1Text               String?
  h1TextColour         String?
  pText                String?
  pTextColour          String?
  buttonText           String
  buttonTextColour     String
  buttonBgColour       String?
  buttonColourOnClick  String?
  buttonColourOnHover  String?
  button2Text          String
  button2TextColour    String
  button2BgColour      String?
  button2ColourOnClick String?
  button2ColourOnHover String?
  button3Text          String
  button3TextColour    String
  button3BgColour      String?
  button3ColourOnClick String?
  button3ColourOnHover String?
  button4Text          String
  button4TextColour    String
  button4BgColour      String?
  button4ColourOnClick String?
  button4ColourOnHover String?
  image                String?
  createdAt            DateTime @default(now())
  updatedAt            DateTime @updatedAt
}

model SliderImage1 {
  id        String   @id @default(cuid())
  imageUrl  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model FeatureSectionContent {
  id String @id @default(cuid())

  topText  String?
  topColor String?

  h1Text  String?
  h1Color String?

  subText  String?
  subColor String?

  boldText  String?
  boldColor String?

  bgColor String? // Solid or gradient

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Cards {
  id                String   @id @default(uuid())
  h1Text1           String?
  h1Text1Color      String?
  h1Text2           String?
  h1Text2Color      String?
  cardBgColor       String?
  cardInsideNumber  String?
  cardBodyText      String?
  cardBodyTextColor String?
  cardH2Text        String?
  cardH2TextColor   String?
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
}

model Testimonial {
  id            String   @id @default(uuid())
  subtitle      String?
  subtitleColor String? // color for subtitle text
  title         String?
  titleColor    String? // color for title text
  quote         String?
  quoteColor    String? // quote text color
  position      String?
  positionColor String?
  name          String?
  nameColor     String?
  company       String?
  companyColor  String?
  bgColor       String? // background color of section
  cardColor     String? // color of individual testimonial card
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

model LastSection {
  id           String @id @default(uuid())
  h1Text       String
  h1TextColour String
  h3Text       String
  h3TextColour String

  formBgColour         String
  formButtonBgColour   String
  formButtonText       String
  formButtonTextColour String

  bgImage String

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model AboutUsH1 {
  id    String  @id @default(uuid())
  divBg String?

  h3Text       String?
  h3TextColour String?
  h3cardBg     String?

  h1Text       String?
  h1TextColour String?

  pText       String?
  pTextColour String?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model AboutUsCards {
  id           String  @id @default(uuid())
  sectionBg    String?
  h3Text       String?
  h3TextColour String?
  h1Text       String?
  h1TextColour String?

  card1Title1       String?
  card1Title2       String?
  card1TitleColour1 String?
  card1TitleColour2 String?
  card1Paragraph    String?
  card1TextColour   String?
  card1Bg           String?

  card2Title1       String?
  card2Title2       String?
  card2TitleColour1 String?
  card2TitleColour2 String?
  card2Paragraph    String?
  card2TextColour   String?
  card2Bg           String?

  card3Title1       String?
  card3Title2       String?
  card3TitleColour1 String?
  card3TitleColour2 String?
  card3Paragraph    String?
  card3TextColour   String?
  card3Bg           String?

  button1Text       String?
  button1TextColour String?
  button1BgColour   String?

  button2Text       String?
  button2TextColour String?
  button2BgColour   String?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model AboutHeroSection {
  id               String   @id @default(uuid())
  h1Text           String?
  h1TextColour     String?
  pointsText       String? // e.g. comma-separated or JSON
  pointsTextColour String?
  pText            String?
  pTextColour      String?
  image            String? // URL
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt
}

model TestimonialHeader {
  id                 String   @id @default(uuid())
  
  topBadgeText       String   // e.g., "WE FOCUS ON DRIVING MEASURABLE RESULTS"
  topBadgeTextColor  String?  // e.g., "#FFFFFF"
  topBadgeBgColor    String?  // e.g., "#0033FF"

  h1TextPrefix       String   // e.g., "Client's"
  h1TextPrefixColor  String?  // e.g., "#FFFFFF"

  h1TextMain         String   // e.g., "Testimonials"
  h1TextMainColor    String?  // e.g., "#00E6F6"

  sectionBgColor     String?  // e.g., "#0F0A1E" (background gradient can be generated from this)

  createdAt          DateTime @default(now())
  updatedAt          DateTime @updatedAt
}


model ContactHeaderSection {
  id                  String   @id @default(uuid())
  badgeText           String?
  badgeTextColor      String?
  badgeBgColor        String?
  h1TextPart1         String?
  h1TextPart1Color    String?
  h1TextPart2         String?
  h1TextPart2Color    String?
  paragraphText       String?
  paragraphTextColor  String?
  backgroundColor     String?

  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt
}

.env:
DATABASE_URL=your_postgres_or_mysql_url
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

To run the project : 
npx prisma generate
npx prisma migrate dev --name init

cd backend
nodemon server.js

cd app
npm run dev

✨ Technologies Used
Frontend: React.js, TypeScript, Tailwind CSS

Backend: Express.js, Node.js, Prisma ORM

Database: PostgreSQL / MySQL / SQLite (via Prisma)

File Uploads: Multer + Cloudinary

Image Delivery: Cloudinary CDN

UI/UX: Fully responsive admin and user interface

💡 Future Enhancements
Admin authentication with Clerk or JWT

Add image/video previews before upload

Export-import full site content (JSON)

Pagination for testimonials and sliders

SEO meta tag controls via admin panel

