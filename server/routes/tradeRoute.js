const routes = require("express").Router();
const tradeManager = require("../managers/tradeManager");
const { userAuth } = require("../middlewares/auth.middleware");

// trade level routes
routes.post("/saveTradeLevel", [userAuth], tradeManager.saveTradeLevel);
routes.get("/getTradeLevels", [userAuth], tradeManager.getTradeLevels);
routes.post("/updateTradeLevel", [userAuth], tradeManager.updateTradeLevel);
routes.delete("/deleteTradeLevel", [userAuth], tradeManager.deleteTradeLevel);

// trade type routes

routes.post("/saveTradeType", [userAuth], tradeManager.saveTradeType);
routes.get("/getTradeTypes", [userAuth], tradeManager.getTradeTypes);
routes.post("/updateTradeType", [userAuth], tradeManager.updateTradeType);
routes.delete("/deleteTradeType", [userAuth], tradeManager.deleteTradeType);

module.exports = routes;
