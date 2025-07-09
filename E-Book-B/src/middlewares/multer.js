const multer = require("multer");
const storage = multer.memoryStorage(); // or diskStorage if you're using local
const upload = multer({ storage });

module.exports = upload; 
