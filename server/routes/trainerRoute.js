const routes = require("express").Router();
const trainerManager = require("../managers/trainerManager");
const { upload } = require("../utils/upload.utils");

routes.post(
  "/addNewTrainer",
  upload.single("file"),
  trainerManager.addNewTrainer
);
routes.get("/getTrainers", trainerManager.getTrainers);
routes.post(
  "/updateTrainer",
  upload.single("file"),
  trainerManager.updateTrainer
);

routes.get("/getTrainer", trainerManager.getTrainer);

routes.delete("/deleteTrainer", trainerManager.deleteTrainer);

routes.get("/trainerClassDetails", trainerManager.trainerClassDetails);

routes.get("/getDashboardTrainers", trainerManager.getDashboardTrainers);

module.exports = routes;
