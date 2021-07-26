import React from "react";
import ItemCard from "./ItemCard";
import dishes from "./Demo";

function ItemCreation(item) {
  return (
    <ItemCard
    key={item._id}
      title={item.dishName}
      description={item.description}
      price={item.price}
      cookingTime={item.cookingTime}
    />
  );
}
function Category(props) {
  return (
    <div id={props.title}>
      <h1 className="category-heading">{props.title}</h1>
      {dishes.map(ItemCreation)}
    </div>
  );
}

export default Category;
