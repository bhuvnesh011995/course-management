// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const init = require("./init");
// const path = require("path");
// const bodyParser = require("body-parser");
// const passport = require("passport");
// const app = express();

// require("dotenv").config();

// require("./configs/database.config");
// app.use(bodyParser.json({ limit: "50mb" }));

// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// // app.use(passport.initialize());
// // app.use(passport.session());

// app.use(
//   cors({
//     origin: "*",
//     credentials: true,
//   }),
// );

// // app.use(function (req, res, next) {
// //   res.header("Access-Control-Allow-Origin", "*");
// //   res.header(
// //     "Access-Control-Allow-Methods",
// //     "GET, POST, OPTIONS, PUT, PATCH, DELETE",
// //   );
// //   res.header(
// //     "Access-Control-Allow-Headers",
// //     "Origin, X-Requested-With, Content-Type, Accept",
// //   );
// //   next();
// // });

// app.use(express.json({ limit: "50mb", type: "application/json" }));

// app.use(express.static(path.join(__dirname, "uploads")));

// app.listen(process.env.PORT, () => {
//   console.log(`on port ${process.env.PORT}`);
//   init();
// });

// app.use("/api", require("./routes/route"));

// app.use(require("./middlewares/errorHandler"));

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

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  //   res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  //   res.setHeader('Access-Control-Expose-Headers', 'Content-Type');
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.json({ limit: "50mb", type: "application/json" }));

app.use(express.static(path.join(__dirname, "uploads")));

app.listen(process.env.PORT, () => {
  console.log(`on port ${process.env.PORT}`);
  init();
});

app.use("/api", require("./routes/route"));

app.use(require("./middlewares/errorHandler"));
