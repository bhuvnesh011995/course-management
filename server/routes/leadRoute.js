const routes = require("express").Router();
const leadController = require("../controllers/leadController");
const { userAuth } = require("../middlewares/auth.middleware");
const { upload } = require("../utils/upload.utils");

routes.post(
  "/addNewLead",
  upload.array("files", 10),
  leadController.addNewLead
);
routes.get("/getAllLeads", userAuth, leadController.getAllLeads);

module.exports = routes;
