const nodemailer = require("nodemailer");
const config = require("config");

const transporter = nodemailer.createTransport({
  host: "smtp.mail.ru",
  port: 465,
  secure: true, // true for 465, false other ports
  auth: {
    user: config.get("user"),
    pass: config.get("pass"),
  },
});

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log("Email send: ", info);
  });
};

module.exports = mailer;
