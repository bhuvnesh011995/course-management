const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    course: { type: String },
    discription: { type: String },
    name: { type: String },
    email: { type: String, unique: true, match: /.+\@.+\..+/ },
    phoneNo: { type: Number },
    userName: { type: String },
    password: { type: String },
    userImagePath: { type: String },
    userRole: { type: String },
    status: { type: String },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
