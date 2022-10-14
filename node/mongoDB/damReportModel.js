const mongoose = require("mongoose");

const DamReportSchema = new mongoose.Schema({
  User: {
    type: String,
  },
  Section: {
    type: String,
  },
  Weather: {
    type: String,
  },
  Date: {
    type: Date,
  },
  Shift: {
    type: String,
  },
  Activities: {
    type: String,
  },
  PlantEQ: {
    type: String,
  },
  rocktrip: {
    type: Array,
  },
  SMEC_Ins: {
    type: Number,
  },
  CGGC_Ins: {
    type: Number,
  },
  Safety_Officer: {
    type: Number,
  },
  Drivers: {
    type: Number,
  },
  SMEC_Eng: {
    type: Number,
  },
  Site_Foreman: {
    type: Number,
  },
  Plant_Operator: {
    type: Number,
  },
  Unskilled_Labour: {
    type: Number,
  },
  Welder: {
    type: Number,
  },
  Chinese_Staff: {
    type: Number,
  },
});

module.exports = DamReportSchema;
