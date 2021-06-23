const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")

const app = express()
const port = process.env.PORT || 3000

app.use( bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"))


app.get("/", function (req,res){
    res.sendFile(__dirname + "/src/index.html")
})

app.listen(port, function (){
    console.log(`Server is listening at port ${port}.`)
})