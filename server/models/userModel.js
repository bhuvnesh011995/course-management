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
    userRole: { type: mongoose.Schema.Types.ObjectId },
    status: { type: String },
    department: { type: mongoose.Schema.Types.ObjectId },
    joinDate: { type: Date },
    position: { type: mongoose.Schema.Types.ObjectId },
    salary: { type: Number },

    gender: { type: String },
    address: { type: String },
    leadPaymentTemplate: { type: mongoose.Schema.Types.ObjectId },
    leadConfirmedTemplate: { type: mongoose.Schema.Types.ObjectId },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
