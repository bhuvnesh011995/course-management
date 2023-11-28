const db = require("../../models");

exports.updateConfig = async (req, res, next) => {
  try {
    const { files } = req;
    const obj = {};
    if (files.attendanceLogoImg) {
      obj["attendanceLogo"] = `images/${files.attendanceLogoImg[0].filename}`;
    }
    if (files.paymentPdfLogoImg) {
      obj["paymentPdfLogo"] = `images/${files.paymentPdfLogoImg[0].filename}`;
    }
    if (files.loginLogoImg) {
      obj["loginLogo"] = `images/${files.loginLogoImg[0].filename}`;
    }
    const getOtherConfiguration = await db.config.otherConfig.find({});

    if (Object.keys(obj).length)
      if (getOtherConfiguration.length) {
        const updateData = await db.config.otherConfig.updateOne(
          { _id: getOtherConfiguration[0]._id },
          { $set: obj }
        );
        const updatedData = await db.config.otherConfig.findOne({
          _id: getOtherConfiguration[0]._id,
        });

        return res
          .status(200)
          .json({ data: updatedData, message: "configurations updated" });
      } else {
        const addData = await db.config.otherConfig.create(obj);
        return res
          .status(200)
          .json({ data: addData, message: "configurations updated" });
      }
  } catch (error) {
    next(error);
  }
};

exports.getSystemConfig = async (req, res, next) => {
  try {
    const systemConfig = await db.config.otherConfig.find({});
    res.status(200).json(systemConfig[0]);
  } catch (error) {
    next(error);
  }
};
