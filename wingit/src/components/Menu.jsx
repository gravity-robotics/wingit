import React from "react";
import Demo from "./Demo";
import Category from "./Category";

function Menu() {
  return Demo.map((category) => (
    <Category title={category.categoryTitle} dishes={category.dishes} />
  ));
}

export default Menu;
