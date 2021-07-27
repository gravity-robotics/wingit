import React from "react";
import ItemCard from "./ItemCard";

function Category(props) {
  return (
    <div id={props.title}>
      <h1 className="category-heading">{props.title}</h1>
      {props.dishes.map(
        (item) =>
          item.isAvailable && (
            <ItemCard
              key={item._id}
              title={item.dishName}
              description={item.description}
              price={item.price}
              cookingTime={item.cookingTime}
              isVeg={item.isVeg}
              choices={item.choices}
            />
          )
      )}
    </div>
  );
}

export default Category;
