require("dotenv").config();

// console.log(process.env);
var createError = require("http-errors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
var indexRouter = require("./routes/index");
var crackmeterDbo = require("./mongoDB/crackmeterConn");
var dailyreportDbo = require("./mongoDB/dailyreportConn.js");
var authConn = require("./mongoDB/authConn");
var registerRouter = require("./routes/auth/Register");
var loginRouter = require("./routes/auth/Login");
var nodeMailerRouter = require("./routes/nodeMailer");
var DailyRSpillway = require("./routes/DailyReport/Spillway");
var DailyRTunnels = require("./routes/DailyReport/Tunnels");
var C1Router = require("./routes/Instrumentation/CrackMeters/C1");
var C2Router = require("./routes/Instrumentation/CrackMeters/C2");
var C3Router = require("./routes/Instrumentation/CrackMeters/C3");
var C4Router = require("./routes/Instrumentation/CrackMeters/C4");
var C5Router = require("./routes/Instrumentation/CrackMeters/C5");
var C6Router = require("./routes/Instrumentation/CrackMeters/C6");
var C7Router = require("./routes/Instrumentation/CrackMeters/C7");
var C8Router = require("./routes/Instrumentation/CrackMeters/C8");
var C9Router = require("./routes/Instrumentation/CrackMeters/C9");
var C10Router = require("./routes/Instrumentation/CrackMeters/C10");
var C11Router = require("./routes/Instrumentation/CrackMeters/C11");
var C12Router = require("./routes/Instrumentation/CrackMeters/C12");
var C13Router = require("./routes/Instrumentation/CrackMeters/C13");
var C14Router = require("./routes/Instrumentation/CrackMeters/C14");
var C15Router = require("./routes/Instrumentation/CrackMeters/C15");
var C16Router = require("./routes/Instrumentation/CrackMeters/C16");
var fileUpload = require("express-fileupload");
var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());

authConn();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));
app.use(fileUpload());

app.use("/", indexRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/nodeMailer", nodeMailerRouter);
app.use("/C1Router", C1Router);
app.use("/C2Router", C2Router);
app.use("/C3Router", C3Router);
app.use("/C4Router", C4Router);
app.use("/C5Router", C5Router);
app.use("/C6Router", C6Router);
app.use("/C7Router", C7Router);
app.use("/C8Router", C8Router);
app.use("/C9Router", C9Router);
app.use("/C10Router", C10Router);
app.use("/C11Router", C11Router);
app.use("/C12Router", C12Router);
app.use("/C13Router", C13Router);
app.use("/C14Router", C14Router);
app.use("/C15Router", C15Router);
app.use("/C16Router", C16Router);
app.use("/DailyRSpillwayRouter", DailyRSpillway);
app.use("/DailyRTunnelsRouter", DailyRTunnels);

// perform a database connection when server starts

crackmeterDbo.connectToServer(function (err) {
  if (err) console.error(err);
});

dailyreportDbo.connectToServer(function (err) {
  if (err) console.error(err);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

module.exports = app;
