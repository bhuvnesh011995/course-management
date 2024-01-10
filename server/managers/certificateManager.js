const CertificateModel = require("../models/certificateModel");
const db = require("../models");
const fs = require("fs");
const { deleteSelectedFile } = require("../commonUsableFunctions/deleteFile");
const { default: mongoose } = require("mongoose");
const { sendMail } = require("./mailManager");

const addCertificate = async (req, res, next) => {
  try {
    const { body, file } = req;
    const query = JSON.parse(body.certificateData);
    if (file) {
      query["certificateAttchment"] = file?.originalname;
      query["certificateFilePath"] = `/images/${file?.filename}`;
    }
    const newCertificate = await db.certificates.create(query);
    const certificate = await newCertificate.save();
    const addedCertificate = await db.certificates.aggregate([
      {
        $match: {
          $expr: {
            $eq: [certificate._id, "$_id"],
          },
        },
      },
      {
        $lookup: {
          from: "courses",
          let: { courseId: "$courseId" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: [{ $toString: "$_id" }, "$$courseId"],
                },
              },
            },
          ],
          as: "courseData",
        },
      },
      { $unwind: "$courseData" },
      {
        $lookup: {
          from: "duration",
          let: { durationId: "$courseData.duration" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", "$$durationId"],
                },
              },
            },
          ],
          as: "durationDetails",
        },
      },
      { $unwind: "$durationDetails" },
      {
        $project: {
          _id: 1,
          certificateNo: 1,
          courseDuration: "$durationDetails.name",
          completionDate: 1,
          courseDuration: 1,
          grade: 1,
          participantName: 1,
          created_at: 1,
          updated_at: 1,
          remarks: 1,
          courseName: "$courseData.courseName",
          certificateFilePath: 1,
          certificateAttchment: 1,
        },
      },
    ]);
    return res.status(200).send(addedCertificate[0]);
  } catch (err) {
    next(err);
  }
};

const getCertificate = async (req, res, next) => {
  try {
    const { query } = req;
    const selectedCertificate = await db.certificates.find({ _id: query._id });
    return res.status(200).send(selectedCertificate[0]);
  } catch (err) {
    next(err);
  }
};

const getCertificates = async (req, res, next) => {
  try {
    const { query, user } = req;
    const allCertificates = await db.lead.aggregate([
      {
        $match: {
          $expr: {
            $eq: ["$status", "confirmed"],
          },
        },
      },
      {
        $lookup: {
          from: "classes",
          let: { classId: "$class" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: [{ $toString: "$_id" }, "$$classId"],
                },
              },
            },
          ],
          as: "classDetails",
        },
      },
      { $unwind: "$classDetails" },

      {
        $lookup: {
          from: "courses",
          let: { courseId: "$classDetails.course" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", "$$courseId"],
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
          from: "registrationtypes",
          let: { registrationId: "$courseDetails.registrationType" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$registrationId", "$_id"],
                },
              },
            },
            {
              $match: {
                $expr: {
                  $eq: ["$registrationCode", "CRW"],
                },
              },
            },
          ],
          as: "registrationDetails",
        },
      },
      { $unwind: "$registrationDetails" },
      {
        $lookup: {
          from: "duration",
          let: { courseId: "$courseDetails.duration" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", "$$courseId"],
                },
              },
            },
          ],
          as: "durationDetails",
        },
      },
      { $unwind: "$durationDetails" },
      {
        $project: {
          _id: 1,
          certificateNo: 1,
          completionDate: "$updated_at",
          courseDuration: "$durationDetails.name",
          participantName: 1,
          created_at: 1,
          courseName: "$courseDetails.courseName",
          certificateFilePath: 1,
          certificateAttchment: 1,
          remarks: 1,
        },
      },
    ]);
    return res.status(200).send(allCertificates);
  } catch (err) {
    next(err);
  }
};

const updateCertificate = async (req, res, next) => {
  try {
    const { body, file } = req;
    const query = JSON.parse(body.certificateData);

    if (file) {
      query["certificateAttchment"] = file?.originalname;
      query["certificateFilePath"] = `/images/${file?.filename}`;
      if (query?.removeOldAttachment) {
        // fs.unlink(`uploads\\images\\${query.removeOldAttachment}`, (err) => {
        //   if (err) {
        //     console.error(err);
        //   }
        // });
        deleteSelectedFile(query?.removeOldAttachment);
      }
    }
    const updateCertificate = await db.certificates.updateOne(
      { _id: query._id },
      {
        $set: query,
      },
    );
    const updatedCertificate = await db.certificates.aggregate([
      {
        $match: {
          $expr: {
            $eq: [query._id, { $toString: "$_id" }],
          },
        },
      },
      {
        $lookup: {
          from: "courses",
          let: { courseId: "$courseId" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: [{ $toString: "$_id" }, "$$courseId"],
                },
              },
            },
          ],
          as: "courseData",
        },
      },
      { $unwind: "$courseData" },
      {
        $lookup: {
          from: "duration",
          let: { durationId: "$courseData.duration" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", "$$durationId"],
                },
              },
            },
          ],
          as: "durationDetails",
        },
      },
      { $unwind: "$durationDetails" },
      {
        $project: {
          _id: 1,
          certificateNo: 1,
          completionDate: 1,
          courseDuration: 1,
          grade: 1,
          courseDuration: "$durationDetails.name",
          certificateAttchment: 1,
          participantName: 1,
          created_at: 1,
          updated_at: 1,
          remarks: 1,
          courseName: "$courseData.courseName",
          certificateFilePath: 1,
        },
      },
    ]);
    return res.status(200).send({
      updatedCertificate: updatedCertificate[0],
      message: "Certificate Updated SuccessFully !",
    });
  } catch (err) {
    next(err);
  }
};

