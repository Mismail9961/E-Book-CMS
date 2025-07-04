const express = require('express');
const router = express.Router();
const controller = require('../controllers/sliderController');
const upload = require('../middlewares/upload');

router.get('/', controller.getAllImages);
router.post('/init', upload.array('images', 10), controller.initSlider);
router.put('/:id', upload.single('image'), controller.updateImage);
router.post('/set-defaults', controller.setDefaultSliderContent); // ✅ This one

module.exports = router;
