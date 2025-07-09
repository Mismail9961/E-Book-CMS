const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");

const {
  getLastSection,
  updateLastSection,
  resetLastSectionDefaults,
  uploadLastSectionImage,
} = require("../controllers/lastSectionController");

router.get("/", getLastSection);
router.put("/", updateLastSection);
router.put("/reset-defaults", resetLastSectionDefaults);
router.post("/upload-image", upload.single("image"), uploadLastSectionImage);

module.exports = router;
