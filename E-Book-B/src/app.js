const express = require('express');
const cors = require('cors');
const path = require('path');

const heroRoutes = require('./routes/heroSectionRoutes');
const hero2Routes = require('./routes/heroSection2Routes');
const heroSection3Routes = require('./routes/heroSection3Routes');
const workSectionRoutes = require('./routes/workSectionRoutes');
const sliderRoutes = require('./routes/sliderRoutes');
const featureRoutes = require('./routes/featureSectionRoutes');



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
app.use((err, req, res, next) => {
    console.error("🔥 GLOBAL ERROR:", err);
    res.status(500).json({ error: "Internal Server Error", details: err.message });
});




module.exports = app;
