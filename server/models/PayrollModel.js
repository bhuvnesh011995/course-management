const mongoose = require("mongoose");

const payrollSchema = new mongoose.Schema(
  {
    allowances: { type: String },
    deductions: { type: String },
    employee: { type: mongoose.Schema.Types.ObjectId },
    netSalary: { type: Number },
    salary: { type: Number },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const PayrollModel = mongoose.model("payrolls", payrollSchema);

module.exports = PayrollModel;
