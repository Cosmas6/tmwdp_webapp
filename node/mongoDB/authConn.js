const mongoose = require("mongoose");
require("dotenv").config();

async function authConn() {
  // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
  mongoose
    .connect(
      "mongodb+srv://cosmas:mongodbcosmas123@cluster0.w5hfgxy.mongodb.net/?retryWrites=true&w=majority",
      {
        //   these are options to ensure that the connection is done properly
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Successfully connected to Auth in MongoDB!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });
}

module.exports = authConn;
