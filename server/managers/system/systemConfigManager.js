const db = require("../../models");

exports.updateConfig = async (req, res, next) => {
  try {
    const { body, files } = req;
    const data = JSON.parse(body.systemData);
    const getSystemConfig = await db.config.systemConfig.find({});
    console.log(files);
    if (!!data.systemFavicon["0"]) {
      if (files.systemFevicon)
        data.systemFavicon = `images/${files.systemFevicon[0].filename}`;
      else data.systemFavicon = `images/${files.systemLogo[0].filename}`;
    } else if (getSystemConfig.length) {
      data.systemFavicon = getSystemConfig[0].systemFavicon;
    }

    if (!!data.systemLogo["0"]) {
      if (files.systemLogo)
        data.systemLogo = `images/${files.systemLogo[0].filename}`;
      else data.systemLogo = `images/${files.systemFevicon[0].filename}`;
    } else if (getSystemConfig.length) {
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
