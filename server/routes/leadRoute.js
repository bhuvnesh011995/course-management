const routes = require("express").Router();
const leadManager = require("../managers/leadManager");
const { userAuth } = require("../middlewares/auth.middleware");
const { upload } = require("../utils/upload.utils");

routes.post(
  "/addNewLead",
  [userAuth],
  upload.array("files", 10),
  leadManager.addNewLead
);
routes.get("/getAllLeads", [userAuth], leadManager.getAllLeads);
routes.post(
  "/updateLead",
  [userAuth],
  upload.array("files", 10),
  leadManager.updateLead
);
routes.delete("/deleteLead", [userAuth], leadManager.deleteLead);

routes.get("/getLead", [userAuth], leadManager.getLead);

routes.post("/getPayment", [userAuth], leadManager.getPayment);

routes.post("/confirmPayment", [userAuth], leadManager.confirmPayment);

routes.get("/accountHistory", [userAuth], leadManager.accountHistory);

routes.get("/getSelectedLead", [userAuth], leadManager.getSelectedLead);

routes.get("/getFilteredLeads", [userAuth], leadManager.getFilteredLeads);

routes.get("/getAllCompanies", [userAuth], leadManager.getAllCompanies);

routes.get("/getCompany", [userAuth], leadManager.getCompany);
routes.get(
  "/getDashboardCustomers",
  [userAuth],
  leadManager.getDashboardCustomers
);

routes.post(
  "/updateLeadStatus/:leadId/:leadStatus",
  [userAuth],
  leadManager.updateLeadStatus
);

module.exports = routes;
