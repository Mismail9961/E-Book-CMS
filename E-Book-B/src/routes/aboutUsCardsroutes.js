const express = require("express");
const router = express.Router();
const controller = require("../controllers/aboutUsCardsController");

router.get("/", controller.getAboutUsCards);
router.put("/:id", controller.updateAboutUsCards);
router.post("/reset-defaults", controller.resetAboutUsCardsDefaults);

module.exports = router;
