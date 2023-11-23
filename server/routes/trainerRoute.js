const routes = require("express").Router();
const trainerManager = require("../managers/trainerManager");
const { userAuth } = require("../middlewares/auth.middleware");
const { upload } = require("../utils/upload.utils");

routes.post(
  "/addNewTrainer",
  [userAuth],
  upload.single("file"),
  trainerManager.addNewTrainer
);
routes.get("/getTrainers", [userAuth], trainerManager.getTrainers);
routes.post(
  "/updateTrainer",
  [userAuth],
  upload.single("file"),
  trainerManager.updateTrainer
);

routes.get("/getTrainer", [userAuth], trainerManager.getTrainer);

routes.delete("/deleteTrainer", [userAuth], trainerManager.deleteTrainer);

routes.get(
  "/trainerClassDetails",
  [userAuth],
  trainerManager.trainerClassDetails
);

routes.get(
  "/getDashboardTrainers",
  [userAuth],
  trainerManager.getDashboardTrainers
);

module.exports = routes;
