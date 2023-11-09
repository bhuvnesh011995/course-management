const routes = require("express").Router();
const certificateManager = require("../managers/certificateManager");
const { userAuth } = require("../middlewares/auth.middleware");
const { upload } = require("../utils/upload.utils");

routes.post(
  "/addCertificate",
  upload.single("file"),
  certificateManager.addCertificate
);
routes.get("/getCertificates", userAuth, certificateManager.getCertificates);
routes.get("/getCertificate", certificateManager.getCertificate);
routes.post(
  "/updateCertificate",
  upload.single("file"),
  certificateManager.updateCertificate
);

routes.delete("/deleteCertificate", certificateManager.deleteCertificate);

module.exports = routes;
