const { Schema, model } = require("mongoose");

let schema = new Schema(
  {
    name: String,
    value: String,
  },
  {
    collection: "duration",
  },
);

module.exports = model("duration", schema);
