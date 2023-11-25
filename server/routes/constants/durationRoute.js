const router = require("express").Router()
const durationManager = require("../../managers/constants/durationManager")

router.post("/",[],durationManager.addDuration)
router.put("/:id",[],durationManager.updateDuration)
router.get("/",[],durationManager.getAllDuration)
router.get("/:id",[],durationManager.getDurationById)
router.delete("/:id",[],durationManager.deleteDuration)


module.exports = router