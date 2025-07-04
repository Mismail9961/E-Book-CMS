const express = require('express');
const router = express.Router();
const controller = require('../controllers/featureSectionController');

router.get('/', controller.getFeatureContent);
router.put('/', controller.updateFeatureContent);
router.post('/init', controller.initFeatureContent);
router.post('/reset-defaults', controller.resetFeatureDefaults);

module.exports = router;
