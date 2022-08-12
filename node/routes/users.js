var express = require("express");
var logger = require("../logger/logger");
var router = express.Router();

const users = [
  { firstName: "fnam1", lastName: "lnam1", userName: "username1" },
];

// request to get all the users
router.get("/", function (req, res) {
  res.json(users);
});

// request to get all the users by userName
router.get("/:userName", function (req, res) {
  let user = users.filter(function (user) {
    if (req.params.userName === user.userName) {
      return user;
    }
  });
  res.json(user);
});

// request to post the user
// req.body has object of type {firstName:"fnam1",lastName:"lnam1",userName:"username1"}
router.post("/user", function (req, res) {
  users.push(req.body);
  res.json(users);
});

router.get("*", function(req, res) {
  logger.info("users route");
  res.send("App works!!!!!");
})

module.exports = router;
