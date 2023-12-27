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

    const webhookData = req.body.data;
    const webhookFormData = webhookData.UserFields;
    if (webhookData.Form.FormID == "5155773") {
      const registrationType = await db.registrationType.findOne({
        registrationCode: "CTD",
      });
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
        if (webhookFormData["77338060"]?.Value) {
          leadObj["participantMobile"] = webhookFormData["77338060"]?.Value;
        }
        if (webhookFormData["77338179"]?.Value) {
          leadObj["alternateMobile"] = webhookFormData["77338179"]?.Value;
        }
      }
    } else if (webhookData.Form.FormID == "5156253") {
      const registrationType = await db.registrationType.findOne({
        registrationCode: "CRW",
      });
      if (registrationType) {
        leadObj["registrationType"] = registrationType._id;
        if (webhookFormData["77340965"]?.Value) {
          leadObj["companyName"] = webhookFormData["77340965"]?.Value;
        }
        if (webhookFormData["77340966"]?.Value) {
          leadObj["companyUEN"] = webhookFormData["77340966"]?.Value;
        }
        if (webhookFormData["77340967"]?.Value) {
          leadObj["companyAddress"] = webhookFormData["77340967"]?.Value;
        }
        if (webhookFormData["77340968"]?.Value) {
          leadObj["postalCode"] = webhookFormData["77340968"]?.Value;
        }
        if (webhookFormData["77340969"]?.Value) {
          leadObj["contactPerson"] = webhookFormData["77340969"]?.Value;
        }
        if (webhookFormData["77340970"]?.Value) {
          leadObj["contactPersonMobile"] = webhookFormData["77340970"]?.Value;
        }
        if (webhookFormData["77340971"]?.Value) {
          leadObj["contactPersonEmail"] = webhookFormData["77340971"]?.Value;
        }
        if (webhookFormData["77340972"]?.Value) {
          leadObj["officeTelephone"] = webhookFormData["77340972"]?.Value;
        }
        if (webhookFormData["77340973"]?.Value) {
          leadObj["officeFax"] = webhookFormData["77340973"]?.Value;
        }
        if (webhookFormData["77340975"]?.Value) {
          leadObj["participantName"] = webhookFormData["77340975"]?.Value;
        }
        if (webhookFormData["77340976"]?.Value) {
          leadObj["participantNRIC"] = webhookFormData["77340976"]?.Value;
        }
        if (webhookFormData["77340977"]?.Value) {
          leadObj["participantMobile"] = webhookFormData["77340977"]?.Value;
        }
        if (webhookFormData["77340978"]?.Value) {
          leadObj["alternateMobile"] = webhookFormData["77340978"]?.Value;
        }
        if (webhookFormData["77340979"]?.Value) {
          const tradeTypeData = await db.tradeTypeModel.findOne({
            tradeType: webhookFormData["77340979"]?.Value,
          });
          leadObj["tradeType"] = tradeTypeData._id;
        }
        if (webhookFormData["77340982"]?.Value) {
          leadObj["bcaAcknowledgementNotice"] =
            webhookFormData["77340982"]?.Value[0].filename;
          leadObj.fileLocations.notice =
            webhookFormData["77340982"]?.Value[0].url;
        }
        if (webhookFormData["77340983"]?.Value) {
          leadObj["nricWorkDocument"] =
            webhookFormData["77340983"]?.Value[0].filename;
          leadObj.fileLocations.nric =
            webhookFormData["77340983"]?.Value[0].url;
        }
        if (webhookFormData["77341191"]?.Value) {
          leadObj["coreTradeRegNo"] = webhookFormData["77341191"]?.Value;
        }
        await db.lead.create(leadObj);
      }
    } else if (webhookData.Form.FormID == "5156285") {
      const registrationType = await db.registrationType.findOne({
        registrationCode: "MSG",
      });
      if (registrationType) {
        leadObj["registrationType"] = registrationType._id;
        if (webhookFormData["77341321"]?.Value) {
          leadObj["companyName"] = webhookFormData["77341321"]?.Value;
        }
        if (webhookFormData["77341322"]?.Value) {
          leadObj["companyUEN"] = webhookFormData["77341322"]?.Value;
        }
        if (webhookFormData["77341323"]?.Value) {
          leadObj["companyAddress"] = webhookFormData["77341323"]?.Value;
        }
        if (webhookFormData["77341324"]?.Value) {
          leadObj["postalCode"] = webhookFormData["77341324"]?.Value;
        }
        if (webhookFormData["77341325"]?.Value) {
          leadObj["contactPerson"] = webhookFormData["77341325"]?.Value;
        }
        if (webhookFormData["77341326"]?.Value) {
          leadObj["contactPersonMobile"] = webhookFormData["77341326"]?.Value;
        }
        if (webhookFormData["77341327"]?.Value) {
          leadObj["contactPersonEmail"] = webhookFormData["77341327"]?.Value;
        }
        if (webhookFormData["77341328"]?.Value) {
          leadObj["officeTelephone"] = webhookFormData["77341328"]?.Value;
        }
        if (webhookFormData["77341329"]?.Value) {
          leadObj["officeFax"] = webhookFormData["77341329"]?.Value;
        }
        if (webhookFormData["77341331"]?.Value) {
          leadObj["participantName"] = webhookFormData["77341331"]?.Value;
        }
        if (webhookFormData["77341332"]?.Value) {
          leadObj["participantNRIC"] = webhookFormData["77341332"]?.Value;
        }
        if (webhookFormData["77341333"]?.Value) {
          leadObj["participantMobile"] = webhookFormData["77341333"]?.Value;
        }
        if (webhookFormData["77341334"]?.Value) {
          leadObj["alternateMobile"] = webhookFormData["77341334"]?.Value;
        }
        if (webhookFormData["77341335"]?.Value) {
          const tradeTypeData = await db.tradeTypeModel.findOne({
            tradeType: webhookFormData["77341335"]?.Value,
          });
          leadObj["tradeType"] = tradeTypeData._id;
        }
        if (webhookFormData["77341336"]?.Value) {
          const tradeLevelData = await db.tradeLevel.findOne({
            tradeLevel: webhookFormData["77341336"]?.Value,
          });
          leadObj["tradeLevel"] = tradeLevelData._id;
        }
        if (webhookFormData["77341338"]?.Value) {
          leadObj["bcaAcknowledgementNotice"] =
            webhookFormData["77341338"]?.Value[0].filename;
          leadObj.fileLocations.notice =
            webhookFormData["77341338"]?.Value[0].url;
        }
        if (webhookFormData["77341339"]?.Value) {
          leadObj["nricWorkDocument"] =
            webhookFormData["77341339"]?.Value[0].filename;
          leadObj.fileLocations.nric =
            webhookFormData["77341339"]?.Value[0].url;
        }
        if (webhookFormData["77341340"]?.Value) {
          leadObj["passportCopy"] =
            webhookFormData["77341340"]?.Value[0].filename;
          leadObj.fileLocations.passportCopy =
            webhookFormData["77341340"]?.Value[0].url;
        }
        if (webhookFormData["77341341"]?.Value) {
          leadObj["MOMEploymentDetails"] =
            webhookFormData["77341341"]?.Value[0].filename;
          leadObj.fileLocations.MOME =
            webhookFormData["77341341"]?.Value[0].url;
        }
        if (webhookFormData["77341510"]?.Value) {
          leadObj["skillEvaluationCertificate"] =
            webhookFormData["77341510"]?.Value[0].filename;
          leadObj.fileLocations.skill =
            webhookFormData["77341510"]?.Value[0].url;
        }
        await db.lead.create(leadObj);
      }
    } else if (webhookData.Form.FormID == "5156306") {
      const registrationType = await db.registrationType.findOne({
        registrationCode: "SK",
      });
      if (registrationType) {
        leadObj["registrationType"] = registrationType._id;
        if (webhookFormData["77341585"]?.Value) {
          leadObj["companyName"] = webhookFormData["77341585"]?.Value;
        }
        if (webhookFormData["77341586"]?.Value) {
          leadObj["companyUEN"] = webhookFormData["77341586"]?.Value;
        }
        if (webhookFormData["77341587"]?.Value) {
          leadObj["companyAddress"] = webhookFormData["77341587"]?.Value;
        }
        if (webhookFormData["77341588"]?.Value) {
          leadObj["postalCode"] = webhookFormData["77341588"]?.Value;
        }
        if (webhookFormData["77341589"]?.Value) {
          leadObj["contactPerson"] = webhookFormData["77341589"]?.Value;
        }
        if (webhookFormData["77341590"]?.Value) {
          leadObj["contactPersonMobile"] = webhookFormData["77341590"]?.Value;
        }
        if (webhookFormData["77341591"]?.Value) {
          leadObj["contactPersonEmail"] = webhookFormData["77341591"]?.Value;
        }
        if (webhookFormData["77341592"]?.Value) {
          leadObj["officeTelephone"] = webhookFormData["77341592"]?.Value;
        }
        if (webhookFormData["77341593"]?.Value) {
          leadObj["officeFax"] = webhookFormData["77341593"]?.Value;
        }
        if (webhookFormData["77341595"]?.Value) {
          leadObj["participantName"] = webhookFormData["77341595"]?.Value;
        }
        if (webhookFormData["77341596"]?.Value) {
          leadObj["participantNRIC"] = webhookFormData["77341596"]?.Value;
        }
        if (webhookFormData["77341597"]?.Value) {
          leadObj["participantMobile"] = webhookFormData["77341597"]?.Value;
        }
        if (webhookFormData["77341598"]?.Value) {
          leadObj["alternateMobile"] = webhookFormData["77341598"]?.Value;
        }
        if (webhookFormData["77341599"]?.Value) {
          const tradeTypeData = await db.tradeTypeModel.findOne({
            tradeType: webhookFormData["77341599"]?.Value,
          });
          leadObj["tradeType"] = tradeTypeData._id;
        }
        if (webhookFormData["77341600"]?.Value) {
          const tradeLevelData = await db.tradeLevel.findOne({
            tradeLevel: webhookFormData["77341600"]?.Value,
          });
          leadObj["tradeLevel"] = tradeLevelData._id;
        }
        if (webhookFormData["77341604"]?.Value) {
          leadObj["nricWorkDocument"] =
            webhookFormData["77341604"]?.Value[0].filename;
          leadObj.fileLocations.nric =
            webhookFormData["77341604"]?.Value[0].url;
        }
        if (webhookFormData["77341605"]?.Value) {
          leadObj["passportCopy"] =
            webhookFormData["77341605"]?.Value[0].filename;
          leadObj.fileLocations.passportCopy =
            webhookFormData["77341605"]?.Value[0].url;
        }
        if (webhookFormData["77341606"]?.Value) {
          leadObj["MOMEploymentDetails"] =
            webhookFormData["77341606"]?.Value[0].filename;
          leadObj.fileLocations.MOME =
            webhookFormData["77341606"]?.Value[0].url;
        }
        await db.lead.create(leadObj);
      }
    } else if (webhookData.Form.FormID == "5679989") {
      const registrationType = await db.registrationType.findOne({
        registrationCode: "AMN",
      });
      if (registrationType) {
        leadObj["registrationType"] = registrationType._id;
        if (webhookFormData["85079557"]?.Value) {
          leadObj["companyName"] = webhookFormData["85079557"]?.Value;
        }
        if (webhookFormData["85079558"]?.Value) {
          leadObj["companyUEN"] = webhookFormData["85079558"]?.Value;
        }
        if (webhookFormData["85079559"]?.Value) {
          leadObj["companyAddress"] = webhookFormData["85079559"]?.Value;
        }
        if (webhookFormData["85079560"]?.Value) {
          leadObj["postalCode"] = webhookFormData["85079560"]?.Value;
        }
        if (webhookFormData["85079561"]?.Value) {
          leadObj["contactPerson"] = webhookFormData["85079561"]?.Value;
        }
        if (webhookFormData["85079562"]?.Value) {
          leadObj["contactPersonMobile"] = webhookFormData["85079562"]?.Value;
        }
        if (webhookFormData["85079563"]?.Value) {
          leadObj["contactPersonEmail"] = webhookFormData["85079563"]?.Value;
        }
        if (webhookFormData["85079564"]?.Value) {
          leadObj["officeTelephone"] = webhookFormData["85079564"]?.Value;
        }
        if (webhookFormData["85079565"]?.Value) {
          leadObj["officeFax"] = webhookFormData["85079565"]?.Value;
        }
        if (webhookFormData["85079567"]?.Value) {
          leadObj["myeNo"] = webhookFormData["85079567"]?.Value;
        }
        if (webhookFormData["85079568"]?.Value) {
          leadObj["paReferenceNo"] = webhookFormData["85079568"]?.Value;
        }
        if (webhookFormData["85079570"]?.Value) {
          leadObj["participantName"] = webhookFormData["85079570"]?.Value;
        }
        if (webhookFormData["85079571"]?.Value) {
          leadObj["participantIcNo"] = webhookFormData["85079571"]?.Value;
        }
        if (webhookFormData["85079572"]?.Value) {
          leadObj["DOB"] = webhookFormData["85079572"]?.Value;
        }
        if (webhookFormData["85079573"]?.Value) {
          leadObj["nationality"] = webhookFormData["85079573"]?.Value;
        }
        if (webhookFormData["85079576"]?.Value) {
          let tradeTypeData;
          if (
            webhookFormData["85079576"]?.Value ==
            "Electrical Wiring Installation 电器线路铺设"
          ) {
            tradeTypeData = await db.tradeTypeModel.findOne({
              tradeType: "Electrical Wiring Installation",
            });
          } else if (
            webhookFormData["85079576"]?.Value ==
            "Aluminium Formwork (Enhanced) 铝合金组装"
          ) {
            tradeTypeData = await db.tradeTypeModel.findOne({
              tradeType: "Aluminium Formwork (Enhanced)",
            });
          } else if (
            webhookFormData["85079576"]?.Value ==
            "Plumbing & Pipefitting 卫生管道安装"
          ) {
            tradeTypeData = await db.tradeTypeModel.findOne({
              tradeType: "Plumbing & Pipefitting",
            });
          } else if (
            webhookFormData["85079576"]?.Value ==
            "Steel Reinforcement Work 钢筋制扎k"
          ) {
            tradeTypeData = await db.tradeTypeModel.findOne({
              tradeType: "Steel Reinforcement Work",
            });
          } else if (webhookFormData["85079576"]?.Value == "Tiling 铺瓷砖") {
            tradeTypeData = await db.tradeTypeModel.findOne({
              tradeType: "Tiling",
            });
          }
          leadObj["tradeType"] = tradeTypeData._id;
        }
        if (webhookFormData["85079575"]?.Value) {
          let tradeLevelData;
          if (
            webhookFormData["85079575"]?.Value ==
            "End-of-course Validation Test - Training + Test 验证考核 - 培训与考核"
          ) {
            tradeLevelData = await db.tradeLevel.findOne({
              tradeLevel: "End-of-course Validation Test - Training + Test",
            });
          } else if (
            webhookFormData["85079575"]?.Value ==
            "End-of-course Validation Test - Re-Test 验证考核 - 再测验"
          ) {
            tradeLevelData = await db.tradeLevel.findOne({
              tradeLevel: "End-of-course Validation Test - Re-Test",
            });
          } else if (
            webhookFormData["85079575"]?.Value ==
            "SEC(K) - Training + Test 技能考核 - 培训与考核"
          ) {
            tradeLevelData = await db.tradeLevel.findOne({
              tradeLevel: "SEC(K) - Training + Test",
            });
          } else if (
            webhookFormData["85079575"]?.Value ==
            "SEC(K) - Re-Test 技能考核 - 再测验"
          ) {
            tradeLevelData = await db.tradeLevel.findOne({
              tradeLevel: "SEC(K) - Re-Test",
            });
          }
          leadObj["tradeLevel"] = tradeLevelData._id;
        }
        if (webhookFormData["85079580"]?.Value) {
          leadObj["educationalLevel"] = webhookFormData["85079580"]?.Value;
        }

        if (webhookFormData["85079583"]?.Value) {
          leadObj["paQuotaCopy"] =
            webhookFormData["85079583"]?.Value[0].filename;
          leadObj.fileLocations.pa = webhookFormData["85079583"]?.Value[0].url;
        }
        if (webhookFormData["85079584"]?.Value) {
          leadObj["workersIc"] = webhookFormData["85079584"]?.Value[0].filename;
          leadObj.fileLocations.ISC = webhookFormData["85079584"]?.Value[0].url;
        }
        if (webhookFormData["85079585"]?.Value) {
          leadObj["workersPassport"] =
            webhookFormData["85079585"]?.Value[0].filename;
          leadObj.fileLocations.workersPassport =
            webhookFormData["85079585"]?.Value[0].url;
        }
        console.log(leadObj);
        await db.lead.create(leadObj);
      }
    }

    res.status(200).send({ message: "lead created successfully" });
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  fetchLeadsData,
};
