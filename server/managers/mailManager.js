const nodemailer = require("nodemailer");
const fs = require("fs");
const { deleteSelectedFile } = require("../commonUsableFunctions/deleteFile");
// const { google } = require("googleapis");

// const oAuth2Client = new google.auth.OAuth2(
//   process.env.CLIENT_ID,
//   process.env.CLIENT_SECRET,
// "https://developers.google.com/oauthplayground",
// );

// oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

const sendMail = async (req, res, next) => {
  try {
    // const ACCESS_TOKEN = oAuth2Client.getAccessToken();
    let data = req.body;
    const myEmail = process.env.MYEMAIL;
    const myPass = process.env.MYPASS;
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      // "tonga.santarli-attc.com",
      port: 465,
      // secure: true,
      auth: {
        // type: "OAuth2",
        user: myEmail,
        pass: myPass,
        // clientId: process.env.CLIENT_ID,
        // clientSecret: process.env.CLIENT_SECRET,
        // refreshToken: process.env.REFRESH_TOKEN,
        // accessToken: ACCESS_TOKEN,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    let mailConfigs;
    mailConfigs = {
      from: myEmail,
      to: [data.email],
      subject: data.subject,
      html: data.mailValue,
      attachments: [],
      cc: data.cc,
    };
    if (data?.path) {
      data?.path.map((path) =>
        mailConfigs["attachments"].push({
          fileName: path.split("uploads/images/")[1],
          path: path,
        }),
      );
    }
    transporter.sendMail(mailConfigs, function (error, info) {
      if (error) {
        return res.status(503).send({ error, message: "An error has occured" });
      }
      if (data?.path) {
        data?.path.map((e) => {
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
