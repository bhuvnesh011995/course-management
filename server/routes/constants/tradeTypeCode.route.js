const tradeTypeCodeManager = require("../../managers/constants/tradeTypeCodeManager");
const router = require("express").Router();

router.post("/", [], tradeTypeCodeManager.addTradeTypeCode);
router.put("/:id", [], tradeTypeCodeManager.updateTradeTypeCode);
router.get("/", [], tradeTypeCodeManager.getAllTradeTypeCode);
router.get("/:id", [], tradeTypeCodeManager.getTradeTypeCodeById);
router.delete("/:id", [], tradeTypeCodeManager.deleteTradeTypeCode);

module.exports = router;
