const systemConfigManager = require("../managers/system/systemConfigManager")
const otherConfigManager = require("../managers/system/otherConfigManager")
const { upload } = require("../utils/upload.utils")


const router = require('express').Router()


router.put("/system",[upload.fields([{name:"logo",maxCount:1},{name:"fevicon",maxCount:1}])],systemConfigManager.updateConfig)
router.get("/system",systemConfigManager.getSystemConfig)
router.put("/other",[upload.fields([{name:"attendanceLogo",maxCount:1},{name:"leadLogo",maxCount:1}])],otherConfigManager.updateConfig)
router.get("/other",otherConfigManager.getSystemConfig)

module.exports = router