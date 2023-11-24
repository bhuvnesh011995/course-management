const emailtemplateManager = require("../../managers/constants/emailtemplateManager")
const router = require("express").Router()



router.post("/",[],emailtemplateManager.addEmailtemplate)
router.put("/:id",[],emailtemplateManager.updateEmailtemplate)
router.get("/",[],emailtemplateManager.getAllEmailtemplate)
router.get("/:id",[],emailtemplateManager.getEmailtemplateById)
router.delete("/:id",[],emailtemplateManager.deleteEmailtemplate)


module.exports = router