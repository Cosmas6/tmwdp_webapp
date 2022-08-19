const express = require("express");
const router = express.Router();
const dbo = require("../../mongoDB/crackmeterConn");
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the records.

router.get("/", function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("CrackMeter")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
router.get("/:id", function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
      .collection("CrackMeter")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });
  
  // This section will help you create a new record.
  router.post("/add", function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      date: req.body.date,
      x1: req.body.x1,
      x2: req.body.x2,
      y1: req.body.y1,
      y2: req.body.y2,
      z1: req.body.z1,
      z2: req.body.z2,
    };
    console.log(req.body, "myobj");
    db_connect
      .collection("CrackMeter")
      .insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
      });
  });
  
  // This section will help you update a record by id.
  router.post("/update/:id", function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
      $set: {
        date: req.body.date,
        x1: req.body.x1,
        x2: req.body.x2,
        y1: req.body.y1,
        y2: req.body.y2,
        z1: req.body.z1,
        z2: req.body.z2,
      },
    };
    db_connect
      .collection("CrackMeter")
      .updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        response.json(res);
      });
  });
  
  // This section will help you delete a record
  router.delete("/:id", (req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
      .collection("CrackMeter")
      .deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        response.json(obj);
      });
  });
  
  module.exports = router;
  
