const db = require("../models");

const addNewQuotation = async (req, res, next) => {
  try {
    const newQuotation = await db.quotations.create(req.body);
    const addedQuotation = await db.quotations.aggregate([
      {
        $match: {
          $expr: {
            $eq: ["$_id", newQuotation._id],
          },
        },
      },
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
    return res.status(200).send(addedQuotation[0]);
  } catch (err) {
    console.error(err);
    next(err);
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
          isInvoice: 1,
        },
      },
    ]);
    return res.status(200).send(allQuoatations);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const deleteQuotation = async (req, res, next) => {
  try {
    const deleteQuote = await db.quotations.deleteOne({ _id: req.query._id });
    return res.status(200).send("Quotation Deleted Successfully !");
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getQuotation = async (req, res, next) => {
  try {
    const selectedQuotation = await db.quotations.aggregate([
      {
        $match: {
          $expr: {
            $eq: [{ $toString: "$_id" }, req.query._id],
          },
        },
      },
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
          courseId: "$leadDetails.course",
        },
      },
      {
        $lookup: {
          from: "courses",
          let: { course: "$courseId" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$course", { $toString: "$_id" }],
                },
              },
            },
          ],
          as: "courseDetails",
        },
      },
      { $unwind: "$courseDetails" },
      {
        $lookup: {
          from: "classes",
          let: { course: "$courseId" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$course", { $toString: "$course" }],
                },
              },
            },
          ],
          as: "classDetails",
        },
      },
      { $unwind: "$classDetails" },
      {
        $project: {
          _id: 1,
          companyAddress: "$leadDetails.companyAddress",
          postalCode: "$leadDetails.postalCode",
          contactPerson: "$leadDetails.contactPerson",
          contactPersonMobile: "$leadDetails.contactPersonMobile",
          courseName: "$courseDetails.courseName",
          duration: "$courseDetails.duration",
          startDate: "$classDetails.startDate",
          startTime: "$classDetails.startTime",
          quotationCourses: 1,
        },
      },
    ]);
    return res.status(200).send(selectedQuotation[0]);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const updateQuotation = async (req, res, next) => {
  try {
    const updateToInvoice = await db.quotations.updateOne(
      { _id: req.body._id },
      { isInvoice: true }
    );
    return res.status(200).send("quotation updated to Invoice");
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = {
  addNewQuotation,
  getQuotations,
  deleteQuotation,
  getQuotation,
  updateQuotation,
};