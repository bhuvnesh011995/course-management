const db = require("../../models");

exports.addLeave = async (req, res, next) => {
  try {
    let leave = await db.constants.leave.create(req.body);

    res.status(200).json(leave);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.getAllLeave = async (req, res, next) => {
  try {
    let leaves = await db.constants.leave.find();

    res.status(200).json(leaves);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.getLeaveById = async (req, res, next) => {
  try {
    let leave = await db.constants.leave.findById(req.params.id);

    res.status(200).json(leave);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.updateLeave = async (req, res, next) => {
  try {
    let leave = await db.constants.leave.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(leave);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.deleteLeave = async (req, res, next) => {
  try {
    const leaveInUser = await db.leaves.find({ leavetype: req.params.id });
    if (leaveInUser.length)
      return res.status(202).send({ message: "leave is provided to user" });
    await db.constants.leave.deleteOne({ _id: req.params.id });
    res.status(204).end();
  } catch (error) {
    console.error(error);
    next(error);
  }
};
