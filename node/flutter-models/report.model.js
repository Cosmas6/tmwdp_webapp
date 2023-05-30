const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  siteLocation: { type: String, required: true },
  teamLeader: { type: String, required: true },
  date: { type: Date, required: true },
  workHours: { type: Number, required: true },
  completedTasks: { type: [String], required: true },
  pendingTasks: { type: [String], required: true },
  materialsUsed: { type: [String], required: true },
  issuesChallenges: { type: [String], required: true },
  safetyIncidents: { type: [String], required: true },
  progressPhotos: { type: [String], required: true },
  nextDayPlan: { type: String, required: true },
});

const flutterDB = mongoose.connection.useDb("flutterDB");
const Schema = flutterDB.model("reports", ReportSchema);

module.exports = Schema;
