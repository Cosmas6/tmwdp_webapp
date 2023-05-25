const express = require("express");
const router = express.Router();
const PasswordResetTokenSchema = require("../../mongoDB/passwordResetModel");
const UserSchema = require("../../mongoDB/authModel");
const bcrypt = require("bcrypt");

router.post("/:token", (req, res) => {
  console.log(req.params.token);
  PasswordResetTokenSchema.findOne(
    {
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() - 3600000 },
    },
    (err, passwordResetToken) => {
      if (!passwordResetToken)
        return res
          .status(400)
          .send("Password reset token is invalid or has expired.");

      UserSchema.findById(passwordResetToken.userId, (err, user) => {
        if (!user)
          return res.status(400).send("User with this id does not exist.");

        // Hash the new password and update user
        bcrypt
          .hash(req.body.password, 10)
          .then((hashedPassword) => {
            user.password = hashedPassword;
            user.save();

            // Delete the password reset token
            passwordResetToken.delete();

            res.send("Password reset successful");
          })
          .catch((err) =>
            res.status(500).send("Password could not be updated.")
          );
      });
    }
  );
});

module.exports = router;
