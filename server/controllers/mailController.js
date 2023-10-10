const mailManager = require("../managers/mailManager");

const sendMail = (req, res) => {
  mailManager
    .sendMail(req.query)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

module.exports = {
  sendMail,
};
