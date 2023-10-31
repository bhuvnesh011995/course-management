const routes = require("express").Router();
const certificateController = require("../controllers/certificateController");
const { userAuth } = require("../middlewares/auth.middleware");
const { upload } = require("../utils/upload.utils");

routes.post(
  "/addCertificate",
  upload.single("file"),
  certificateController.addCertificate
);
routes.get("/getCertificates", userAuth, certificateController.getCertificates);
routes.get("/getCertificate", certificateController.getCertificate);
routes.post(
  "/updateCertificate",
  upload.single("file"),
  certificateController.updateCertificate
);

routes.delete("/deleteCertificate", certificateController.deleteCertificate);

module.exports = routes;
