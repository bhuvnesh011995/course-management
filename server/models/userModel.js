const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    //   userId: { type: String },
    //   name: { type: String },
    //   contactNumber: { type: Number },
    //   userRight: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    name: { type: String },
    email: { type: String, unique: true, match: /.+\@.+\..+/ },
    mobile: { type: Number },
    userName: { type: String },
    password: { type: String },
    userRole: { type: String },
    status: { type: String },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
