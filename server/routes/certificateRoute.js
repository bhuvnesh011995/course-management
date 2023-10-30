const routes = require("express").Router();
const certificateController = require("../controllers/certificateController");
const { userAuth } = require("../middlewares/auth.middleware");

routes.post("/addCertificate", certificateController.addCertificate);
routes.get("/getCertificates", userAuth, certificateController.getCertificates);
routes.get("/getCertificate", certificateController.getCertificate);
routes.post("/updateCertificate", certificateController.updateCertificate);

routes.delete("/deleteCertificate", certificateController.deleteCertificate);

module.exports = routes;
