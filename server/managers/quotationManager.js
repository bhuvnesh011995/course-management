const db = require("../models");

const addNewQuotation = async (req, res, next) => {
  try {
    const newQuotation = await db.quotations.create(req.body);
    return res.status(200).send(newQuotation);
  } catch (err) {
    console.error(err);
  }
};

const getQuotations = async (req, res, next) => {
  try {
    const allQuoatations = await db.quotations.aggregate([
      {
        $lookup: {
          from: "leads",
          localField: "leadId",
          foreignField: "_id",
          as: "leadDetails",
        },
      },
      { $unwind: "$leadDetails" },
      {
        $addFields: {
          leadStatus: {
            $cond: {
              if: {
                $and: [
                  { $eq: ["$confirmed", true] },
                  { $eq: ["$courseAssigned", true] },
                  { $eq: ["$getPayment", true] },
                ],
              },
              then: true,
              else: false,
            },
          },
        },
      },
      {
        $project: {
          _id: 1,
          contactPerson: "$leadDetails.contactPerson",
          contactPersonEmail: "$leadDetails.contactPersonEmail",
          contactPersonMobile: "$leadDetails.contactPersonMobile",
          created_at: 1,
          status: "$leadStatus",
        },
      },
    ]);
    return res.status(200).send(allQuoatations);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addNewQuotation,
  getQuotations,
};
