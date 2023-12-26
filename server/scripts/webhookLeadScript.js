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
    let logMessage = JSON.stringify(req.body, 5, null);

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
