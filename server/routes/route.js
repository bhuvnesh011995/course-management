const routes = require("express").Router();

routes.use("/roles", require("./roleRoutes"));
routes.use("/permission", require("./permissionRoute"));
routes.use("/users", require("./userRoutes"));
routes.use("/mail", require("./mailRoute"));
routes.use("/leads", require("./leadRoute"));
routes.use("/trades", require("./tradeRoute"));
routes.use("/registrationType", require("./registrationRoute"));
routes.use("/courses", require("./courseRoute"));
routes.use("/class", require("./classRoute"));
routes.use("/trainer", require("./trainerRoute"));
routes.use("/events", require("./eventRoute"));
routes.use("/certificates", require("./certificateRoute"));
routes.use("/generateFile", require("./generateFileRoute"));
routes.use("/quotations", require("./quotationRoute"));
routes.use("/payrolls", require("./payrollRoute"));
routes.use("/timesheets", require("./timeSheetRoute"));
routes.use("/leaves", require("./leaveRoute"));
routes.use("/languages", require("./languageRoute"));
routes.use("/designations", require("./designationRoute"));
routes.use("/constants", require("./constants"));
routes.use("/tradeType", require("./tradeTypeRoute"));
routes.use("/config", require("./configRoute"));

routes.use("/webhook", require("./webhookRoute"));
module.exports = routes;
