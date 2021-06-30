const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.set('view engine', 'ejs')

app.use( bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"))

app.get("/", (req, res) => {res.render('index')})
app.get("/demo", (req, res) => {res.render('demo')})
app.get("/create", (req, res) => {res.render('create')})
app.get("/login", (req, res) => {res.render('login')})

app.post('/login', (req, res) => {
  // Insert Login Code Here
  let username = req.body.username;
  let password = req.body.password;
  res.send(`Username: ${username} Password: ${password}`);
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });