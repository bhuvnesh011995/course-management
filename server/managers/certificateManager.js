const CertificateModel = require("../models/certificateModel");

const addCertificate = async (data) => {
  try {
    const newCertificate = await CertificateModel.create(data);
    const addedCertificate = await newCertificate.save();
    return addedCertificate;
  } catch (err) {
    console.error(err);
  }
};

const getCertificate = async (data) => {
  try {
    const selectedCertificate = await CertificateModel.find({ _id: data._id });
    return selectedCertificate[0];
  } catch (err) {
    console.error(err);
  }
};

const getCertificates = async (data) => {
  try {
  } catch (err) {
    console.error(err);
  }
};

const updateCertificate = async (data) => {
  try {
  } catch (err) {
    console.error(err);
  }
};

const deleteCertificate = async (data) => {
  try {
    const deleteSelectedCert = await CertificateModel.deleteOne({
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
