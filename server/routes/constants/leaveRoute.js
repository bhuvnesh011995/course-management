const router = require("express").Router();
const leaveManager = require("../../managers/constants/leaveManager");

router.post("/", [], leaveManager.addLeave);
router.put("/:id", [], leaveManager.updateLeave);
router.get("/", [], leaveManager.getAllLeave);
router.get("/:id", [], leaveManager.getLeaveById);
router.delete("/:id", [], leaveManager.deleteLeave);

module.exports = router;
