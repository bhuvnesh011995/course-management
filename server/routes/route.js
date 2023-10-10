const routes = require("express").Router();

routes.use("/roles", require("./roleRoutes"));
routes.use("/permission", require("./permissionRoute"));
routes.use("/users", require("./userRoutes"));
routes.use("/mail", require("./mailRoute"));

module.exports = routes;
