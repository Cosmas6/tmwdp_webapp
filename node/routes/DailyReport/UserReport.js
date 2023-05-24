const express = require("express");
const router = express.Router();
// var moment = require("moment");
const mongoose = require("mongoose");

const ReportSchema = require("../../mongoDB/reportModel");
const DailyReportDB = mongoose.connection.useDb("DailyReport");

// This section will help you get a list of all the records.

router.get("/user", async (req, response) => {
  const user = req.query.user;
  console.log(user);

  if (!user) {
    response.status(400).json({ error: 'Missing required "user" parameter' });
    return;
  }

  try {
    const collections = [
      "dams",
      "employercamps",
      "instrumentations",
      "spillways",
      "tunnels",
    ]; // replace with your collection names
    let results = [];

    for (const collectionName of collections) {
      const collection = DailyReportDB.model(collectionName, ReportSchema);
      const res = await collection.find({ User: user });
      results = results.concat(res);
    }

    results.sort((a, b) => b.Date - a.Date); // sort all results by date
    response.json(results);
    console.log(results);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
