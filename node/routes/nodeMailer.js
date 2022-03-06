var express = require("express");
var router = express.Router();
var app = express();
var port = require("../bin/www");

console.log(port);
// app.listen(port, () => {
//   console.log(`nodemailerProject is listening at http://localhost:${port}`);
// });

module.exports = router;
