// const fs = require("fs");
// const path = require("path");

module.exports = (err, req, res, next) => {
  // const filePath = path.join(
  //   __dirname + "../",
  //   "../uploads/images",
  //   "webhook.log",
  // );
  // fs.writeFileSync(
  //   filePath,
  //   `status code : ${err.statusCode} , errorMessage : ${err.message}`,
  //   (err) => {
  //     if (err) console.error(err);
  //   },
  // );
  let status = err.statusCode || 500;
  let message = err.message || "something went wrong";

  console.error(err);
  res.status(status).send({ message });
  next();
};
