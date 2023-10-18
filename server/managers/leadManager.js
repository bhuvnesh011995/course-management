const LeadModel = require("../models/newLeadModel");
const { sendMail } = require("../managers/mailManager");
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
    if (query.registrationType == "CTD") {
      fileLocations.passportCopy = `images/${files[0].filename}`;
      fileLocations.notice = `images/${files[1].filename}`;
      fileLocations.nric = `images/${files[2].filename}`;
      fileLocations.MOME = `images/${files[3].filename}`;
    } else if (query.registrationType == "MSG") {
      fileLocations.passportCopy = `images/${files[0].filename}`;
      fileLocations.notice = `images/${files[1].filename}`;
      fileLocations.nric = `images/${files[2].filename}`;
      fileLocations.MOME = `images/${files[3].filename}`;
      fileLocations.skill = `images/${files[4].filename}`;
    } else if (query.registrationType == "SK") {
      fileLocations.passportCopy = `images/${files[0].filename}`;
      fileLocations.nric = `images/${files[1].filename}`;
      fileLocations.MOME = `images/${files[2].filename}`;
    } else if (query.registrationType == "CRW") {
      fileLocations.notice = `images/${files[0].filename}`;
      fileLocations.nric = `images/${files[1].filename}`;
    } else if (query.registrationType == "AMN") {
      fileLocations.pa = `images/${files[0].filename}`;
      fileLocations.ISC = `images/${files[1].filename}`;
      fileLocations.workersPassport = `images/${files[2].filename}`;
    }
    query["fileLocations"] = fileLocations;
    const newLead = await LeadModel.create(query);
    const lead = await newLead.save();
    return { message: "lead saved successfully !", newLead: lead };
  } catch (err) {
    console.error(err);
  }
};

const getAllLeads = async (user) => {
  try {
    const allLeads = await LeadModel.find({});
    return { leads: allLeads, user };
  } catch (err) {
    console.error(err);
  }
};

const updateLead = async ({ query, files }) => {
  try {
    if (query.registrationType == "CTD") {
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
    } else if (query.registrationType == "MSG") {
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
    } else if (query.registrationType == "SK") {
      for (let file of files) {
        if (!query.fileLocations.passportCopy.length) {
          query.fileLocations.passportCopy = `images/${file.filename}`;
        } else if (!query.fileLocations.nric.length) {
          query.fileLocations.nric = `images/${file.filename}`;
        } else if (!query.fileLocations.MOME.length) {
          query.fileLocations.MOME = `images/${file.filename}`;
        }
      }
    } else if (query.registrationType == "CRW") {
      for (let file of files) {
        if (!query.fileLocations.notice.length) {
          query.fileLocations.notice = `images/${file.filename}`;
        } else if (!query.fileLocations.nric.length) {
          query.fileLocations.nric = `images/${file.filename}`;
        }
      }
    } else if (query.registrationType == "AMN") {
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
      }
    );
    const updatedLead = await LeadModel.findOne({ _id: query._id });
    return { updatedLead: updatedLead, message: "Lead Updated Successfully" };
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

module.exports = {
  addNewLead,
  getAllLeads,
  updateLead,
  deleteLead,
  getLead,
  getPayment,
  confirmPayment,
};
