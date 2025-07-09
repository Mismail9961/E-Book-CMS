const express = require('express');
const router = express.Router();
const controller = require('../controllers/testimonialController');

router.get('/testimonials', controller.getTestimonials);
router.post('/testimonials', controller.createTestimonial);
router.put('/testimonials/:id', controller.updateTestimonial);
router.delete('/testimonials/:id', controller.deleteTestimonial);

module.exports = router;
