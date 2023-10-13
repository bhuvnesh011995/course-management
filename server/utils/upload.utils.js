const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    cb(null, "uploads/images");
  },
  filename: (req, file, cb) => {
    const uniqueName = `TongaImage${Date.now() + file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
});

module.exports = { upload };
