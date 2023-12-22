const routes = require("express").Router();
const webhookScripts = require("../scripts/webhookLeadScript");
const { upload } = require("../utils/upload.utils");

routes.post("/fetchLeadsData", upload.any(), webhookScripts.fetchLeadsData);

module.exports = routes;
