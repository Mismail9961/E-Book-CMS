const express = require('express');
const multer = require('multer');
const upload = multer(); // Memory storage
const router = express.Router();
const heroSectionController = require('../controllers/heroSectionController'); // ✅ This line is required

// ✅ Always define static paths before dynamic ones
router.get('/defaults', heroSectionController.getHeroDefaults); // <--- move this ABOVE /:id
router.get('/', heroSectionController.getHeroSection);
router.put('/:id', heroSectionController.updateHeroSection);
router.post('/init', heroSectionController.initHeroSection);
router.post('/upload-video', upload.single('video'), heroSectionController.uploadVideo);

module.exports = router;
