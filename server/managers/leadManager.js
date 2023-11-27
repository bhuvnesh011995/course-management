const { sendMail } = require("../managers/mailManager");
const db = require("../models");
const fs = require("fs");

const addNewLead = async (req, res, next) => {
  try {
    const { body, files, user } = req;
    const query = JSON.parse(body.leadData);
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
    const newLead = await db.lead.create(query);
    const lead = await newLead.save();
    const newLeadData = await db.lead.aggregate([
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
        $lookup: {
          from: "registrationtypes",
          let: { registrationId: "$registrationType" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$registrationId", { $toString: "$_id" }],
                },
              },
            },
          ],
          as: "registrationDetails",
        },
      },
      { $unwind: "$registrationDetails" },
      {
        $project: {
          _id: 1,
          fileLocations: 1,
          leadRegistrationName: "$registrationDetails.registrationName",
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
          course: 1,
          status: 1,
          remarks: 1,
        },
      },
    ]);

    return res
      .status(200)
      .send({ message: "lead saved successfully !", newLead: newLeadData[0] });
  } catch (err) {
    next(err);
  }
};

const getAllLeads = async (req, res, next) => {
  try {
    const leadQuery = [];
    const { user, query } = req;

    if (query?.registrationType?.length) {
      leadQuery.push({
        $match: {
          $expr: {
            $eq: ["$registrationType", query.registrationType],
          },
        },
      });
    }

    if (query?.tradeType?.length) {
      leadQuery.push({
        $match: {
          $expr: {
            $eq: ["$tradeType", query.tradeType],
          },
        },
      });
    }

    if (query?.textSearch?.length) {
      leadQuery.push({
        $match: {
          companyName: { $regex: query.textSearch },
        },
      });
    }

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
        $lookup: {
          from: "registrationtypes",
          let: { registrationId: "$registrationType" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$registrationId", { $toString: "$_id" }],
                },
              },
            },
          ],
          as: "registrationDetails",
        },
      },
      { $unwind: "$registrationDetails" },
      {
        $project: {
          _id: 1,
          leadRegistrationName: "$registrationDetails.registrationName",
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
          course: 1,
          status: 1,
          remarks: 1,
        },
      }
    );
    const allLeads = await db.lead.aggregate(leadQuery);
    return res.status(200).send({ leads: allLeads, user });
  } catch (err) {
    next(err);
  }
};

const updateLead = async (req, res, next) => {
  try {
    const { body, files } = req;
    const query = JSON.parse(body.leadData);

    if (query?.deleteFileList?.length > 0) {
      for (let path of query.deleteFileList) {
        fs.unlink(
          `uploads\\images\\${path.split("/")[path.split("/").length - 1]}`,
          (err) => {
            if (err) console.error(err);
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
    const updateLead = await db.lead.updateOne(
      { _id: query._id },
      {
        $set: query,
      }
    );
    const updatedLead = await db.lead.aggregate([
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
        $lookup: {
          from: "registrationtypes",
          let: { registrationId: "$registrationType" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$registrationId", { $toString: "$_id" }],
                },
              },
            },
          ],
          as: "registrationDetails",
        },
      },
      { $unwind: "$registrationDetails" },
      {
        $project: {
          _id: 1,
          leadRegistrationName: "$registrationDetails.registrationName",
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
          course: 1,
          status: 1,
          remarks: 1,
        },
      },
    ]);
    return res.status(200).send({
      updatedLead: updatedLead[0],
      message: "Lead Updated Successfully",
    });
  } catch (err) {
    next(err);
  }
};

const deleteLead = async (req, res, next) => {
  try {
    const { query } = req;
    const selectedLead = await db.lead.findOne({ _id: query._id });
    Object.keys(selectedLead.fileLocations).map((e) =>
      fs.unlink(
        `uploads\\images\\${
          selectedLead.fileLocations[e].split("/")[
            selectedLead.fileLocations[e].split("/").length - 1
          ]
        }`,
        (err) => {
          if (err) console.error(err);
        }
      )
    );
    const deleteLead = await db.lead.deleteOne({ _id: query._id });
    return res.status(200).send({ message: "Lead Deleted Successfully !" });
  } catch (err) {
    next(err);
  }
};

const getLead = async (req, res, next) => {
  try {
    const { query } = req;
    const getLead = await db.lead.find({ _id: query._id });
    return res.status(200).send(getLead);
  } catch (err) {
    next(err);
  }
};

