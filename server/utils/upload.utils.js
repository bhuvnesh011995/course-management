const multer = require("multer");
const fs = require("fs");

const uploadDir = "uploads/images/";

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `TongaImage${
      Date.now() + Math.round(Math.random() * 1e9) + file.originalname
    }`;
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
});

module.exports = { upload };
