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

    let logMessage;

    logMessage += JSON.stringify(req?.body, 2, null);
    logMessage += JSON.stringify(req?.query, 2, null);
    logMessage += JSON.stringify(req?.params, 2, null);
    logMessage += JSON.stringify(req, 2, null);
    const data = await db.lead.find({});

    console.log(data);

    fs.appendFile(filePath, logMessage, (err) => {
      if (err) {
        console.error("Error writing to log file:", err);
      } else {
        console.log("Log written to file:", filePath);
      }
    });
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  fetchLeadsData,
};
