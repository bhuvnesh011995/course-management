const LeadModel = require("../models/newLeadModel");

const addNewLead = async ({ query, files, user }) => {
  try {
    console.log(query, files);
  } catch (err) {
    console.error(err);
  }
};

const getAllLeads = async (user) => {
  try {
    console.log(user);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addNewLead,
  getAllLeads,
};
