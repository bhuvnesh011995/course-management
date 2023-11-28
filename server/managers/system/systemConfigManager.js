const {
  deleteSelectedFile,
} = require("../../commonUsableFunctions/deleteFile");
const db = require("../../models");

exports.updateConfig = async (req, res, next) => {
  try {
    const { body, files } = req;
    const data = JSON.parse(body.systemData);
    const getSystemConfig = await db.config.systemConfig.find({});
    if (files.systemFevicon)
      data.systemFavicon = `images/${files.systemFevicon[0].filename}`;
    else if (getSystemConfig.length) {
      data.systemFavicon = getSystemConfig[0].systemFavicon;
    }

    if (files.systemLogo)
      data.systemLogo = `images/${files.systemLogo[0].filename}`;
    else if (getSystemConfig.length) {
      data.systemLogo = getSystemConfig[0].systemLogo;
    }
    if (getSystemConfig.length) {
      const updateData = await db.config.systemConfig.updateOne(
        { _id: getSystemConfig[0]._id },
        { $set: data }
      );
      const updatedData = await db.config.systemConfig.findOne({
        _id: getSystemConfig[0]._id,
      });
      if (Object.keys(files).length) {
        if (files.systemFevicon)
          if (getSystemConfig[0]?.systemFavicon?.length) {
            deleteSelectedFile(
              getSystemConfig[0]?.systemFavicon.split("/")[
                getSystemConfig[0]?.systemFavicon.split("/").length - 1
              ]
            );
          }
        if (files.systemLogo)
          if (getSystemConfig[0]?.systemLogo?.length) {
            deleteSelectedFile(
              getSystemConfig[0]?.systemLogo.split("/")[
                getSystemConfig[0]?.systemLogo.split("/").length - 1
              ]
            );
          }
      }
      return res
        .status(200)
        .json({ data: updatedData, message: "configurations updated" });
    } else {
      const addData = await db.config.systemConfig.create({ data });
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
    const systemConfig = await db.config.systemConfig.find({});
    res.status(200).json(systemConfig[0]);
  } catch (error) {
    next(error);
  }
};
