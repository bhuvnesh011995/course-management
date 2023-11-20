const mongoose = require("mongoose");

const DesignationSchema = new mongoose.Schema({
  designation: { type: String },
});

const DesignationModel = mongoose.model("designations", DesignationSchema);

module.exports = DesignationModel;
