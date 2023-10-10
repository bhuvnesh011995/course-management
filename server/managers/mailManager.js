const nodemailer = require("nodemailer");
const cheerio = require("cheerio");

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
    const mailConfigs = {
      from: myEmail,
      to: [data.email],
      subject: data.subject,
      html: data.mailValue,
    };
    transporter.sendMail(mailConfigs, function (error, info) {
      if (error) {
        console.error(error);

        return Error({ message: "An error has occured" });
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
