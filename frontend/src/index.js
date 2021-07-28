import React from "react";
import ReactDOM from "react-dom";
// import mongoose from "mongoose";
// import bodyParser from "body-parser";
import App from "./components/App.jsx";

ReactDOM.render(<App />, document.getElementById("root"));

window.onscroll = function () {
  myFunction();
};

var categories = document.getElementById("categories");
var sticky = categories.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    categories.classList.add("sticky");
    categories.classList.remove("categories");
  } else {
    categories.classList.add("categories");
    categories.classList.remove("sticky");
  }
}