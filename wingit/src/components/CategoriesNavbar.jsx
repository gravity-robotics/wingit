import React from 'react';
import CategoryTag from './CategoryTag';

    // var category_list = ["Soups", "Salads", "Appetizers", "Pastas", "Pizzas", "Main Course", "Indian Cuisine", "Chinese Cuisine", "Side Orders", "Rice", "Desserts"]; 

function CategoriesNavbar() {

    return (
        <div className="categories" id="categories">
            <CategoryTag title="Soups"/>
            <CategoryTag title="Salads"/>
            <CategoryTag title="Appetizers"/>
            <CategoryTag title="Pastas"/>
            <CategoryTag title="Pizzas"/>
            <CategoryTag title="Main Course"/>
            <CategoryTag title="Indian Cuisine"/>
            <CategoryTag title="Chinese Cuisine"/>
            <CategoryTag title="Side Orders"/>
            <CategoryTag title="Rice"/>
            <CategoryTag title="Desserts"/>
        </div>
        );

}

export default CategoriesNavbar;