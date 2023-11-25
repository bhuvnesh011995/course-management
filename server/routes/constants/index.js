const router = require("express").Router()


router.use("/designations",require("./designationRoute"))
router.use("/emailtemplate",require('./emailTemplateRoute'))
router.use("/duration",require("./durationRoute"))

module.exports = router