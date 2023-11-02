const LeadModel = require("../models/newLeadModel");
const { sendMail } = require("../managers/mailManager");
const fs = require("fs");
const classModel = require("../models/classModel");

const addNewLead = async ({ query, files, user }) => {
  try {
    const fileLocations = {
      passportCopy: "",
      notice: "",
      nric: "",
      MOME: "",
      skill: "",
      pa: "",
      ISC: "",
      workersPassport: "",
    };
    if (query.selectedRegistration == "CTD") {
      fileLocations.passportCopy = `images/${files[0].filename}`;
      fileLocations.notice = `images/${files[1].filename}`;
      fileLocations.nric = `images/${files[2].filename}`;
      fileLocations.MOME = `images/${files[3].filename}`;
    } else if (query.selectedRegistration == "MSG") {
      fileLocations.passportCopy = `images/${files[0].filename}`;
      fileLocations.notice = `images/${files[1].filename}`;
      fileLocations.nric = `images/${files[2].filename}`;
      fileLocations.MOME = `images/${files[3].filename}`;
      fileLocations.skill = `images/${files[4].filename}`;
    } else if (query.selectedRegistration == "SK") {
      fileLocations.passportCopy = `images/${files[0].filename}`;
      fileLocations.nric = `images/${files[1].filename}`;
      fileLocations.MOME = `images/${files[2].filename}`;
    } else if (query.selectedRegistration == "CRW") {
      fileLocations.notice = `images/${files[0].filename}`;
      fileLocations.nric = `images/${files[1].filename}`;
    } else if (query.selectedRegistration == "AMN") {
      fileLocations.pa = `images/${files[0].filename}`;
      fileLocations.ISC = `images/${files[1].filename}`;
      fileLocations.workersPassport = `images/${files[2].filename}`;
    }
    query["fileLocations"] = fileLocations;
    const newLead = await LeadModel.create(query);
    const lead = await newLead.save();
    const newLeadData = await LeadModel.aggregate([
      {
        $match: {
          $expr: { $eq: [lead._id, "$_id"] },
        },
      },
      {
        $lookup: {
          from: "tradetypes",
          let: { typeId: "$tradeType" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$typeId", { $toString: "$_id" }],
                },
              },
            },
          ],
          as: "tradeType",
        },
      },
      { $unwind: "$tradeType" },
      {
        $project: {
          _id: 1,
          fileLocations: 1,
          bcaAcknowledgementNotice: 1,
          MOMEploymentDetails: 1,
          nricWorkDocument: 1,
          paQuotaCopy: 1,
          passportCopy: 1,
          workersIc: 1,
          workersPassport: 1,
          skillEvaluationCertificate: 1,
          companyAddress: 1,
          alternateMobile: 1,
          companyName: 1,
          companyUEN: 1,
          contactPerson: 1,
          contactPersonEmail: 1,
          contactPersonMobile: 1,
          myeNo: 1,
          officeFax: 1,
          officeTelephone: 1,
          paReferenceNo: 1,
          participantIcNo: 1,
          participantMobile: 1,
          participantNRIC: 1,
          postalCode: 1,
          registrationType: 1,
          tradeLevel: 1,
          tradeType: "$tradeType.tradeType",
          participantName: 1,
          DOB: 1,
          nationality: 1,
          educationalLevel: 1,
          coreTradeRegNo: 1,
          getPayment: 1,
          confirmed: 1,
          course: 1,
          courseAssigned: 1,
        },
      },
    ]);

    return { message: "lead saved successfully !", newLead: newLeadData[0] };
  } catch (err) {
    console.error(err);
  }
};

const getAllLeads = async (user) => {
  try {
    const leadQuery = [];

    leadQuery.push(
      {
        $lookup: {
          from: "tradetypes",
          let: { typeId: "$tradeType" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$typeId", { $toString: "$_id" }],
                },
              },
            },
          ],
          as: "tradeType",
        },
      },
      { $unwind: "$tradeType" },
      {
        $project: {
          _id: 1,
          fileLocations: 1,
          bcaAcknowledgementNotice: 1,
          MOMEploymentDetails: 1,
          nricWorkDocument: 1,
          paQuotaCopy: 1,
          passportCopy: 1,
          workersIc: 1,
          workersPassport: 1,
          skillEvaluationCertificate: 1,
          companyAddress: 1,
          alternateMobile: 1,
          companyName: 1,
          companyUEN: 1,
          contactPerson: 1,
          contactPersonEmail: 1,
          contactPersonMobile: 1,
          myeNo: 1,
          officeFax: 1,
          officeTelephone: 1,
          paReferenceNo: 1,
          participantIcNo: 1,
          participantMobile: 1,
          participantNRIC: 1,
          postalCode: 1,
          registrationType: 1,
          tradeLevel: 1,
          tradeType: "$tradeType.tradeType",
          participantName: 1,
          DOB: 1,
          nationality: 1,
          educationalLevel: 1,
          coreTradeRegNo: 1,
          getPayment: 1,
          confirmed: 1,
          course: 1,
          courseAssigned: 1,
        },
      }
    );
    const allLeads = await LeadModel
      // .find({});
      .aggregate(leadQuery);
    return { leads: allLeads, user };
  } catch (err) {
    console.error(err);
  }
};

