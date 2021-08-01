import React from "react";
import CategoryTag from "./CategoryTag";
import menu from "./Demo";

function CategoriesNavbar() {
  return (
    <div className="categories" id="categories">
      {menu.categories.map((item) => (
        <CategoryTag title={item.categoryTitle} />
      ))}
    </div>
  );
}

export default CategoriesNavbar;
