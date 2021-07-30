const express = require("express");
const config = require('config');
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const users = require("./routes/users");
const auth = require("./routes/auth");

const app = express();

var uri =
  "mongodb+srv://admin-user:Carpit@680@menus.b3pua.mongodb.net/menuDB?retryWrites=true&w=majority";
var local_uri = "mongodb://127.0.0.1:27017/menuDB";

if (!config.get('PrivateKey')) {
  console.error('FATAL ERROR: PrivateKey is not defined.');
  process.exit(1);
}

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Now connected to MongoDB!"))
  .catch((err) => console.error("Something went wrong", err));

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

app.get("/test", (req, res) => {
  res.render("categories");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

// print post data from /contact onto the console
app.post("/contact", (req, res) => {
  console.log(req.body.email);
  res.redirect("/");
});

app.use(users);
app.use(auth);

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
