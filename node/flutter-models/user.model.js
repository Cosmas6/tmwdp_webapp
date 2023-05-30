const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const flutterDB = mongoose.connection.useDb("flutterDB");
const Schema = flutterDB.model("users", UserSchema);

module.exports = Schema;
