import React from "react";
import Header from "./Header";
import CategoriesNavbar from "./CategoriesNavbar";
import Menu from "./Menu";
import "../css/style_menu.css";

function Webapp() {
  window.onscroll = () => {
    var categories = document.getElementById("categories");
    var sticky = categories.offsetTop;
    if (window.pageYOffset >= sticky) {
      categories.classList.add("sticky");
      categories.classList.remove("categories");
    } else {
      categories.classList.add("categories");
      categories.classList.remove("sticky");
    }
  }
  return (
    <div className="gradient">
      <Header title="Demo" />
      <CategoriesNavbar />
      <main className="container py-2">
        <Menu />
      </main>
    </div>
  );
}

 

export default Webapp;
