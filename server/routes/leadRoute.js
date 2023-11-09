const routes = require("express").Router();
const leadManager = require("../managers/leadManager");
const { userAuth } = require("../middlewares/auth.middleware");
const { upload } = require("../utils/upload.utils");

routes.post("/addNewLead", upload.array("files", 10), leadManager.addNewLead);
routes.get("/getAllLeads", userAuth, leadManager.getAllLeads);
routes.post("/updateLead", upload.array("files", 10), leadManager.updateLead);
routes.delete("/deleteLead", leadManager.deleteLead);

routes.get("/getLead", leadManager.getLead);

routes.post("/getPayment", leadManager.getPayment);

routes.post("/confirmPayment", leadManager.confirmPayment);

routes.post("/assignCourse", leadManager.assignCourse);

routes.get("/accountHistory", leadManager.accountHistory);

routes.get("/getSelectedLead", userAuth, leadManager.getSelectedLead);

routes.get("/getFilteredLeads", leadManager.getFilteredLeads);

module.exports = routes;
