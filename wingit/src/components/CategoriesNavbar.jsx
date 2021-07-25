import React from 'react';
import Category from './Category';

    // var category_list = ["Soups", "Salads", "Appetizers", "Pastas", "Pizzas", "Main Course", "Indian Cuisine", "Chinese Cuisine", "Side Orders", "Rice", "Desserts"]; 

function CategoriesNavbar() {

    return (
        <div className="categories" id="categories">
            <Category title="Soups"/>
            <Category title="Salads"/>
            <Category title="Appetizers"/>
            <Category title="Pastas"/>
            <Category title="Pizzas"/>
            <Category title="Main Course"/>
            <Category title="Indian Cuisine"/>
            <Category title="Chinese Cuisine"/>
            <Category title="Side Orders"/>
            <Category title="Rice"/>
            <Category title="Desserts"/>
            {/* {category_list.forEach(element => {
               <Category title={element}/>
                
            })} */}
        </div>
        );

}

export default CategoriesNavbar;