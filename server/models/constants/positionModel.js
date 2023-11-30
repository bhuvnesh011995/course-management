const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: String,
  },
  {
    collection: "position",
  }
);

module.exports = model("position", schema);
