const routes = require("express").Router();
const trainerController = require("../controllers/trainerController");
const { upload } = require("../utils/upload.utils");

routes.post(
  "/addNewTrainer",
  upload.single("file"),
  trainerController.addNewTrainer
);
routes.get("/getTrainers", trainerController.getTrainers);

module.exports = routes;
