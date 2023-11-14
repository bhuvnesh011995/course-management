const routes = require("express").Router();
const quotationManager = require("../managers/quotationManager");

routes.post("/addNewQuotation", quotationManager.addNewQuotation);
routes.get("/getQuotations", quotationManager.getQuotations);
routes.get("/getQuotation", quotationManager.getQuotation);
routes.delete("/deleteQuotation", quotationManager.deleteQuotation);
routes.post("/updateQuotation", quotationManager.updateQuotation);

module.exports = routes;
