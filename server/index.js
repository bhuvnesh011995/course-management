const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

require("dotenv").config();

require("./configs/database.config");

app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.listen(process.env.PORT, () => {
  console.log(`on port ${process.env.PORT}`);
});

app.use("/api", require("./routes/route"));
