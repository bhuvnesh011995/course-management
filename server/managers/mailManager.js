const nodemailer = require("nodemailer");
const cheerio = require("cheerio");
const fs = require("fs");

const sendMail = async (data) => {
  try {
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
    };
    if (data?.path) {
      mailConfigs["attachments"] = [
        {
          fileName: data?.path[0].split("uploads/images/")[1],
          path: data?.path[0],
        },
        {
          fileName: data?.path[1].split("uploads/images/")[1],
          path: data?.path[1],
        },
      ];
    }
    transporter.sendMail(mailConfigs, function (error, info) {
      if (error) {
        console.error(error);

        return Error({ message: "An error has occured" });
      }
      if (data?.path) {
        data?.path.map((e) => {
          fs.unlink(
            `uploads\\images\\${e.split("uploads/images/")[1]}`,
            (err) => {
              if (err) console.error(err);
              else console.log("file is deleted");
            }
          );
        });
      }
      return { message: "Email sent successfully" };
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  sendMail,
};
