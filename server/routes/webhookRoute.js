const routes = require("express").Router();
const webhookScripts = require("../scripts/webhookLeadScript");

routes.post("/fetchLeadsData", webhookScripts.fetchLeadsData);

module.exports = routes;
