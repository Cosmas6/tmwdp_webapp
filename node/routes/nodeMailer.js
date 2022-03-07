var express = require("express");
var router = express.Router();
require("dotenv").config();
var nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.PASS,
    clientId:
    process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken:
    process.env.REFRESH_TOKEN,
  },
});

let mailOptions = {
  from: "cosmasmusis@gmail.com",
  to: "cosmasmusis@gmail.com",
  subject: "Nodemailer Project",
  text: "Hi from your nodemailer project",
};

transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log("Error " + err);
  } else {
    console.log("Email sent successfully");
  }
});

module.exports = router;
