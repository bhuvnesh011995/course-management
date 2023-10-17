const routes = require("express").Router();
const tradeController = require("../controllers/tradeController");

// trade level routes
routes.post("/saveTradeLevel", tradeController.saveTradeLevel);
routes.get("/getTradeLevels", tradeController.getTradeLevels);
routes.post("/updateTradeLevel", tradeController.updateTradeLevel);
routes.delete("/deleteTradeLevel", tradeController.deleteTradeLevel);

// trade type routes

routes.post("/saveTradeType", tradeController.saveTradeType);
routes.get("/getTradeTypes", tradeController.getTradeTypes);
routes.post("/updateTradeType", tradeController.updateTradeType);
routes.delete("/deleteTradeType", tradeController.deleteTradeType);

module.exports = routes;
