const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 3000

app.use( bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"))

var uri = "mongodb+srv://carpit680:Carpit@680@menus.b3pua.mongodb.net/menuDB?retryWrites=true&w=majority"
var local_uri = "mongodb://127.0.0.1:27017/menuDB"

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', function() {
    console.log("Connected to Mongo DB Successfully!!")
})

const Menu = require(__dirname + "/src/menu.js")

app.post("/menu", (request, response) => {
    
    console.log(request.body.name)
    const menu = new Menu({

        name: request.body.name,
        price: request.body.price,
        description: request.body.description,
        category: request.body.category,
        choices: request.body.choices,
        taste: request.body.taste,
        cooking_time: request.body.cooking_time,
        availability: request.body.availability
    });
    menu.save().then(data => {
        console.log("Successfully created a new menu entry");
    }).catch(error => {
         console.log("There was an error :(")
        })
})

app.get("/create",function(req,res){
    res.sendFile(__dirname+"/src/create.html")
});

app.get("/demo",function(req,res){
    res.sendFile(__dirname+"/src/menu.html")
});

app.get("/", function (req,res){
    res.sendFile(__dirname + "/src/index.html")
})

app.listen(3000, function (){
    console.log(`Server is now running at port ${port}.`)
})