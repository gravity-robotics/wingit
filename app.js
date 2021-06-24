const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.use( bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"))


app.get("/", (req, res) => {res.render('prod')})
app.get("/demo", (req, res) => {res.render('demo')})
app.get("/create", (req, res) => {res.render('create')})

app.listen(port, () => {console.log(`Server is listening at port ${port}.`)})