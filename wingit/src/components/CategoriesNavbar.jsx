import React from 'react';
import CategoryTag from './CategoryTag';
import Menu from "./Demo";

function categoryNavCreate(itme){
    return <CategoryTag title={itme.categoryTitle} />;
  }

function CategoriesNavbar() {

    return (
        <div className="categories" id="categories">
            {Menu.map(categoryNavCreate)}
        </div>
        );

}

export default CategoriesNavbar;