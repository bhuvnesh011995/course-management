const db = require("../../models");

exports.addDepartment = async (req, res, next) => {
  try {
    let department = await db.constants.department.create(req.body);

    res.status(200).json(department);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.getAllDepartment = async (req, res, next) => {
  try {
    let departments = await db.constants.department.find();

    res.status(200).json(departments);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.getDepartmentById = async (req, res, next) => {
  try {
    let department = await db.constants.department.findById(req.params.id);

    res.status(200).json(department);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.updateDepartment = async (req, res, next) => {
  try {
    let department = await db.constants.department.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(department);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.deleteDepartment = async (req, res, next) => {
  try {
    const departmentInUser = await db.user.find({ department: req.params.id });
    if (departmentInUser.length)
      return res
        .status(202)
        .send({ message: "department is provided to user" });
    await db.constants.department.deleteOne({ _id: req.params.id });
    res.status(204).end();
  } catch (error) {
    console.error(error);
    next(error);
  }
};