const updateLead = async ({ query, files }) => {
  try {
    if (query?.deleteFileList?.length > 0) {
      for (let path of query.deleteFileList) {
        fs.unlink(
          `uploads\\images\\${path.split("/")[path.split("/").length - 1]}`,
          (err) => {
            if (err) console.log(err);
            else console.log("file is deleted");
          }
        );
      }
    }
    if (query.selectedRegistration == "CTD") {
      for (let file of files) {
        if (!query.fileLocations.passportCopy.length) {
          query.fileLocations.passportCopy = `images/${file.filename}`;
        } else if (!query.fileLocations.notice.length) {
          query.fileLocations.notice = `images/${file.filename}`;
        } else if (!query.fileLocations.nric.length) {
          query.fileLocations.nric = `images/${file.filename}`;
        } else if (!query.fileLocations.MOME.length) {
          query.fileLocations.MOME = `images/${file.filename}`;
        }
      }
    } else if (query.selectedRegistration == "MSG") {
      for (let file of files) {
        if (!query.fileLocations.passportCopy.length) {
          query.fileLocations.passportCopy = `images/${file.filename}`;
        } else if (!query.fileLocations.notice.length) {
          query.fileLocations.notice = `images/${file.filename}`;
        } else if (!query.fileLocations.nric.length) {
          query.fileLocations.nric = `images/${file.filename}`;
        } else if (!query.fileLocations.MOME.length) {
          query.fileLocations.MOME = `images/${file.filename}`;
        } else if (!query.fileLocations.skill.length) {
          query.fileLocations.skill = `images/${file.filename}`;
        }
      }
    } else if (query.selectedRegistration == "SK") {
      for (let file of files) {
        if (!query.fileLocations.passportCopy.length) {
          query.fileLocations.passportCopy = `images/${file.filename}`;
        } else if (!query.fileLocations.nric.length) {
          query.fileLocations.nric = `images/${file.filename}`;
        } else if (!query.fileLocations.MOME.length) {
          query.fileLocations.MOME = `images/${file.filename}`;
        }
      }
    } else if (query.selectedRegistration == "CRW") {
      for (let file of files) {
        if (!query.fileLocations.notice.length) {
          query.fileLocations.notice = `images/${file.filename}`;
        } else if (!query.fileLocations.nric.length) {
          query.fileLocations.nric = `images/${file.filename}`;
        }
      }
    } else if (query.selectedRegistration == "AMN") {
      for (let file of files) {
        if (!query.fileLocations.pa.length) {
          query.fileLocations.pa = `images/${file.filename}`;
        } else if (!query.fileLocations.ISC.length) {
          query.fileLocations.ISC = `images/${file.filename}`;
        } else if (!query.fileLocations.workersPassport.length) {
          query.fileLocations.workersPassport = `images/${file.filename}`;
        }
      }
    }
    const updateLead = await LeadModel.updateOne(
      { _id: query._id },
      {
        bcaAcknowledgementNotice: query.bcaAcknowledgementNotice,
        MOMEploymentDetails: query.MOMEploymentDetails,
        nricWorkDocument: query.nricWorkDocument,
        paQuotaCopy: query.paQuotaCopy,
        passportCopy: query.passportCopy,
        workersIc: query.workersIc,
        workersPassport: query.workersPassport,
        skillEvaluationCertificate: query.skillEvaluationCertificate,
        fileLocations: query.fileLocations,
        companyAddress: query.companyAddress,
        alternateMobile: query.alternateMobile,
        companyName: query.companyName,
        companyUEN: query.companyUEN,
        contactPerson: query.contactPerson,
        contactPersonEmail: query.contactPersonEmail,
        contactPersonMobile: query.contactPersonMobile,
        myeNo: query.myeNo,
        officeFax: query.officeFax,
        officeTelephone: query.officeTelephone,
        paReferenceNo: query.paReferenceNo,
        participantIcNo: query.participantIcNo,
        participantMobile: query.participantMobile,
        participantNRIC: query.participantNRIC,
        postalCode: query.postalCode,
        registrationType: query.registrationType,
        tradeLevel: query.tradeLevel,
        tradeType: query.tradeType,
        participantName: query.participantName,
        nationality: query.nationality,
        coreTradeRegNo: query.coreTradeRegNo,
        course: query.course,
      }
    );
    const updatedLead = await LeadModel.aggregate([
      {
        $match: {
          $expr: { $eq: [query._id, { $toString: "$_id" }] },
        },
      },
      {
        $lookup: {
          from: "tradetypes",
          let: { typeId: "$tradeType" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$typeId", { $toString: "$_id" }],
                },
              },
            },
          ],
          as: "tradeType",
        },
      },
      { $unwind: "$tradeType" },
      {
        $project: {
          _id: 1,
          fileLocations: 1,
          bcaAcknowledgementNotice: 1,
          MOMEploymentDetails: 1,
          nricWorkDocument: 1,
          paQuotaCopy: 1,
          passportCopy: 1,
          workersIc: 1,
          workersPassport: 1,
          skillEvaluationCertificate: 1,
          companyAddress: 1,
          alternateMobile: 1,
          companyName: 1,
          companyUEN: 1,
          contactPerson: 1,
          contactPersonEmail: 1,
          contactPersonMobile: 1,
          myeNo: 1,
          officeFax: 1,
          officeTelephone: 1,
          paReferenceNo: 1,
          participantIcNo: 1,
          participantMobile: 1,
          participantNRIC: 1,
          postalCode: 1,
          registrationType: 1,
          tradeLevel: 1,
          tradeType: "$tradeType.tradeType",
          participantName: 1,
          DOB: 1,
          nationality: 1,
          educationalLevel: 1,
          coreTradeRegNo: 1,
          getPayment: 1,
          confirmed: 1,
          course: 1,
          courseAssigned: 1,
        },
      },
    ]);
    return {
      updatedLead: updatedLead[0],
      message: "Lead Updated Successfully",
    };
  } catch (err) {
    console.error(err);
  }
};

