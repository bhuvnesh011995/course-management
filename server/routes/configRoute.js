const systemConfigManager = require("../managers/system/systemConfigManager");
const otherConfigManager = require("../managers/system/otherConfigManager");
const { upload } = require("../utils/upload.utils");

const router = require("express").Router();

router.post(
  "/system",
  upload.fields([
    { name: "systemFevicon", maxCount: 1 },
    { name: "systemLogo", maxCount: 1 },
  ]),
  systemConfigManager.updateConfig
);
router.get("/system", systemConfigManager.getSystemConfig);
router.post(
  "/other",
  upload.fields([
    { name: "loginLogoImg", maxCount: 1 },
    { name: "attendanceLogoImg", maxCount: 1 },
    { name: "paymentPdfLogoImg", maxCount: 1 },
  ]),
  otherConfigManager.updateConfig
);
router.get("/other", otherConfigManager.getSystemConfig);

module.exports = router;
