const mongoose = require("mongoose");
const { Schema } = mongoose;

const CrackMeterSchema = new Schema({
  User: {
    type: String,
  },
  CrackMeter: {
    type: Number,
  },
  DateOfReading: {
    type: Date,
  },
  X1: {
    type: Number,
  },
  X2: {
    type: Number,
  },
  Y1: {
    type: Number,
  },
  Y2: {
    type: Number,
  },
  Z1: {
    type: Number,
  },
  Z2: {
    type: Number,
  },
});

const CrackMeterDB = mongoose.connection.useDb("Instrumentation");
const CMSchema = CrackMeterDB.model("c1toc16s", CrackMeterSchema);

module.exports = CMSchema;
