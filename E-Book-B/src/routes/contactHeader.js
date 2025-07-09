const express = require("express");
const router = express.Router();
const controller = require("../controllers/contactHeaderController");

router.get("/", controller.getContactHeader);
router.put("/", controller.updateContactHeader);
router.post("/initialize", controller.initializeDefaults);
router.post("/reset-defaults", controller.resetDefaults);

module.exports = router;
