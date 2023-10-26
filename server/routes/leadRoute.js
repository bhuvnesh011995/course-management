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
routes.post(
  "/updateLead",
  upload.array("files", 10),
  leadController.updateLead
);
routes.delete("/deleteLead", leadController.deleteLead);

routes.get("/getLead", leadController.getLead);

routes.post("/getPayment", leadController.getPayment);

routes.post("/confirmPayment", leadController.confirmPayment);

routes.post("/assignCourse", leadController.assignCourse);

routes.get("/accountHistory", leadController.accountHistory);

routes.get("/getSelectedLead", userAuth, leadController.getSelectedLead);

module.exports = routes;
