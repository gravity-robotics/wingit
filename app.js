const express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/demo", (req, res) => {
  res.render("demo");
});
app.get("/create", (req, res) => {
  res.render("create");
});
app.get("/admin", (req, res) => {
  res.render("login");
});

// Validation Array
var loginValidate = [
  // Check Username
  check("email", "Please enter a valid Email Address")
    .isEmail()
    .trim()
    .escape()
    .normalizeEmail(),

  // Check Password
  check("password")
    .trim()
    .escape()
    .isLength({ min: 8 })
    .withMessage("Password Must Be at Least 8 Characters"),
  // .matches("[0-9]")
  // .withMessage("Password Must Contain a Number")
  // .matches("[A-Z]")
  // .withMessage("Password Must Contain an Uppercase Letter")
];

app.post("/admin", loginValidate, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array()[0].msg });
  } else {
    let email = req.body.email;
    let password = req.body.password;
    if (req.body.button == "login") {
      res.send(`Email ID: ${email} Password: ${password}`);
    } else if (req.body.button == "signup") {
      res.render("coming-soon");
    }
  }
});

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
