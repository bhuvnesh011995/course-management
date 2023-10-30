const certificateManager = require("../managers/certificateManager");

const addCertificate = (req, res) => {
  classManager
    .addCertificate(req.body)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

const getCertificates = (req, res) => {
  classManager
    .getCertificates(req.query, req.user)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

const getCertificate = (req, res) => {
  classManager
    .getCertificate(req.query)
    .then((result) => res.status(200).send(result))
    .catch((err) => response.status(500).send(err));
};

const updateCertificate = (req, res) => {
  classManager
    .updateCertificate(req.body)
    .then((result) => res.status(200).send(result))
    .catch((err) => response.status(500).send(err));
};

const deleteCertificate = (req, res) => {
  classManager
    .deleteCertificate(req.query)
    .then((result) => res.status(200).send(result))
    .catch((err) => response.status(500).send(err));
};

module.exports = {
  addCertificate,
  getCertificates,
  getCertificate,
  updateCertificate,
  deleteCertificate,
};
