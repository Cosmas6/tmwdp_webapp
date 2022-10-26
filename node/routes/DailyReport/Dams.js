const express = require("express");
const router = express.Router();
var moment = require("moment");
const ObjectId = require("mongodb").ObjectId;
const mongoose = require("mongoose");

const DamReportSchema = require("../../mongoDB/damReportModel");
const DailyReportDB = mongoose.connection.useDb("DailyReport");
const Schema = DailyReportDB.model("dams", DamReportSchema);

// This section will help you get a list of all the records.

router.get("/", async (req, response) => {
  try {
    const res = await Schema.find().sort({ Date: -1 });
    response.json(res);
  } catch (error) {
    console.error(error);
    // handle the error
  }
});

router.get("/dateAscending", async (req, response) => {
  //Date range will have to be applied to ensure simplicity
  try {
    const res = await Schema.find({
      Date: { $gte: "2022-10-01", $lte: "2022-10-30" },
    }).sort({
      Date: 1,
    });
    response.json(res);
  } catch (error) {
    console.error(error);
    // handle the error
  }
});

// This section will help you get a single record by id
router.get("/:id", async (req, response) => {
  let myquery = {
    _id: ObjectId(req.params.id),
  };

  try {
    const res = await Schema.findById(myquery);
    response.json(res);
  } catch (error) {
    console.error(error);
    // handle the error
  }
});

// This section will help you create a new record.
router.post("/add", async (req, response) => {
  var myobj = new Schema({
    User: req.body.User,
    Section: req.body.Section,
    Weather: req.body.Weather,
    Date: moment(req.body.Date).toISOString(),
    Shift: req.body.Shift,
    Activities: req.body.Activities,
    PlantEQ: req.body.PlantEQ,
    rocktrip: req.body.rocktrip,
    SMEC_Ins: req.body.SMEC_Ins,
    CGGC_Ins: req.body.CGGC_Ins,
    Safety_Officer: req.body.Safety_Officer,
    Drivers: req.body.Drivers,
    SMEC_Eng: req.body.SMEC_Eng,
    Site_Foreman: req.body.Site_Foreman,
    Plant_Operator: req.body.Plant_Operator,
    Unskilled_Labour: req.body.Unskilled_Labour,
    Welder: req.body.Welder,
    Chinese_Staff: req.body.Chinese_Staff,
  });
  console.log(req.body, "myobj");

  try {
    const res = await Schema.create(myobj);
    response.json(res);
  } catch (error) {
    console.error(error);
    // handle the error
  }
});

// This section will help you update a record by id.
router.post("/update/:id", async (req, response) => {
  let myquery = { _id: ObjectId(req.params.id) };
  var newvalues = {
    $set: {
      Section: req.body.Section,
      Weather: req.body.Weather,
      Date: moment(req.body.Date).toISOString(),
      Shift: req.body.Shift,
      Activities: req.body.Activities,
      PlantEQ: req.body.PlantEQ,
      rocktrip: req.body.rocktrip,
      SMEC_Ins: req.body.SMEC_Ins,
      CGGC_Ins: req.body.CGGC_Ins,
      Safety_Officer: req.body.Safety_Officer,
      Drivers: req.body.Drivers,
      SMEC_Eng: req.body.SMEC_Eng,
      Site_Foreman: req.body.Site_Foreman,
      Plant_Operator: req.body.Plant_Operator,
      Unskilled_Labour: req.body.Unskilled_Labour,
      Welder: req.body.Welder,
      Chinese_Staff: req.body.Chinese_Staff,
    },
  };

  try {
    const res = await Schema.findByIdAndUpdate(myquery, newvalues);
    response.json(res);
  } catch (error) {
    console.error(error);
    // handle the error
  }
});

// This section will help you delete a record
router.delete("/:id", async (req, response) => {
  let myquery = { _id: ObjectId(req.params.id) };
  try {
    const res = await Schema.findByIdAndDelete(myquery);
    response.json(res);
  } catch (error) {
    console.error(error);
    // handle the error
  }
});

module.exports = router;
