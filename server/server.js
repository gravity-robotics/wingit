const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

var uri =
  "mongodb+srv://admin-user:Carpit@680@menus.b3pua.mongodb.net/menuDB?retryWrites=true&w=majority";
var local_uri = "mongodb://127.0.0.1:27017/menuDB";

mongoose
  .connect(local_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Now connected to MongoDB!"))
  .catch((err) => console.error("Something went wrong", err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.get("/view/:id", (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  const options = {};
  const Model = mongoose.model("menu");
  Model.findOne(query, options).then((menu) => {
    res.send(menu);
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
