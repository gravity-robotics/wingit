import React from "react";

function ItemCard(props) {
  return (
    <article className="postcard light">
      <img
        className="postcard__img"
        src="images/dishes/farm_house.jpg"
        alt={props.title}
      />
      <div className="postcard__text t-dark">
        <h1 className="postcard__title">{props.title}</h1>
        <div className="postcard__bar"></div>
        <div className="postcard__preview-txt">{props.description}</div>
        <div className="postcard__preview-txt">{props.choices}</div>
        <ul className="postcard__tagbox">
          {props.price && (
            <li className="tag__item">
              <i className="fa fa-inr"></i> {props.price}
            </li>
          )}
          {props.cookingTime && (
            <li className="tag__item">
              <i className="fas fa-clock mr-2"></i> {props.cookingTime} mins
            </li>
          )}
          <li className="tag__item">
            <img
              className="veg_nonveg"
              src={"images/icons/" + (props.isVeg ? "veg" : "nonveg") + ".png"}
              alt="ve/non-veg icon"
              srcSet={
                "images/icons/" + (props.isVeg ? "veg" : "nonveg") + ".svg"
              }
            />
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ItemCard;
