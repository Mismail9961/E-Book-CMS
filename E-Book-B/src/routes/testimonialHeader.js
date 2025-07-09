const express = require("express");
const router = express.Router();
const controller = require("../controllers/testimonialHeaderController");

// GET header
router.get("/", controller.getHeader);

// PUT update header
router.put("/", controller.updateHeader);

// POST initialize default if not exists
router.post("/initialize", controller.initializeDefaults);

// POST reset to default
router.post("/reset-defaults", controller.resetToDefaults);

module.exports = router;
