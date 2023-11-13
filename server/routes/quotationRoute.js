const routes = require("express").Router();
const quotationManager = require("../managers/quotationManager");

routes.post("/addNewQuotation", quotationManager.addNewQuotation);
routes.get("/getQuotations", quotationManager.getQuotations);
// routes.post("/editQuotation", quotationManager.editQuotation);
// routes.delete("/deleteQuotation", quotationManager.deleteQuotation);

module.exports = routes;
