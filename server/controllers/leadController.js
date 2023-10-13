const leadManager = require("../managers/leadManager");

const addNewLead = (req, res) => {
  leadManager
    .addNewLead(req)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

const getAllLeads = (req, res) => {
  leadManager
    .getAllLeads(req.user)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

module.exports = {
  addNewLead,
  getAllLeads,
};
