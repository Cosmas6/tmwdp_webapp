var express = require("express");
var router = express.Router();
require("dotenv").config();
var nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

router.get("/", function (req, res, next) {
  const { Date,Section } = req.body;
  res.send("Nodemailer is working properly");
});

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject();
      }
      resolve(token);
    });
  });

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      pass: process.env.PASS,
      accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  });

  return transporter;
};

const sendEmail = async (emailOptions) => {
  let emailTransporter = await createTransporter();
  await emailTransporter.sendMail(emailOptions);
};

router.get("/send", function (req, res, next) {
  console.log(req.body, "REQBODY");
  // const mailData = {
  //   Date: req.body.Date,
  //   Section: req.body.Section,
  //   UserEmail: req.body.UserEmail,
  //   Shift: req.body.Shift,
  // };
  // res.send("Nodemailer is working properly");
});

sendEmail({
  from: process.env.EMAIL,
  to: "cosmasmusis@gmail.com",
  subject: "Nodemailer Project",
  text: "Hi from your nodemailer project",
  attachments: [
    {
      // file on disk as an attachment
      filename: "text3.txt",
      content: "hello world!",
    },
  ],
});

module.exports = router;
