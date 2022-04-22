const express = require("express");
const router = express.Router();
const InstDbo = require("../../mongoDB/InstConn");
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the records.

router.get("/", function (req, res) {
  let db_connect = InstDbo.getDb();
  db_connect
    .collection("Tunnels")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
router.get("/:id", function (req, res) {
  let db_connect = InstDbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("Tunnels").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you create a new record.
router.post("/add", function (req, response) {
  let db_connect = InstDbo.getDb();
  let myobj = {
    instrument: req.body.instrument,
    no_instrument: req.body.no_instrument,
    location: req.body.location,
    remarks: req.body.remarks,
  };
  console.log(req.body, "myobj");
  db_connect.collection("Tunnels").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a record by id.
router.post("/update/:id", function (req, response) {
  let db_connect = InstDbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      instrument: req.body.instrument,
      no_instrument: req.body.no_instrument,
      location: req.body.location,
      remarks: req.body.remarks,
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
  let db_connect = InstDbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("Tunnels").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = router;