const deleteLead = async (data) => {
  try {
    const selectedLead = await LeadModel.findOne({ _id: data._id });
    Object.keys(selectedLead.fileLocations).map((e) =>
      fs.unlink(
        `uploads\\images\\${
          selectedLead.fileLocations[e].split("/")[
            selectedLead.fileLocations[e].split("/").length - 1
          ]
        }`,
        (err) => {
          if (err) console.log(err);
          else console.log("file is deleted");
        }
      )
    );
    const deleteLead = await LeadModel.deleteOne({ _id: data._id });
    return { message: "Lead Deleted Successfully !" };
  } catch (err) {
    console.error(err);
  }
};

const getLead = async (data) => {
  try {
    const getLead = await LeadModel.find({ _id: data._id });
    return getLead;
  } catch (err) {
    console.error(err);
  }
};

const getPayment = async (data) => {
  try {
    const paymentPdfBuffer = Buffer.from(data.paymentPdfBase64, "base64");
    const bankPdfBuffer = Buffer.from(data.bankDetailsPdfBase64, "base64");
    const filePath = `uploads/images/doc${
      Date.now() + Math.round(Math.random() * 1e9)
    }.pdf`;
    const bankFilePath = `uploads/images/bankDetails${
      Date.now() + Math.round(Math.random() * 1e9)
    }.pdf`;

    fs.writeFileSync(bankFilePath, bankPdfBuffer, "binary", (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("pdf file generated");
      }
    });

    fs.writeFileSync(filePath, paymentPdfBuffer, "binary", (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("pdf file generated");
      }
    });
    const sendMailObj = {
      _id: data._id,
      email: data.contactPersonEmail,
      subject: "Confirm Course Details and Confirm Payment !",
      mailValue: `<h2>SANTARLI CONSTRUCTION PTE LTD - BANK DETAIL</h2>\n
      <p><strong>Tonga</strong> <br>\n`,
      path: [filePath, bankFilePath],
    };
    await sendMail(sendMailObj);
    const getLeadPayment = await LeadModel.updateOne(
      { _id: data._id },
      { getPayment: true }
    );
    return { message: "Mail Sent !" };
  } catch (err) {
    console.error(err);
  }
};

const confirmPayment = async (data) => {
  try {
    const sendMailObj = {
      email: data.contactPersonEmail,
      subject: "Payment Confirmed !",
      mailValue: `<p>your payment is confirmed now , you have access of the course</p><br>\n
      <p><strong>Tonga</strong> <br>\n`,
    };
    await sendMail(sendMailObj);
    const getLeadPayment = await LeadModel.updateOne(
      { _id: data._id },
      { confirmed: true }
    );
    return { message: "confirmation mail sent !" };
  } catch (err) {
    console.error(err);
  }
};

const assignCourse = async (data) => {
  try {
    const updateLeadCourse = await LeadModel.updateOne(
      { _id: data._id },
      { course: data.course, courseAssigned: data.courseAssigned }
    );
    return { message: "course Assigned to user" };
  } catch (err) {
    console.error(err);
  }
};

