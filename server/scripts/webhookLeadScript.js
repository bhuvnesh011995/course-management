const path = require("path");
const fs = require("fs");
const db = require("../models/index");

async function fetchLeadsData(req, res, next) {
  try {
    const filePath = path.join(
      __dirname + "../",
      "../uploads/images",
      "webhook.log",
    );
    const leadObj = {
      fileLocations: {
        passportCopy: "",
        notice: "",
        nric: "",
        MOME: "",
        skill: "",
        pa: "",
        ISC: "",
        workersPassport: "",
      },
    };
    const objData = JSON.parse(
      '{"data" :{"Form":{"FormID":"5155773","VisitID":"3qDckL3ViRXaNTp0fx","Name":"CoreTrade Registration Form"},"Entry":{"ID":"6150","DateSubmitted":"2023-12-26 06:26:53","FromIp":"20.197.47.121","Status":"submitted","HttpReferer":"https:\\/\\/app.emailmeform.com\\/"},"UserFields":{"77335320":{"Name":"COMPANY INFORMATION","Value":null},"77335321":{"Name":"Company Name","Value":"temporary company"},"77335322":{"Name":"Company UEN No.","Value":"companyuen"},"77335323":{"Name":"Company Address","Value":"companyaddress"},"77335324":{"Name":"Postal Code","Value":"Singapore"},"77336246":{"Name":"Contact Person","Value":"contact person"},"77336247":{"Name":"Contact Person\'s Mobile","Value":"0987654321"},"77336343":{"Name":"Contact Person\'s Email Address","Value":"temporary@gmail.com"},"77336430":{"Name":"Office Telephone No.","Value":"09876543"},"77336431":{"Name":"Office Fax No.","Value":"87654321"},"77336694":{"Name":"PARTICIPANT\'S PARTICULAR","Value":null},"77336695":{"Name":"Name Of Participant","Value":"participant"},"77336696":{"Name":"Participant\'s NRIC \\/ FIN No.","Value":"participa"},"77338060":{"Name":"Participant\'s Mobile","Value":"0987654321"},"77338179":{"Name":"Alternate Mobile Number (if any)","Value":""},"77336718":{"Name":"Trade Type","Value":"Aluminium Formwork (Enhanced)"},"77336697":{"Name":"Trade Level","Value":"Tradesman (FC+SA)"},"77337494":{"Name":"DOCUMENTS REQUIRED (Max upload file size: 2MB\\/2048kb)","Value":null},"77337495":{"Name":"Valid BCA Acknowledgement Notice","Value":[{"filename":"TongaImage1701892263010ijuhgtf-certificate-20.pdf","url":"https:\\/\\/files.emailmeform.com\\/892517\\/BhvrVUlc\\/TongaImage1701892263010ijuhgtf-certificate-20.pdf","size":868483}]},"77337496":{"Name":"Valid Copy Of NRIC \\/ Work Pass","Value":[{"filename":"TongaImage1701892263010ijuhgtf-certificate-20.pdf","url":"https:\\/\\/files.emailmeform.com\\/892517\\/BJOtZMmz\\/TongaImage1701892263010ijuhgtf-certificate-20.pdf","size":868483}]},"77337506":{"Name":"Valid Copy Of Passport","Value":[{"filename":"TongaImage1701892263010ijuhgtf-certificate-20.pdf","url":"https:\\/\\/files.emailmeform.com\\/892517\\/OBREmjYb\\/TongaImage1701892263010ijuhgtf-certificate-20.pdf","size":868483}]},"77337507":{"Name":"Valid Copy Of MOM Employment Details","Value":[{"filename":"TongaImage1701892263010ijuhgtf-certificate-20.pdf","url":"https:\\/\\/files.emailmeform.com\\/892517\\/IoTcbAfO\\/TongaImage1701892263010ijuhgtf-certificate-20.pdf","size":868483}]},"77337807":{"Name":"Declaration(s)","Value":null},"77337808":{"Name":"(i)","Value":"I\\/We understand that if above listed applicant BCA acknowledgement notice and work passes expires on the test date, he\\/she will not be allowed to take the test and there will be no refund for the course and test fees paid."},"77338002":{"Name":"(ii)","Value":"I\\/We understand that SANTARLI ATTC reserves the right to amend the details in this brochure, revise the test fee without prior notice, cancel or postpone the test due to unforeseen circumstances."},"77338003":{"Name":"(iii)","Value":"I\\/We agreed to allow SANTARLI ATTC to disclose to BCA any information relating to me\\/us in connection with, arising form or relating to this application, including but not limited to my\\/our personal particulars."},"77338004":{"Name":"(iv)","Value":"I\\/We agreed to allow BCA to disclose to other government agencies and\\/or the Government any information relating to me\\/us in connection with, arising from or relating to this application, including but not limited to my\\/our personal particulars."}}}}',
    );

    const webhookData = objData.data;

    if (webhookData.Form.FormID == "5155773") {
      const registrationType = await db.registrationType.findOne({
        registrationCode: "CTD",
      });
      const webhookFormData = webhookData.UserFields;
      if (registrationType) {
        if (webhookFormData["77335321"]?.Value) {
          leadObj["companyName"] = webhookFormData["77335321"]?.Value;
        }
        if (webhookFormData["77335322"]?.Value) {
          leadObj["companyUEN"] = webhookFormData["77335322"]?.Value;
        }
        if (webhookFormData["77335323"]?.Value) {
          leadObj["companyAddress"] = webhookFormData["77335323"]?.Value;
        }
        if (webhookFormData["77335324"]?.Value) {
          leadObj["postalCode"] = webhookFormData["77335324"]?.Value;
        }
        if (webhookFormData["77336246"]?.Value) {
          leadObj["contactPerson"] = webhookFormData["77336246"]?.Value;
        }
        if (webhookFormData["77336247"]?.Value) {
          leadObj["contactPersonMobile"] = webhookFormData["77336247"]?.Value;
        }
        if (webhookFormData["77336343"]?.Value) {
          leadObj["contactPersonEmail"] = webhookFormData["77336343"]?.Value;
        }
        if (webhookFormData["77336430"]?.Value) {
          leadObj["officeTelephone"] = webhookFormData["77336430"]?.Value;
        }
        if (webhookFormData["77336431"]?.Value) {
          leadObj["officeFax"] = webhookFormData["77336431"]?.Value;
        }
        if (webhookFormData["77336695"]?.Value) {
          leadObj["participantName"] = webhookFormData["77336695"]?.Value;
        }
        if (webhookFormData["77336696"]?.Value) {
          leadObj["participantNRIC"] = webhookFormData["77336696"]?.Value;
        }
        if (webhookFormData["77336697"]?.Value) {
          const tradeLevelData = await db.tradeLevel.findOne({
            tradeLevel: webhookFormData["77336697"]?.Value,
          });
          if (tradeLevelData) leadObj["tradeLevel"] = tradeLevelData._id;
        }
        if (webhookFormData["77336718"]?.Value) {
          const tradeTypeData = await db.tradeTypeModel.findOne({
            tradeType: webhookFormData["77336718"]?.Value,
          });
          if (tradeTypeData) leadObj["tradeType"] = tradeTypeData._id;
        }
        if (webhookFormData["77337495"]?.Value) {
          leadObj["bcaAcknowledgementNotice"] =
            webhookFormData["77337495"]?.Value[0].url;
          leadObj.fileLocations.notice =
            webhookFormData["77337495"]?.Value[0].filename;
        }
        if (webhookFormData["77337496"]?.Value) {
          leadObj["nricWorkDocument"] =
            webhookFormData["77337496"]?.Value[0].url;
          leadObj.fileLocations.nric =
            webhookFormData["77337496"]?.Value[0].filename;
        }
        if (webhookFormData["77337506"]?.Value) {
          leadObj["passportCopy"] = webhookFormData["77337506"]?.Value[0].url;
          leadObj.fileLocations.passportCopy =
            webhookFormData["77337506"]?.Value[0].filename;
        }
        if (webhookFormData["77337507"]?.Value) {
          leadObj["MOMEploymentDetails"] =
            webhookFormData["77337507"]?.Value[0].url;
          leadObj.fileLocations.MOME =
            webhookFormData["77337507"]?.Value[0].filename;
        }
      }
    }

    console.log(leadObj);
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  fetchLeadsData,
};
