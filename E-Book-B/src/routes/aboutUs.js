const express = require("express");
const router = express.Router();
const {
  getAboutUsH1,
  updateAboutUsH1,
  resetAboutUsH1Defaults,
} = require("../controllers/aboutUsH1Controller");

router.get("/", getAboutUsH1);
router.put("/:id", updateAboutUsH1);
router.post("/reset-defaults", resetAboutUsH1Defaults);

module.exports = router;
