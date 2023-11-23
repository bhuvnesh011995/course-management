const routes = require("express").Router();
const quotationManager = require("../managers/quotationManager");
const { userAuth } = require("../middlewares/auth.middleware");

routes.post("/addNewQuotation", [userAuth], quotationManager.addNewQuotation);
routes.get("/getQuotations", [userAuth], quotationManager.getQuotations);
routes.get("/getQuotation", [userAuth], quotationManager.getQuotation);
routes.delete("/deleteQuotation", [userAuth], quotationManager.deleteQuotation);
routes.post("/updateQuotation", [userAuth], quotationManager.updateQuotation);

module.exports = routes;