const deleteCertificate = async (req, res, next) => {
  try {
    const { query } = req;

    if (query?.certificateFilePath?.length > 0)
      deleteSelectedFile(
        query.certificateFilePath.split("/")[
          query.certificateFilePath.split("/").length - 1
        ],
      );
    // fs.unlink(
    //   `uploads\\images\\${
    //     query.certificateFilePath.split("/")[
    //       query.certificateFilePath.split("/").length - 1
    //     ]
    //   }`,
    //   (err) => {
    //     if (err) {
    //       console.error(err);
    //     }
    //   }
    // );

    const deleteSelectedCert = await db.certificates.deleteOne({
      _id: query._id,
    });
    return res
      .status(200)
      .send({ message: "Certificate Deleted Successfully !" });
  } catch (err) {
    next(err);
  }
};

const getFilteredCertificate = async (req, res, next) => {
  try {
    const confirmedClassLeads = await db.lead.aggregate([
      {
        $match: {
          $expr: {
            $eq: ["$class", req.params.classId],
          },
        },
      },
      {
        $lookup: {
          from: "classes",
          let: { classId: "$class" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$classId", { $toString: "$_id" }],
                },
              },
            },
          ],
          as: "classDetails",
        },
      },
      { $unwind: "$classDetails" },
      {
        $lookup: {
          from: "courses",
          let: { courseId: "$classDetails.course" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$courseId", "$_id"],
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
          from: "tradetypes",
          let: { tradeTypeId: "$courseDetails.tradeType" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$tradeTypeId", "$_id"],
                },
              },
            },
          ],
          as: "tradeTypeDetails",
        },
      },
      { $unwind: "$tradeTypeDetails" },
      {
        $project: {
          _id: 1,
          companyName: 1,
          contactPerson: 1,
          participantName: 1,
          coreTradeRegNo: 1,
          status: 1,
        },
      },
    ]);
    return res.status(200).send(confirmedClassLeads);
  } catch (err) {
    next(err);
  }
};

const getSelectedCertificates = async (req, res, next) => {
  try {
    const leadIds = await req.query.leads.map(
      (leadId) => new mongoose.Types.ObjectId(leadId),
    );
    const selectedCertificates = await db.lead.aggregate([
      {
        $match: {
          _id: { $in: leadIds },
        },
      },
      {
        $lookup: {
          from: "classes",
          let: { classId: "$class" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$classId", { $toString: "$_id" }],
                },
              },
            },
          ],
          as: "classDetails",
        },
      },
      { $unwind: "$classDetails" },
      {
        $lookup: {
          from: "courses",
          let: { courseId: "$classDetails.course" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$courseId", "$_id"],
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
          from: "tradetypes",
          let: { tradeTypeId: "$tradeType" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$tradeTypeId", { $toString: "$_id" }],
                },
              },
            },
          ],
          as: "tradeTypeDetails",
        },
      },
      { $unwind: "$tradeTypeDetails" },
      {
        $project: {
          participantNRIC: 1,
          participantName: 1,
          coreTradeRegNo: 1,
          postalCode: 1,
          updated_at: 1,
          status: 1,
          contactPersonEmail: 1,
          tradeType: "$tradeTypeDetails.tradeType",
          typeCode: "$tradeTypeDetails.typeCode",
        },
      },
    ]);
    //   {
    //   _id: { $in: req.query.leads },
    // }
    return res.status(200).send(selectedCertificates);
  } catch (err) {
    next(err);
  }
};

const sendLeadCertificateMail = async (req, res, next) => {
  try {
    const { body } = req;
    const certificateBuffered = Buffer.from(body.base64Data, "base64");
    const filepath = `uploads/images/${
      Date.now() + Math.round(Math.random() * 1e9)
    }-certificate.pdf`;
    fs.writeFileSync(filepath, certificateBuffered, (err) => {
      if (err) console.error(err);
    });

    const sendMailObj = {
      email: body.contactPersonMail,
      subject: "CET Course Lead Certificate",
      mailValue: "<h3>Find Your Course Certificate Attachment Below :</h3>",
      path: [filepath],
    };
    await sendMail({ body: sendMailObj });
    return res.status(200).send({ message: "Certificate Sent Successfully !" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addCertificate,
  getCertificates,
  getCertificate,
  updateCertificate,
  deleteCertificate,
  getFilteredCertificate,
  getSelectedCertificates,
  sendLeadCertificateMail,
};
