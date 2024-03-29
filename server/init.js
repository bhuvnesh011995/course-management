const { languagesDataArray } = require("./constants/languageDataConstants");
const db = require("./models");
const adminRole = require("./utils/adminPermission");

module.exports = async () => {
  try {
    let adminrole = await db.roles.findOne({ roleName: "Admin" });
    if (!adminrole) {
      adminrole = await db.roles.create(adminRole);
    }

    let admin = await db.user.findOne({ userRole: adminrole._id });
    if (!admin) {
      const isAdmin = await db.user.findOne({ email: "admin@tonga.com" });

      if (isAdmin)
        await db.user.updateOne(
          { _id: isAdmin._id },
          { $set: { userRole: adminrole._id } },
        );
      else
        await db.user.create({
          name: "admin",
          email: "admin@tonga.com",
          password: "admin@123",
          userRole: adminrole._id,
        });
    }

    // this is for config

    let systemConfig = await db.config.systemConfig.findOne({});

    if (!systemConfig) await db.config.systemConfig.create({});

    let otherConfig = await db.config.otherConfig.findOne({});

    if (!otherConfig) await db.config.otherConfig.create({});

    let [
      TFS,
      TRT,
      TFFS,
      TFRT,
      UFS,
      URT,
      MSF,
      MSRT,
      TT,
      DRT,
      ETT,
      ERT,
      STT,
      SRT,
    ] = await Promise.all([
      db.tradeLevel.findOne({ tradeCode: "TFS" }),
      db.tradeLevel.findOne({ tradeCode: "TRT" }),
      db.tradeLevel.findOne({ tradeCode: "TFFS" }),
      db.tradeLevel.findOne({ tradeCode: "TFRT" }),
      db.tradeLevel.findOne({ tradeCode: "UFS" }),
      db.tradeLevel.findOne({ tradeCode: "URT" }),
      db.tradeLevel.findOne({ tradeCode: "MSF" }),
      db.tradeLevel.findOne({ tradeCode: "MSRT" }),
      db.tradeLevel.findOne({ tradeCode: "TT" }),
      db.tradeLevel.findOne({ tradeCode: "DRT" }),
      db.tradeLevel.findOne({ tradeCode: "ETT" }),
      db.tradeLevel.findOne({ tradeCode: "ERT" }),
      db.tradeLevel.findOne({ tradeCode: "STT" }),
      db.tradeLevel.findOne({ tradeCode: "SRT" }),
    ]);

    if (!TFS)
      TFS = await db.tradeLevel.create({
        tradeLevel: "Tradesman (FC+SA)",
        tradeCode: "TFS",
      });
    if (!TRT)
      TRT = await db.tradeLevel.create({
        tradeLevel: "Tradesman (Re-Test)",
        tradeCode: "TRT",
      });
    if (!TFFS)
      TFFS = await db.tradeLevel.create({
        tradeLevel: "Trade Foreman (FC+SA)",
        tradeCode: "TFFS",
      });
    if (!TFRT)
      TFRT = await db.tradeLevel.create({
        tradeLevel: "Trade Foreman (Re-Test)",
        tradeCode: "TFRT",
      });
    if (!UFS)
      UFS = await db.tradeLevel.create({
        tradeLevel: "Upgrade From Tradesman To Trade Foreman (FC+SA)",
        tradeCode: "UFS",
      });
    if (!URT)
      URT = await db.tradeLevel.create({
        tradeLevel: "Upgrade From Tradesman To Trade Foreman (Re-Test)",
        tradeCode: "URT",
      });
    if (!MSF)
      MSF = await db.tradeLevel.create({
        tradeLevel: "Multi-Skilling (FC+SE)",
        tradeCode: "MSF",
      });
    if (!MSRT)
      MSRT = await db.tradeLevel.create({
        tradeLevel: "Multi-Skilling (Direct-Test / Re-Test",
        tradeCode: "MSRT",
      });
    if (!TT)
      TT = await db.tradeLevel.create({
        tradeLevel: "Training + Test",
        tradeCode: "TT",
      });
    if (!DRT)
      DRT = await db.tradeLevel.create({
        tradeLevel: "Direct Test / Re - Test",
        tradeCode: "DRT",
      });
    if (!ETT)
      ETT = await db.tradeLevel.create({
        tradeLevel: "End-of-course Validation Test - Training + Test",
        tradeCode: "ETT",
      });
    if (!ERT)
      ERT = await db.tradeLevel.create({
        tradeLevel: "End-of-course Validation Test - Re-Test",
        tradeCode: "ERT",
      });
    if (!STT)
      STT = await db.tradeLevel.create({
        tradeLevel: "SEC(K) - Training + Test",
        tradeCode: "STT",
      });
    if (!SRT)
      SRT = await db.tradeLevel.create({
        tradeLevel: "SEC(K) - Re-Test",
        tradeCode: "SRT",
      });

    let [CTD, MSG, SK, CRW, AMN] = await Promise.all([
      db.registrationType.findOne({ registrationCode: "CTD" }),
      db.registrationType.findOne({ registrationCode: "MSG" }),
      db.registrationType.findOne({ registrationCode: "SK" }),
      db.registrationType.findOne({ registrationCode: "CRW" }),
      db.registrationType.findOne({ registrationCode: "AMN" }),
    ]);

    if (!CTD) {
      CTD = await db.registrationType.create({
        registrationName: "CoreTrade",
        registrationCode: "CTD",
        tradeLevelIds: [TFS._id, TRT._id, TFFS._id, TFRT._id, UFS._id, URT._id],
      });
    } else {
      if (!CTD.tradeLevelIds.includes(TFS._id)) {
        await db.registrationType.updateOne(
          { _id: CTD._id },
          {
            $push: { tradeLevelIds: TFS._id },
          },
        );
      }
      if (!CTD.tradeLevelIds.includes(TRT._id)) {
        await db.registrationType.updateOne(
          { _id: CTD._id },
          {
            $push: { tradeLevelIds: TRT._id },
          },
        );
      }

      if (!CTD.tradeLevelIds.includes(TFFS._id)) {
        await db.registrationType.updateOne(
          { _id: CTD._id },
          {
            $push: { tradeLevelIds: TFFS._id },
          },
        );
      }

      if (!CTD.tradeLevelIds.includes(TFRT._id)) {
        await db.registrationType.updateOne(
          { _id: CTD._id },
          {
            $push: { tradeLevelIds: TFRT._id },
          },
        );
      }

      if (!CTD.tradeLevelIds.includes(UFS._id)) {
        await db.registrationType.updateOne(
          { _id: CTD._id },
          {
            $push: { tradeLevelIds: UFS._id },
          },
        );
      }

      if (!CTD.tradeLevelIds.includes(URT._id)) {
        await db.registrationType.updateOne(
          { _id: CTD._id },
          {
            $push: { tradeLevelIds: URT._id },
          },
        );
      }
    }
    if (!MSG) {
      MSG = await db.registrationType.create({
        registrationName: "Multi-Skilling",
        registrationCode: "MSG",
        tradeLevelIds: [MSF._id, MSRT._id],
      });
    } else {
      if (!MSG.tradeLevelIds.includes(MSF._id)) {
        await db.registrationType.updateOne(
          { _id: MSG._id },
          {
            $push: { tradeLevelIds: MSF._id },
          },
        );
      }
      if (!MSG.tradeLevelIds.includes(MSRT._id)) {
        await db.registrationType.updateOne(
          { _id: MSG._id },
          {
            $push: { tradeLevelIds: MSRT._id },
          },
        );
      }
    }
    if (!SK) {
      SK = await db.registrationType.create({
        registrationName: "SEC(K)",
        registrationCode: "SK",
        tradeLevelIds: [TT._id, DRT._id],
      });
    } else {
      if (!SK.tradeLevelIds.includes(TT._id)) {
        await db.registrationType.updateOne(
          { _id: SK._id },
          {
            $push: { tradeLevelIds: TT._id },
          },
        );
      }
      if (!SK.tradeLevelIds.includes(DRT._id)) {
        await db.registrationType.updateOne(
          { _id: SK._id },
          {
            $push: { tradeLevelIds: DRT._id },
          },
        );
      }
    }
    if (!CRW) {
      CRW = await db.registrationType.create({
        registrationName: "CET(Renewal)",
        registrationCode: "CRW",
      });
    }
    if (!AMN) {
      AMN = await db.registrationType.create({
        registrationName: "ALP for Malaysian & NAS",
        registrationCode: "AMN",
        tradeLevelIds: [ETT._id, ERT._id, STT._id, SRT._id],
      });
    } else {
      if (!AMN.tradeLevelIds.includes(ETT._id)) {
        await db.registrationType.updateOne(
          { _id: AMN._id },
          {
            $push: { tradeLevelIds: ETT._id },
          },
        );
      }

      if (!AMN.tradeLevelIds.includes(ERT._id)) {
        await db.registrationType.updateOne(
          { _id: AMN._id },
          {
            $push: { tradeLevelIds: ERT._id },
          },
        );
      }

      if (!AMN.tradeLevelIds.includes(STT._id)) {
        await db.registrationType.updateOne(
          { _id: AMN._id },
          {
            $push: { tradeLevelIds: STT._id },
          },
        );
      }

      if (!AMN.tradeLevelIds.includes(SRT._id)) {
        await db.registrationType.updateOne(
          { _id: AMN._id },
          {
            $push: { tradeLevelIds: SRT._id },
          },
        );
      }
    }

    let [AFE, EWI, PPF, SRW, TL, WP, EW, PPW, RCW, TLFW, WW] =
      await Promise.all([
        db.tradeTypeModel.findOne({ typeCode: "AFE" }),
        db.tradeTypeModel.findOne({ typeCode: "EWI" }),
        db.tradeTypeModel.findOne({ typeCode: "PPF" }),
        db.tradeTypeModel.findOne({ typeCode: "SRW" }),
        db.tradeTypeModel.findOne({ typeCode: "TL" }),
        db.tradeTypeModel.findOne({ typeCode: "WP" }),

        db.tradeTypeModel.findOne({ typeCode: "EW" }),
        db.tradeTypeModel.findOne({ typeCode: "PPW" }),
        db.tradeTypeModel.findOne({ typeCode: "RCW" }),
        db.tradeTypeModel.findOne({ typeCode: "TLFW" }),
        db.tradeTypeModel.findOne({ typeCode: "WW" }),
      ]);

    if (!AFE)
      AFE = await db.tradeTypeModel.create({
        tradeType: "Aluminium Formwork (Enhanced)",
        typeCode: "AFE",
      });
    if (!EWI)
      EWI = await db.tradeTypeModel.create({
        tradeType: "Electrical Wiring Installation",
        typeCode: "EWI",
      });
    if (!PPF)
      PPF = await db.tradeTypeModel.create({
        tradeType: "Plumbing & Pipefitting",
        typeCode: "PPF",
      });
    if (!SRW)
      SRW = await db.tradeTypeModel.create({
        tradeType: "Steel Reinforcement Work",
        typeCode: "SRW",
      });
    if (!TL)
      TL = await db.tradeTypeModel.create({
        tradeType: "Tiling",
        typeCode: "TL",
      });
    if (!WP)
      WP = await db.tradeTypeModel.create({
        tradeType: "Waterproofing",
        typeCode: "WP",
      });

    if (!EW) {
      EW = await db.tradeTypeModel.create({
        tradeType: "Electrical Works",
        typeCode: "EW",
        isCet: CRW._id,
      });
    } else {
      await db.tradeTypeModel.updateOne({ _id: EW._id }, { isCet: CRW._id });
    }
    if (!PPW) {
      PPW = await db.tradeTypeModel.create({
        tradeType: "Plumbing & Piping Works",
        typeCode: "PPW",
        isCet: CRW._id,
      });
    } else {
      await db.tradeTypeModel.updateOne({ _id: PPW._id }, { isCet: CRW._id });
    }
    if (!RCW) {
      RCW = await db.tradeTypeModel.create({
        tradeType: "Reinforced Concrete Works",
        typeCode: "RCW",
        isCet: CRW._id,
      });
    } else {
      await db.tradeTypeModel.updateOne({ _id: RCW._id }, { isCet: CRW._id });
    }
    if (!TLFW) {
      TLFW = await db.tradeTypeModel.create({
        tradeType: "Tiling Stone Laying & Floor Finishing Works",
        typeCode: "TLFW",
        isCet: CRW._id,
      });
    } else {
      await db.tradeTypeModel.updateOne({ _id: TLFW._id }, { isCet: CRW._id });
    }
    if (!WW) {
      WW = await db.tradeTypeModel.create({
        tradeType: "Waterproofing Works",
        typeCode: "WW",
        isCet: CRW._id,
      });
    } else {
      await db.tradeTypeModel.updateOne({ _id: WW._id }, { isCet: CRW._id });
    }

    const getLanguages = await db.language.find({});
    if (!getLanguages.length) {
      for (let language of languagesDataArray) {
        await db.language.create(language);
      }
    }
  } catch (error) {
    console.error(error);
  }
};
