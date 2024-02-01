const router = require("express").Router();

router.use("/designations", require("./designationRoute"));
router.use("/emailtemplate", require("./emailTemplateRoute"));
router.use("/duration", require("./durationRoute"));
router.use("/department", require("./departmentRoute"));
router.use("/position", require("./positionRoute"));
router.use("/leave", require("./leaveRoute"));
router.use("/tradeTypeCode", require("./tradeTypeCode.route"));

module.exports = router;
