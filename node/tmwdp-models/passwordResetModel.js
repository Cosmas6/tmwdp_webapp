const mongoose = require("mongoose");

const PasswordResetTokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  resetToken: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600, // this document will automatically delete itself after 1 hour
  },
});

const PasswordResetTokenDB = mongoose.connection.useDb("PasswordResetToken");
const Schema = PasswordResetTokenDB.model("users", PasswordResetTokenSchema);

module.exports = Schema;
