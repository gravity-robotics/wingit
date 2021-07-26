import React from "react";
import Demo from "./Demo";
import Category from "./Category";

function categoryNavCreate(category){
    return <Category title={category.categoryTitle} dishes={category.dishes}/>;
  }

function Menu(props) {
  return (
    Demo.map(categoryNavCreate)
  );
}

export default Menu;
