const router = require("express").Router();
const positionManager = require("../../managers/constants/positionManager");

router.post("/", [], positionManager.addPosition);
router.put("/:id", [], positionManager.updatePosition);
router.get("/", [], positionManager.getAllPosition);
router.get("/:id", [], positionManager.getPositionById);
router.delete("/:id", [], positionManager.deletePosition);

module.exports = router;
