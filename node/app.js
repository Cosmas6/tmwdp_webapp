var createError = require("http-errors");
var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var testAPIRouter = require("./routes/testAPI");
var nodeMailerRouter = require("./routes/nodeMailer");
var recordRouter = require("./routes/records");
var SpillwayInstRouter = require("./routes/Instrumentation/Spillway");
var TunnelInstRouter = require("./routes/Instrumentation/Tunnel");
var dbo = require("./mongoDB/conn");
var InstDbo = require("./mongoDB/InstConn");
var fileUpload = require("express-fileupload");
var app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));
app.use(cors());
app.use(fileUpload());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/testAPI", testAPIRouter);
app.use("/nodeMailer", nodeMailerRouter);
app.use("/records", recordRouter);
app.use("/instSpillway", SpillwayInstRouter);
app.use("/instTunnel", TunnelInstRouter);

// perform a database connection when server starts

// dbo.connectToServer(function (err) {
//   if (err) console.error(err);
// });

InstDbo.connectToServer(function (err) {
  if (err) console.error(err);
});

dbo.connectToServer(function (err) {
  if (err) console.error(err);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
