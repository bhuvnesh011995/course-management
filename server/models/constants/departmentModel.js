const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: String,
  },
  {
    collection: "department",
  }
);

module.exports = model("department", schema);
