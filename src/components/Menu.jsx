import React from "react";
import menu from "./Demo";
import Category from "./Category";

function Menu() {
  return menu.categories.map((category) => (
    <Category title={category.categoryTitle} dishes={category.dishes} />
  ));
}

export default Menu;
