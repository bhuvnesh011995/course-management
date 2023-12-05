const db = require("../../models");

exports.addPosition = async (req, res, next) => {
  try {
    let position = await db.constants.position.create(req.body);

    res.status(200).json(position);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.getAllPosition = async (req, res, next) => {
  try {
    let positions = await db.constants.position.find();

    res.status(200).json(positions);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.getPositionById = async (req, res, next) => {
  try {
    let position = await db.constants.position.findById(req.params.id);

    res.status(200).json(position);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.updatePosition = async (req, res, next) => {
  try {
    let position = await db.constants.position.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(position);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.deletePosition = async (req, res, next) => {
  try {
    const positionInUser = await db.user.find({ position: req.params.id });
    if (positionInUser.length)
      return res.status(202).send({ message: "position is provided to user" });
    await db.constants.position.deleteOne({ _id: req.params.id });
    res.status(204).end();
  } catch (error) {
    console.error(error);
    next(error);
  }
};
