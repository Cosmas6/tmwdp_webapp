const express = require("express");
const router = express.Router();
const CMdbo = require("../../../mongoDB/crackmeterConn");
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the records.

router.get("/", function (req, res) {
  let db_connect = CMdbo.getDb();
  var query = {};
  db_connect
    .collection("C1toC12")
    .find(query)
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(err);
      res.json(result);
    });
});

// This section will help you get a single record by id
router.get("/:id", function (req, res) {
  let db_connect = CMdbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("C1toC12").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you create a new record.
router.post("/add", function (req, response) {
  let db_connect = CMdbo.getDb();
  let myobj = {
    CrackMeter: req.body.CrackMeter,
    DateOfReading: req.body.DateOfReading,
    X1: req.body.X1,
    X2: req.body.X2,
    Y1: req.body.Y1,
    Y2: req.body.Y2,
    Z1: req.body.Z1,
    Z2: req.body.Z2,
  };
  console.log(req.body, "myobj");
  db_connect.collection("C1toC12").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a record by id.
router.post("/update/:id", function (req, response) {
  let db_connect = CMdbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      CrackMeter: req.body.CrackMeter,
      DateOfReading: req.body.DateOfReading,
      X1: req.body.X1,
      X2: req.body.X2,
      Y1: req.body.Y1,
      Y2: req.body.Y2,
      Z1: req.body.Z1,
      Z2: req.body.Z2,
    },
  };
  db_connect
    .collection("C1toC12")
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
  db_connect.collection("C1toC12").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = router;