const accountHistory = async (data) => {
  try {
    const allAccountCourses = await LeadModel.aggregate([
      {
        $match: {
          $expr: {
            $eq: [data.contactPersonEmail, "$contactPersonEmail"],
          },
        },
      },
      {
        $lookup: {
          from: "classes",
          let: { courseId: "$course" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: [{ $toString: "$course" }, "$$courseId"],
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
          let: { courseId: "$course" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: [{ $toString: "$_id" }, "$$courseId"],
                },
              },
            },
          ],
          as: "courseDetails",
        },
      },
      {
        $project: {
          _id: 1,
          course: "$courseDetails.courseName",
          price: "$courseDetails.price",
          class: "$classDetails.classCode",
          created_at: 1,
          paymentStatus: "paid",
        },
      },
    ]);
    return allAccountCourses;
  } catch (err) {
    console.error(err);
  }
};

const getSelectedLead = async ({ query, user }) => {
  try {
    const leadData = await LeadModel.aggregate([
      {
        $match: {
          $expr: {
            $eq: [{ $toString: "$_id" }, query._id],
          },
        },
      },
      {
        $lookup: {
          from: "courses",
          let: { courseId: "$course" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: [{ $toString: "$_id" }, "$$courseId"],
                },
              },
            },
          ],
          as: "courseDetails",
        },
      },
      { $unwind: "$courseDetails" },

      {
        $addFields: {
          showLookup: {
            $gt: [{ $strLenCP: "$tradeLevel" }, 0],
          },
        },
      },

      {
        $facet: {
          hasTradeLevel: [
            {
              $match: {
                $expr: {
                  $eq: ["$showLookup", true],
                },
              },
            },
            {
              $lookup: {
                from: "tradelevels",
                let: { levelId: "$tradeLevel" },
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $eq: [{ $toString: "$_id" }, "$$levelId"],
                      },
                    },
                  },
                ],
                as: "tradeLevelDetails",
              },
            },
            { $unwind: "$tradeLevelDetails" },
          ],
          noTradeLevel: [
            {
              $match: {
                $expr: { $eq: ["$showLookup", false] },
              },
            },
          ],
        },
      },
      {
        $addFields: {
          bothCombined: {
            $concatArrays: ["$hasTradeLevel", "$noTradeLevel"],
          },
        },
      },
      {
        $unwind: "$bothCombined",
      },
      {
        $project: {
          _id: "$bothCombined._id",
          participantName: "$bothCombined.participantName",
          contactPersonEmail: "$bothCombined.contactPersonEmail",
          tradeLevel: "$bothCombined.tradeLevelDetails.tradeLevel",
          courseName: "$bothCombined.courseDetails.courseName",
          price: "$bothCombined.courseDetails.price",
          participantNRIC: "$bothCombined.participantNRIC",
        },
      },
    ]);
    return { lead: leadData[0], user: user[0] };
  } catch (err) {
    console.error(err);
  }
};

const getFilteredLeads = async (data) => {
  try {
    const leadQuery = [];

    if (data.class.length) {
      leadQuery.push({
        $match: {
          $expr: { $eq: [data.class, { $toString: "$_id" }] },
        },
      });
    }

    leadQuery.push(
      {
        $lookup: {
          from: "leads",
          let: { courseId: "$course" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$course", { $toString: "$$courseId" }],
                },
              },
            },
          ],
          as: "leadDetails",
        },
      },
      { $unwind: "$leadDetails" },

      {
        $lookup: {
          from: "courses",
          localField: "course",
          foreignField: "_id",
          as: "courseData",
        },
      },
      { $unwind: "$courseData" },
      {
        $lookup: {
          from: "trainers",
          localField: "trainer",
          foreignField: "_id",
          as: "trainerData",
        },
      },
      { $unwind: "$trainerData" }
    );

    if (data.participantName.length) {
      leadQuery.push({
        $match: {
          "leadDetails.participantName": { $regex: data.participantName },
        },
      });
    }
    leadQuery.push({
      $project: {
        _id: 1,
        classCode: 1,
        course: "$courseData.courseName",
        startDate: 1,
        endDate: 1,
        startTime: 1,
        endTime: 1,
        participantName: "$leadDetails.participantName",
        participantNric: "$leadDetails.participantNRIC",
        coreTradeRegNo: "$leadDetails.coreTradeRegNo",
        trainerName: "$trainerData.trainerName",
      },
    });
    const getClassParticipants = await classModel.aggregate(leadQuery);
    return getClassParticipants;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addNewLead,
  getAllLeads,
  updateLead,
  deleteLead,
  getLead,
  getPayment,
  confirmPayment,
  assignCourse,
  accountHistory,
  getSelectedLead,
  getFilteredLeads,
};
