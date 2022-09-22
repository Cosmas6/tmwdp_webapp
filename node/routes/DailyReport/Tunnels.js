const express = require("express");
const router = express.Router();
var moment = require("moment");
const CMdbo = require("../../mongoDB/dailyreportConn");
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the records.

router.get("/", function (req, res) {
  let db_connect = CMdbo.getDb();
  db_connect
    .collection("Tunnels")
    .find()
    .sort({ Date: -1 })
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(err);
      res.json(result);
    });
});

// This section will help you get a single record by id
router.get("/:id", function (req, res) {
  let db_connect = CMdbo.getDb();
  let myquery = {
    _id: ObjectId(req.params.id),
  };
  db_connect.collection("Tunnels").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you create a new record.
router.post("/add", function (req, response) {
  let db_connect = CMdbo.getDb();
  let myobj = {
    UserEmail: req.body.UserEmail,
    Section: req.body.Section,
    Weather: req.body.Weather,
    Date: moment(req.body.Date).format("MMMM Do YYYY"),
    Shift: req.body.Shift,
    Activities: req.body.Activities,
    PlantEQ: req.body.PlantEQ,
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
  };
  console.log(req.body, "myobj");
  db_connect.collection("Tunnels").insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log(err);
    response.json(res);
  });
});

// This section will help you update a record by id.
router.post("/update/:id", function (req, response) {
  let db_connect = CMdbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      UserEmail: req.body.UserEmail,
      Section: req.body.Section,
      Weather: req.body.Weather,
      // Date: moment(req.body.Date).format("MMMM Do YYYY, h:mm:ss a"),
      Shift: req.body.Shift,
      Activities: req.body.Activities,
      PlantEQ: req.body.PlantEQ,
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
  db_connect
    .collection("Tunnels")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
router.delete("/:id", (req, response) => {
  let db_connect = CMdbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("Tunnels").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = router;
