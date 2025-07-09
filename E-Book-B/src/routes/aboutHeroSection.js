const express = require("express");
const router = express.Router();
const controller = require("../controllers/aboutHeroSectionController");
const upload = require("../middlewares/multer");

router.get("/", controller.getAboutHeroSection);
router.put("/:id", upload.single("image"), controller.updateAboutHeroSection);
router.post("/reset-defaults", controller.resetAboutHeroSectionDefaults);

module.exports = router;
