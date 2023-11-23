const router = require("express").Router()


router.use("/designations",require("./designationRoute"))
router.use("/emailtemplate",require('./emailTemplateRoute'))


module.exports = router