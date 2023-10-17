const LeadModel = require("../models/newLeadModel");
const fs = require("fs");
const addNewLead = async ({ query, files, user }) => {
  try {
    const fileLocations = [];
    for (let file of files) {
      fileLocations.push({
        originalname: file.originalname,
        mimetype: file.mimetype,
        path: `images/${file.filename}`,
      });
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

const updateLead = async (data) => {
  try {
    const updateLead = await LeadModel.updateOne(
      { _id: data._id },
      {
        companyAddress: data.companyAddress,
        alternateMobile: data.alternateMobile,
        companyName: data.companyName,
        companyUEN: data.companyUEN,
        contactPerson: data.contactPerson,
        contactPersonEmail: data.contactPersonEmail,
        contactPersonMobile: data.contactPersonMobile,
        myeNo: data.myeNo,
        officeFax: data.officeFax,
        officeTelephone: data.officeTelephone,
        paReferenceNo: data.paReferenceNo,
        participantIcNo: data.participantIcNo,
        participantMobile: data.participantMobile,
        participantNRIC: data.participantNRIC,
        postalCode: data.postalCode,
        registrationType: data.registrationType,
        tradeLevel: data.tradeLevel,
        tradeType: data.tradeType,
        participantName: data.participantName,
        nationality: data.nationality,
      }
    );
    return { message: "Lead Updated Successfully" };
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

module.exports = {
  addNewLead,
  getAllLeads,
  updateLead,
  deleteLead,
};
