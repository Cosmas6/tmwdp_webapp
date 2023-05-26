const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const UserSchema = require("../../mongoDB/authModel");
const PasswordResetTokenSchema = require("../../mongoDB/passwordResetModel");

router.post("/", (req, res) => {
  // Get the user with the given email
  UserSchema.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.status(400).send("User with this email does not exist.");

    // Create a reset token
    const token = crypto.randomBytes(20).toString("hex");

    const passwordResetToken = new PasswordResetTokenSchema({
      userId: user._id,
      resetToken: token,
      createdAt: Date.now(),
    });
    passwordResetToken.save();

    // Create reset link
    const resetLink = "http://localhost:8080/auth/reset-password/" + token;

    // Send reset link back to client
    res.send({
      resetLink,
      message: "A reset link has been sent to your email address.",
    });
  });
});

module.exports = router;
