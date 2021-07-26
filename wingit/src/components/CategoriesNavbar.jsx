import React from "react";
import CategoryTag from "./CategoryTag";
import Menu from "./Demo";

function CategoriesNavbar() {
  return (
    <div className="categories" id="categories">
      {Menu.map((item) => (
        <CategoryTag title={item.categoryTitle} />
      ))}
    </div>
  );
}

export default CategoriesNavbar;
