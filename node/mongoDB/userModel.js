const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "FIrst Name Required"],
  },

  lastName: {
    type: String,
    required: [true, "Last Name Required"],
  },
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },

  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
});

const userDB = mongoose.connection.useDb("auth");
const Schema = userDB.model("users", UserSchema);

module.exports = Schema;