const getPayment = async (req, res, next) => {
  try {
    const { body, user } = req;
    let paymentTemplate;
    if (user?.leadPaymentTemplate) {
      paymentTemplate = await db.constants.emailtemplates.findOne({
        _id: user?.leadPaymentTemplate,
      });
    }
    const paymentPdfBuffer = Buffer.from(body.paymentPdfBase64, "base64");
    const bankPdfBuffer = Buffer.from(body.bankDetailsPdfBase64, "base64");
    const filePath = `uploads/images/doc${
      Date.now() + Math.round(Math.random() * 1e9)
    }.pdf`;
    const bankFilePath = `uploads/images/bankDetails${
      Date.now() + Math.round(Math.random() * 1e9)
    }.pdf`;

    fs.writeFileSync(bankFilePath, bankPdfBuffer, "binary", (err) => {
      if (err) {
        console.error(err);
      }
    });

    fs.writeFileSync(filePath, paymentPdfBuffer, "binary", (err) => {
      if (err) {
        console.error(err);
      }
    });
    const sendMailObj = {
      _id: body._id,
      email: body.contactPersonEmail,
      subject: paymentTemplate?.subject
        ? paymentTemplate?.subject
        : "Confirm Course Details and Confirm Payment !",
      mailValue: paymentTemplate?.template
        ? paymentTemplate?.template
        : `<h2></h2>\n <p><strong>Tonga</strong> <br>\n`,
      path: [filePath, bankFilePath],
    };
    await sendMail({ query: sendMailObj });
    const getLeadPayment = await db.lead.updateOne(
      { _id: body._id },
      { $set: { status: "assign" } }
    );
    return res.status(200).send({ message: "Mail Sent !" });
  } catch (err) {
    next(err);
  }
};

const confirmPayment = async (req, res, next) => {
  try {
    const { body } = req;
    const sendMailObj = {
      email: body.contactPersonEmail,
      subject: "Payment Confirmed !",
      mailValue: `<p>your payment is confirmed now , you have access of the course</p><br>\n
      <p><strong>Tonga</strong> <br>\n`,
    };
    await sendMail({ query: sendMailObj });
    const getLeadPayment = await db.lead.updateOne(
      { _id: body._id },
      { $set: { status: "confirmed" } }
    );
    return res.status(200).send({ message: "confirmation mail sent !" });
  } catch (err) {
    next(err);
  }
};

