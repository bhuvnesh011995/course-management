const leadManager = require("../managers/leadManager");

// const addNewLead = (req, res) => {
//   leadManager
//     .addNewLead(req)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => res.status(500).send(err));
// };

// const getAllLeads = (req, res) => {
//   leadManager
//     .getAllLeads(req.user, req.query)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => res.status(500).send(err));
// };

// const updateLead = (req, res) => {
//   leadManager
//     .updateLead(req)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => res.status(500).send(err));
// };

// const deleteLead = (req, res) => {
//   leadManager
//     .deleteLead(req.query)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => res.status(500).send(err));
// };

// const getLead = (req, res) => {
//   leadManager
//     .getLead(req.query)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => res.status(500).send(err));
// };

// const getPayment = (req, res) => {
//   leadManager
//     .getPayment(req.body)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => res.status(500).send(err));
// };

// const confirmPayment = (req, res) => {
//   leadManager
//     .confirmPayment(req.body)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => res.status(500).send(err));
// };

// const assignCourse = (req, res) => {
//   leadManager
//     .assignCourse(req.body)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => res.status(500).send(err));
// };

// const accountHistory = (req, res) => {
//   leadManager
//     .accountHistory(req.query)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => res.status(500).send(err));
// };

// const getSelectedLead = (req, res) => {
//   leadManager
//     .getSelectedLead(req)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => res.status(500).send(err));
// };

// const getFilteredLeads = (req, res) => {
//   leadManager
//     .getFilteredLeads(req.query)
//     .then((result) => res.status(200).send(result))
//     .catch((err) => res.status(500).send(err));
// };

module.exports = {
  addNewLead,
  getAllLeads,
  updateLead,
  deleteLead,
  getLead,
  getPayment,
  confirmPayment,
  assignCourse,
  accountHistory,
  getSelectedLead,
  getFilteredLeads,
};
