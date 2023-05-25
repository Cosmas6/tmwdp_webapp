require("dotenv").config();

var createError = require("http-errors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
var indexRouter = require("./routes/index");
var dbConn = require("./mongoDB/dbConn");
var registerRouter = require("./routes/auth/Register");
var loginRouter = require("./routes/auth/Login");
var forgotPasswordRouter = require("./routes/auth/ForgotPassword");
var resetPasswordRouter = require("./routes/auth/ResetPassword");
var DailyRSpillway = require("./routes/DailyReport/Spillway");
var DailyREmpCamp = require("./routes/DailyReport/EmployersCamp");
var DailyRInst = require("./routes/DailyReport/Instrumentation");
var DailyRTunnels = require("./routes/DailyReport/Tunnels");
var DailyRDams = require("./routes/DailyReport/Dams");
var UserReport = require("./routes/DailyReport/UserReport");
var flutterReportRoute = require("./routes/report.route");
var flutterUserRoute = require("./routes/user.route");
var fileUpload = require("express-fileupload");
var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());

dbConn();

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
app.use("/forgot-password", forgotPasswordRouter);
app.use("/reset-password", resetPasswordRouter);
app.use("/DailyRSpillwayRouter", DailyRSpillway);
app.use("/DailyREmpCampRouter", DailyREmpCamp);
app.use("/DailyRInstRouter", DailyRInst);
app.use("/DailyRTunnelsRouter", DailyRTunnels);
app.use("/DailyRDamsRouter", DailyRDams);
app.use("/UserReportRoute", UserReport);
app.use("/FlutterReportRoute", flutterReportRoute);
app.use("/FlutterUserRoute", flutterUserRoute);

// perform a database connection when server starts

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

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
