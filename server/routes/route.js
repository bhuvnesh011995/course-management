const routes = require("express").Router();

routes.use("/roles", require("./roleRoutes"));
routes.use("/permission", require("./permissionRoute"));
routes.use("/users", require("./userRoutes"));
routes.use("/mail", require("./mailRoute"));
routes.use("/leads", require("./leadRoute"));
routes.use("/trades", require("./tradeRoute"));
routes.use("/registrationType", require("./registrationRoute"));

module.exports = routes;
