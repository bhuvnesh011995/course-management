const LeadModel = require("../models/newLeadModel");
const { sendMail } = require("../managers/mailManager");
const fs = require("fs");
const courseModel = require("../models/courseModel");

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
    const allLeads = await LeadModel
      // .find({});
      .aggregate([
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
    return { leads: allLeads, user };
  } catch (err) {
    console.error(err);
  }
};

const updateLead = async ({ query, files }) => {
  try {
    console.log(files);
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
    const sendMailObj = {
      email: data.contactPersonEmail,
      subject: "Confirm Course Details and Confirm Payment !",
      mailValue: `<button>get Payment Status</button><br>\n
      <p><strong>Tonga</strong> <br>\n`,
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
      // {
      //   $lookup: {},
      // },
      {
        $project: {
          _id: 1,
          course: "$courseDetails.courseName",
        },
      },
    ]);
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
};
