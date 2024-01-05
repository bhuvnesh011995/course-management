const nodemailer = require("nodemailer");
const cheerio = require("cheerio");
const fs = require("fs");
const { deleteSelectedFile } = require("../commonUsableFunctions/deleteFile");

const sendMail = async (req, res, next) => {
  try {
    let data = req.query;
    const myEmail = process.env.MYEMAIL;
    const myPass = process.env.MYPASS;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: myEmail,
        pass: myPass,
      },
    });
    let mailConfigs;
    mailConfigs = {
      from: myEmail,
      to: [data.email],
      subject: data.subject,
      html: data.mailValue,
      attachments: [],
    };
    if (data?.path) {
      data?.path.map((path) =>
        mailConfigs["attachments"].push({
          fileName: path.split("uploads/images/")[1],
          path: path,
        }),
      );
      // mailConfigs["attachments"] = [
      //   {
      //     fileName: data?.path[0].split("uploads/images/")[1],
      //     path: data?.path[0],
      //   },
      //   {
      //     fileName: data?.path[1].split("uploads/images/")[1],
      //     path: data?.path[1],
      //   },
      // ];
    }
    transporter.sendMail(mailConfigs, function (error, info) {
      if (error) {
        console.error(error);

        return res.status(204).send({ message: "An error has occured" });
      }
      if (data?.path) {
        data?.path.map((e) => {
          // fs.unlink(
          //   `uploads\\images\\${e.split("uploads/images/")[1]}`,
          //   (err) => {
          //     if (err) console.error(err);
          //   }
          // );
          deleteSelectedFile(e.split("uploads/images/")[1]);
        });
      }
      return res.status(200).send({ message: "Email sent successfully" });
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  sendMail,
};
