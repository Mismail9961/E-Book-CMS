const express = require('express');
const multer = require('multer');
const path = require('path');

const upload = multer({ dest: path.join(__dirname, '../../public/uploads') });
const router = express.Router();

const controller = require('../controllers/heroSection2Controller');

// Initialize default data
router.post('/init', controller.initHeroSection2);

// Get existing data
router.get('/', controller.getHeroSection2);

// Update data by ID
router.put('/:id', controller.updateHeroSection2);

// Upload image
router.post('/upload-image', upload.single('image'), controller.uploadImage);

router.post('/reset-defaults', controller.resetHeroSection2Defaults);


module.exports = router;