const accountHistory = async (req, res, next) => {
  try {
    const { query } = req;
    const allAccountCourses = await db.lead.aggregate([
      {
        $match: {
          $expr: {
            $eq: [query.contactPersonEmail, "$contactPersonEmail"],
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
        $addFields: {
          trainerId: "$classDetails.trainer",
        },
      },
      {
        $lookup: {
          from: "trainers",
          let: { trainer: "$trainerId" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", "$$trainer"],
                },
              },
            },
          ],
          as: "trainerDetails",
        },
      },
      { $unwind: "$trainerDetails" },
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
        $addFields: {
          isPaid: {
            $cond: {
              if: {
                $and: [{ $eq: ["$status", "confirmed"] }],
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
          course: "$courseDetails.courseName",
          price: "$courseDetails.price",
          class: "$classDetails.classCode",
          trainer: "$trainerDetails.trainerName",
          startDate: "$classDetails.startDate",
          startTime: "$classDetails.startTime",
          created_at: 1,
          paymentStatus: "$isPaid",
        },
      },
    ]);
    return res.status(200).send(allAccountCourses);
  } catch (err) {
    next(err);
  }
};

const getSelectedLead = async (req, res, next) => {
  try {
    const { query, user } = req;
    const leadData = await db.lead.aggregate([
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
    return res.status(200).send({ lead: leadData[0], user: user });
  } catch (err) {
    next(err);
  }
};

const getFilteredLeads = async (req, res, next) => {
  try {
    const { query } = req;
    const leadQuery = [];

    if (query.class.length) {
      leadQuery.push({
        $match: {
          $expr: { $eq: [query.class, { $toString: "$_id" }] },
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
      { $unwind: "$trainerData" },
      {
        $lookup: {
          from: "tradetypes",
          let: { tradeTypeId: "$leadDetails.tradeType" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: [{ $toString: "$_id" }, "$$tradeTypeId"],
                },
              },
            },
          ],
          as: "tradeTypeData",
        },
      },
      { $unwind: "$tradeTypeData" }
    );

    if (query.participantName.length) {
      leadQuery.push({
        $match: {
          "leadDetails.participantName": { $regex: query.participantName },
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
        tradeType: "$tradeTypeData.tradeType",
      },
    });
    const getClassParticipants = await db.classes.aggregate(leadQuery);
    return res.status(200).send(getClassParticipants);
  } catch (err) {
    next(err);
  }
};

const getAllCompanies = async (req, res, next) => {
  try {
    const { user, query } = req;

    const getAllCompanies = await db.lead.aggregate([
      {
        $match: {
          companyName: { $regex: query.textSearch },
        },
      },
      {
        $project: {
          _id: 1,
          companyName: 1,
          contactPersonMobile: 1,
        },
      },
    ]);
    if (getAllCompanies.length) return res.status(200).send(getAllCompanies);
    else return res.status(204).send({ message: "No Companies Found !" });
  } catch (err) {
    next(err);
  }
};

const getCompany = async (req, res, next) => {
  try {
    const { query } = req;
    const company = await db.lead.aggregate([
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
        $lookup: {
          from: "registrationtypes",
          let: { registrationId: "$registrationType" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$registrationId", { $toString: "$_id" }],
                },
              },
            },
          ],
          as: "registrationType",
        },
      },
      { $unwind: "$registrationType" },
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
          fileLocations: "$bothCombined.fileLocations",
          bcaAcknowledgementNotice: "$bothCombined.bcaAcknowledgementNotice",
          MOMEploymentDetails: "$bothCombined.MOMEploymentDetails",
          nricWorkDocument: "$bothCombined.nricWorkDocument",
          paQuotaCopy: "$bothCombined.paQuotaCopy",
          passportCopy: "$bothCombined.passportCopy",
          workersIc: "$bothCombined.workersIc",
          workersPassport: "$bothCombined.workersPassport",
          skillEvaluationCertificate:
            "$bothCombined.skillEvaluationCertificate",
          companyAddress: "$bothCombined.companyAddress",
          alternateMobile: "$bothCombined.alternateMobile",
          companyName: "$bothCombined.companyName",
          companyUEN: "$bothCombined.companyUEN",
          contactPerson: "$bothCombined.contactPerson",
          contactPersonEmail: "$bothCombined.contactPersonEmail",
          contactPersonMobile: "$bothCombined.contactPersonMobile",
          myeNo: "$bothCombined.myeNo",
          officeFax: "$bothCombined.officeFax",
          officeTelephone: "$bothCombined.officeTelephone",
          paReferenceNo: "$bothCombined.paReferenceNo",
          participantIcNo: "$bothCombined.participantIcNo",
          participantMobile: "$bothCombined.participantMobile",
          participantNRIC: "$bothCombined.participantNRIC",
          postalCode: "$bothCombined.postalCode",
          registrationType: "$bothCombined.registrationType.registrationCode",
          tradeLevel: "$bothCombined.tradeLevelDetails.tradeLevel",
          tradeType: "$bothCombined.tradeType.tradeType",
          participantName: "$bothCombined.participantName",
          DOB: "$bothCombined.DOB",
          nationality: "$bothCombined.nationality",
          educationalLevel: "$bothCombined.educationalLevel",
          coreTradeRegNo: "$bothCombined.coreTradeRegNo",
          status: "$bothCombined.status",
          course: "$bothCombined.course",
        },
      },
    ]);
    return res.status(200).send(company[0]);
  } catch (err) {
    next(err);
  }
};

const getDashboardCustomers = async (req, res, next) => {
  try {
    const dashboardCustomers = await db.lead.aggregate([
      {
        $lookup: {
          from: "courses",
          let: { courseId: "$course" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$courseId", { $toString: "$_id" }],
                },
              },
            },
          ],
          as: "courseDetails",
        },
      },
      {
        $group: {
          _id: {
            contactPerson: "$contactPerson",
            contactPersonEmail: "$contactPersonEmail",
          },
          courseCount: {
            $sum: {
              $cond: [{ $gt: [{ $size: "$courseDetails" }, 0] }, 1, 0],
            },
          },
          completedCount: {
            $sum: {
              $cond: {
                if: {
                  $and: [{ $eq: ["$status", "confirmed"] }],
                },
                then: 1,
                else: 0,
              },
            },
          },
          unCompletedCount: {
            $sum: {
              $cond: {
                if: {
                  $and: [{ $eq: ["$confirmed", false] }],
                },
                then: 1,
                else: 0,
              },
            },
          },
        },
      },

      {
        $project: {
          _id: 0,
          contactPersonEmail: "$_id.contactPersonEmail",
          contactPerson: "$_id.contactPerson",
          courseCount: 1,
          completedCount: 1,
          unCompletedCount: 1,
        },
      },
    ]);
    return res.status(200).send(dashboardCustomers);
  } catch (err) {
    console.error(err);
    next(err);
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
  accountHistory,
  getSelectedLead,
  getFilteredLeads,
  getAllCompanies,
  getCompany,
  getDashboardCustomers,
};
