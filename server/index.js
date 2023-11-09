const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const init = require("./init");

const app = express();

require("dotenv").config();

require("./configs/database.config");

app.use(cors());
app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb" }));
app.use(express.static("uploads"));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.listen(process.env.PORT, () => {
  console.log(`on port ${process.env.PORT}`);
  init();
});

app.use("/api", require("./routes/route"));
<<<<<<< HEAD


app.use(require("./middlewares/errorHandler"))
=======
>>>>>>> b2f7f70a0057e3f9715fd12b7bdebfecb85102ad
