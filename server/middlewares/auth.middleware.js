const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const userAuth = async (req, res, next) => {
  try {
    const token = req.headers["x-token-header"];
    const { headers } = req;
    if (token) {
      const decode = jwt.decode(token);
      const getUserData = await userModel.aggregate([
        { $match: { email: decode.email } },
        {
          $lookup: {
            from: "roles",
            let: { roleId: "$userRole" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$$roleId", { $toString: "$_id" }],
                  },
                },
              },
            ],
            as: "roleData",
          },
        },
        { $unwind: "$roleData" },
      ]);
      req.user = getUserData;

      next();
    } else {
      return { message: "Need to Login Again " };
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  userAuth,
};
