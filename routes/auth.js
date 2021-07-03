const Joi = require("joi");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("config");
const { User } = require("../models/user");
const express = require("express");
const router = express.Router();

router.post("/login", async (req, res) => {
  // First Validate The HTTP Request
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  //  Now find the user by their email address
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send("Incorrect email or password.");
  }

  // Then validate the Credentials
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).send("Incorrect email or password.");
  }

  const token = jwt.sign(
    { _id: user._id },
    config.get("PrivateKey"),
    { expiresIn: "1h" },
    (err, token) => {
      if (err) {
        console.log(err);
      } else {
        res.header("x-auth-token", token).render("create");
      }
    }
  );
});

const checkToken = (req, res, next) => {
  const header = req.headers["x-auth-token"];

  if (typeof header !== "undefined") {
    const bearer = header.split(" ");
    const token = bearer[1];

    req.token = token;
    next();
  } else {
    //If header is undefined return Forbidden (403)
    res.sendStatus(403);
  }
};

//This is a protected route
router.get("/create", checkToken, (req, res) => {
  //verify the JWT token generated for the user
  jwt.verify(req.token, config.get("PrivateKey"), (err, authorizedData) => {
    if (err) {
      //If error send Forbidden (403)
      console.log("ERROR: Could not connect to the protected route");
      res.sendStatus(403);
    //   res.render("login");
    } else {
      //If token is successfully verified, we can send the autorized data
      res.send(authorizedData)
    //   res.render("create");
      console.log("SUCCESS: Connected to protected route");
    }
  });
});

function validate(req) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(req);
}

module.exports = router;
