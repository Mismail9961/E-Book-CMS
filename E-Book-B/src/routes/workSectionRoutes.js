// src/routes/workSectionRoutes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/workSectionController');
const upload = require('../middlewares/upload');

router.get('/', controller.getWorkSection);
router.put('/:id', controller.updateWorkSection);
router.post('/init', controller.initWorkSection);
router.post('/reset-defaults', controller.resetWorkSectionDefaults);
router.post('/upload-image', upload.single('image'), controller.uploadImage); // ⬅️ Upload route

module.exports = router;
