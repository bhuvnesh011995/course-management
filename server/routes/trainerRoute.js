const routes = require("express").Router();
const trainerController = require("../controllers/trainerController");
const { upload } = require("../utils/upload.utils");

routes.post(
  "/addNewTrainer",
  upload.single("file"),
  trainerController.addNewTrainer
);
routes.get("/getTrainers", trainerController.getTrainers);
routes.post(
  "/updateTrainer",
  upload.single("file"),
  trainerController.updateTrainer
);

routes.get("/getTrainer", trainerController.getTrainer);

routes.delete("/deleteTrainer", trainerController.deleteTrainer);

routes.get("/trainerClassDetails", trainerController.trainerClassDetails);

module.exports = routes;
