const express = require('express');
const router = express.Router();
const controller = require('../controllers/heroSection3Controller');

router.get('/', controller.getHeroSection3);
router.put('/:id', controller.updateHeroSection3);
router.post('/init', controller.initHeroSection3);
router.post('/reset-defaults', controller.resetHeroSection3Defaults);

module.exports = router;
