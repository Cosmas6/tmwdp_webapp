var express = require("express");
var router = express.Router();
var multer = require("multer");
var maxSize = 200 * 1024 * 1024;

router.get("/", function (req, res, next) {
  res.send("Multer is working properly");
});

var store = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now());
    // + "-" + file.originalname
  },
});

var upload = multer({ storage: store}).single(
  "PDF-File"
);

router.post("/", function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    console.log(req.file, "req file");
    return res.status(200).send(req.file);
  });
});

module.exports = router;
