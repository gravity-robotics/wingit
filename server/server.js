const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});