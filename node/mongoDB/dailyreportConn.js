const { MongoClient } = require("mongodb");
require("dotenv").config();
const Db =
  "mongodb+srv://cosmas:mongodbcosmas123@tmwdp.hbt0i.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db) {
        _db = db.db("DailyReport");
        console.log("Successfully connected to DailyReport in MongoDB.");
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};
