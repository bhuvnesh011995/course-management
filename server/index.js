const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

require("dotenv").config();

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

mongoose.connect("mongodb://127.0.0.1:27017/tongaDb1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api", require("./routes/route"));
