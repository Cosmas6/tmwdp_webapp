const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectId;
const mongoose = require("mongoose");
const CMSchema = require("../../../mongoDB/crackMeterModel");

// This section will help you get a list of all the records.

router.get("/", async (req, response) => {
  var query = { CrackMeter: "11" };
  try {
    const res = await CMSchema.find(query).sort({ DateOfReading: -1 }).limit(10);
    response.json(res);
  } catch (error) {
    console.error(error);
    // handle the error
  }
});

router.get("/graphC1", async (req, response) => {
  var query = { CrackMeter: "11" };
  try {
    const res = await CMSchema.find(query).sort({ DateOfReading: 1 });
    response.json(res);
  } catch (error) {
    console.error(error);
    // handle the error
  }
});

// This section will help you get a single record by id
router.get("/:id", async (req, response) => {
  let myquery = { _id: ObjectId(req.params.id), CrackMeter: "11" };

  try {
    const res = await CMSchema.findById(myquery);
    response.json(res);
    console.log(res);
  } catch (error) {
    console.error(error);
    // handle the error
  }
});

// This section will help you create a new record.
router.post("/add", async (req, response) => {
  var myobj = new CMSchema({
    User: req.body.User,
    CrackMeter: req.body.CrackMeter,
    DateOfReading: req.body.DateOfReading,
    X1: req.body.X1,
    X2: req.body.X2,
    Y1: req.body.Y1,
    Y2: req.body.Y2,
    Z1: req.body.Z1,
    Z2: req.body.Z2,
  });
  console.log(req.body, "myobj");

  try {
    const res = await CMSchema.create(myobj);
    response.json(res);
  } catch (error) {
    console.error(error);
    // handle the error
  }
});

// This section will help you update a record by id.
router.post("/update/:id", async (req, response) => {
  let myquery = { _id: ObjectId(req.params.id), CrackMeter: "11" };
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

  try {
    const res = await CMSchema.findByIdAndUpdate(myquery, newvalues);
    response.json(res);
  } catch (error) {
    console.error(error);
    // handle the error
  }
});

// This section will help you delete a record
router.delete("/:id", async (req, response) => {
  let myquery = { _id: ObjectId(req.params.id), CrackMeter: "11" };
  try {
    const res = await CMSchema.deleteOne(myquery);
    response.json(res);
  } catch (error) {
    console.error(error);
    // handle the error
  }
});

module.exports = router;
