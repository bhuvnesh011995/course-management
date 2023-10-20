const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/images");
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
