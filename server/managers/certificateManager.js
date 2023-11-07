const CertificateModel = require("../models/certificateModel");
const db = require("../models");
const fs = require("fs");

const addCertificate = async ({ body, file }) => {
  try {
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
        $project: {
          _id: 1,
          certificateNo: 1,
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
    return addedCertificate[0];
  } catch (err) {
    console.error(err);
  }
};

const getCertificate = async (data) => {
  try {
    const selectedCertificate = await db.certificates.find({ _id: data._id });
    return selectedCertificate[0];
  } catch (err) {
    console.error(err);
  }
};

const getCertificates = async (data) => {
  try {
    const allCertificates = await db.certificates.aggregate([
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
        $project: {
          _id: 1,
          certificateNo: 1,
          completionDate: 1,
          courseDuration: 1,
          grade: 1,
          participantName: 1,
          created_at: 1,
          updated_at: 1,
          courseName: "$courseData.courseName",
          certificateFilePath: 1,
          certificateAttchment: 1,
          remarks: 1,
        },
      },
    ]);
    return allCertificates;
  } catch (err) {
    console.error(err);
  }
};

const updateCertificate = async ({ body, file }) => {
  try {
    const query = JSON.parse(body.certificateData);

    if (file) {
      query["certificateAttchment"] = file?.originalname;
      query["certificateFilePath"] = `/images/${file?.filename}`;
      if (query?.removeOldAttachment) {
        fs.unlink(`uploads\\images\\${query.removeOldAttachment}`, (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log("file deleted");
          }
        });
      }
    }
    const updateCertificate = await db.certificates.updateOne(
      { _id: query._id },
      {
        certificateFilePath: query?.certificateFilePath,
        certificateNo: query?.certificateNo,
        completionDate: query?.completionDate,
        courseDuration: query?.courseDuration,
        courseId: query?.courseId,
        grade: query?.grade,
        participantName: query?.participantName,
        remarks: query?.remarks,
        certificateAttchment: query?.certificateAttchment,
      }
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
        $project: {
          _id: 1,
          certificateNo: 1,
          completionDate: 1,
          courseDuration: 1,
          grade: 1,
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
    return {
      updatedCertificate: updatedCertificate[0],
      message: "Certificate Updated SuccessFully !",
    };
  } catch (err) {
    console.error(err);
  }
};

const deleteCertificate = async (data) => {
  try {
    if (data?.certificateFilePath?.length > 0)
      fs.unlink(
        `uploads\\images\\${
          data.certificateFilePath.split("/")[
            data.certificateFilePath.split("/").length - 1
          ]
        }`,
        (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log("file removed");
          }
        }
      );

    const deleteSelectedCert = await db.certificates.deleteOne({
      _id: data._id,
    });
    return { message: "Certificate Deleted Successfully !" };
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addCertificate,
  getCertificates,
  getCertificate,
  updateCertificate,
  deleteCertificate,
};
