const routes = require("express").Router();
const tradeManager = require("../managers/tradeManager");

// trade level routes
routes.post("/saveTradeLevel", tradeManager.saveTradeLevel);
routes.get("/getTradeLevels", tradeManager.getTradeLevels);
routes.post("/updateTradeLevel", tradeManager.updateTradeLevel);
routes.delete("/deleteTradeLevel", tradeManager.deleteTradeLevel);

// trade type routes

routes.post("/saveTradeType", tradeManager.saveTradeType);
routes.get("/getTradeTypes", tradeManager.getTradeTypes);
routes.post("/updateTradeType", tradeManager.updateTradeType);
routes.delete("/deleteTradeType", tradeManager.deleteTradeType);

module.exports = routes;
