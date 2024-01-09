const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const init = require("./init");
const path = require("path");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();

require("dotenv").config();

require("./configs/database.config");
app.use(bodyParser.json({ limit: "50mb" }));

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// app.use(passport.initialize());
// app.use(passport.session());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);
app.use(express.json({ limit: "50mb", type: "application/json" }));
// app.use(express.static("uploads"));

app.use(express.static(path.join(__dirname, "uploads")));

app.listen(process.env.PORT, () => {
  console.log(`on port ${process.env.PORT}`);
  init();
});

app.use("/api", require("./routes/route"));

app.use(require("./middlewares/errorHandler"));
