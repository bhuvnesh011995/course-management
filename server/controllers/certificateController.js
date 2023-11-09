const certificateManager = require("../managers/certificateManager");

// const addCertificate = (req, res) => {
//   certificateManager
//     .addCertificate(req)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => res.status(500).send(err));
// };

// const getCertificates = (req, res) => {
//   certificateManager
//     .getCertificates(req.query, req.user)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => res.status(500).send(err));
// };

// const getCertificate = (req, res) => {
//   certificateManager
//     .getCertificate(req.query)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => response.status(500).send(err));
// };

// const updateCertificate = (req, res) => {
//   certificateManager
//     .updateCertificate(req)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => response.status(500).send(err));
// };

// const deleteCertificate = (req, res) => {
//   certificateManager
//     .deleteCertificate(req.query)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => response.status(500).send(err));
// };

module.exports = {
  addCertificate,
  getCertificates,
  getCertificate,
  updateCertificate,
  deleteCertificate,
};
