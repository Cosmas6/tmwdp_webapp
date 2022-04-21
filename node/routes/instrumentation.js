var express = require("express");
var router = express.Router();
const dbo = require("../mongoDB/conn");
const ObjectId = require("mongodb").ObjectId;

router.get("/", function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("RecordsCollection")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

module.exports = router;
