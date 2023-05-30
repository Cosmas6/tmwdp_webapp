const express = require("express");
const router = express.Router();
const Schema = require("../../tmwdp-models/authModel");
const bcrypt = require("bcrypt");

router.post("/", (request, response) => {
  const dept = request.body.department;
  const deptNew = dept.map((obj) => {
    return obj.value;
  });

  bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword) => {
      const user = new Schema({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        department: deptNew,
        email: request.body.email,
        password: hashedPassword,
      });

      user
        .save()
        .then((result) => {
          response.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        .catch((error) => {
          console.log(error, "ERROR");
          response.status(500).send({
            message: "User already registered. Please login instead",
            error,
          });
        });
    })
    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
});

module.exports = router;
