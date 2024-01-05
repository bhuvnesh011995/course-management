const routes = require("express").Router();
const certificateManager = require("../managers/certificateManager");
const { userAuth } = require("../middlewares/auth.middleware");
const { upload } = require("../utils/upload.utils");

routes.post(
  "/addCertificate",
  [userAuth],
  upload.single("file"),
  certificateManager.addCertificate,
);
routes.get("/getCertificates", [userAuth], certificateManager.getCertificates);
routes.get("/getCertificate", [userAuth], certificateManager.getCertificate);
routes.post(
  "/updateCertificate",
  [userAuth],
  upload.single("file"),
  certificateManager.updateCertificate,
);

routes.delete(
  "/deleteCertificate",
  [userAuth],
  certificateManager.deleteCertificate,
);

routes.get(
  "/getFilteredCertificate/:classId",
  [userAuth],
  certificateManager.getFilteredCertificate,
);

routes.get(
  "/getSelectedCertificates",
  [userAuth],
  certificateManager.getSelectedCertificates,
);

routes.post(
  "/sendLeadCertificateMail",
  [userAuth],
  certificateManager.sendLeadCertificateMail,
);

module.exports = routes;
