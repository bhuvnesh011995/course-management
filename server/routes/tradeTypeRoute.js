const tradeTypeManager = require("../managers/tradeTypeManager")
const router = require("express").Router()

router.put("/:id",[],tradeTypeManager.updateTradeType)
router.get("/",tradeTypeManager.getallTradeType)
module.exports = router