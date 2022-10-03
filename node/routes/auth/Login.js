const express = require("express");
const router = express.Router();
const Schema = require("../../mongoDB/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/", (request, response) => {
  // check if email exists
  Schema.findOne({ email: request.body.email })
    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(request.body.password, user.password)
        // if the passwords match

        .then((passwordCheck) => {
          // check if password matches
          if (!passwordCheck) {
            return response.status(400).send({
              message: "Passwords inner block does not match",
              error,
            });
          }

          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
              userDepartment: user.department,
              userFirstName: user.firstName,
              userLastName: user.lastName,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );
          response.status(200).send({
            message: "Login Successful",
            email: user.email,
            token,
          });
        })
        // catch error if password does not match
        .catch((error) => {
          response.status(400).send({
            message: "Passwords does not match",
            error,
          });
        });
    })

    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    });
});

router.get("/currentUser", async (req, res) => {
  try {
    //   get the token from the authorization header
    const token = await req.headers.authorization.split(" ")[1];
    console.log(token);
    //   check if the token matches the supposed origin
    const decodedToken = await jwt.verify(token, "RANDOM-TOKEN");
    //   retrieve the user details of the logged in user
    const user = await decodedToken;
    res.json(user);
  } catch (error) {
    response.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
});

module.exports = router;
