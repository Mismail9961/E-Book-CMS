const express = require('express');
const cors = require('cors');
const path = require('path');

const heroRoutes = require('./routes/heroSectionRoutes');
const hero2Routes = require('./routes/heroSection2Routes');
const heroSection3Routes = require('./routes/heroSection3Routes');
const workSectionRoutes = require('./routes/workSectionRoutes');
const sliderRoutes = require('./routes/sliderRoutes');
const featureRoutes = require('./routes/featureSectionRoutes');
const cardsRoutes = require('./routes/cardsRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const lastSectionRoutes = require("./routes/lastSectionRoutes");
const aboutus = require("./routes/aboutUs")
const aboutUsCardsRoutes = require("./routes/aboutUsCardsroutes");
const aboutHeroSectionRoutes = require("./routes/aboutHeroSection");
const testimonialHeaderRoutes = require("./routes/testimonialHeader");
const contactHeaderRoutes = require("./routes/contactHeader");



const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));

// Mount routes
app.use('/api/herosection', heroRoutes);
app.use('/api/herosection2', hero2Routes);
app.use('/api/herosection3', heroSection3Routes);
app.use('/api/worksection', workSectionRoutes);
app.use('/api/slider', sliderRoutes);
app.use('/api/feature-section', featureRoutes);
app.use('/api', cardsRoutes);
app.use('/api', testimonialRoutes);
app.use("/api/lastsection", lastSectionRoutes);
app.use("/api/aboutus",aboutus)
app.use("/api/about-us-cards", aboutUsCardsRoutes);
app.use("/api/about-hero-section", aboutHeroSectionRoutes);
app.use("/api/testimonial-header", testimonialHeaderRoutes);
app.use("/api/contact-header", contactHeaderRoutes);




app.use((err, req, res, next) => {
    console.error("🔥 GLOBAL ERROR:", err);
    res.status(500).json({ error: "Internal Server Error", details: err.message });
});




module.exports = app;
