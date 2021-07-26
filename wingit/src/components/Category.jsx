import React from "react";
import ItemCard from "./ItemCard";

function createItem(item){
  return(
    <ItemCard
      key={item._id}
      title={item.dishName}
      description={item.description}
      price={item.price}
      cookingTime={item.cookingTime}
    />
  )  
}

function Category(props) {
  return (
    <div id={props.title}>
      <h1 className="category-heading">{props.title}</h1>
      {props.dishes.map(createItem)}
    </div>
  );
}

export default Category;
