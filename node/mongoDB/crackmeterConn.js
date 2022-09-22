const { MongoClient } = require("mongodb");
require("dotenv").config();
const Db =
  "mongodb+srv://cosmas:mongodbcosmas123@cluster0.w5hfgxy.mongodb.net/?retryWrites=true&w=majority";
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
        _db = db.db("CrackMeter");
        console.log("Successfully connected to CrackMeter in MongoDB.");
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};
