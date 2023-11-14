const db = require("../models");

const addTimesheet = async (req, res, next) => {
  try {
    console.log(req.body);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getTimesheets = async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getTimesheet = async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const updateTimesheet = async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const deleteTimesheet = async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = {
  addTimesheet,
  getTimesheets,
  getTimesheet,
  updateTimesheet,
  deleteTimesheet,
};
