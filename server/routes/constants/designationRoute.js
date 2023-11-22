const router = require("express").Router()
const designationManager = require("../../managers/constants/designationManager")

router.post("/",[],designationManager.addDesignation)
router.put("/:id",[],designationManager.updateDesignation)
router.get("/",[],designationManager.getAllDesignation)
router.get("/:id",[],designationManager.getDesignationById)
router.delete("/:id",[],designationManager.deleteDesignation)


module.exports = router