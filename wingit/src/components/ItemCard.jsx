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
        {/* <div className="postcard__preview-txt">
      Choice1/Choice2
      </div> */}
        <ul className="postcard__tagbox">
          <li className="tag__item">
            <i className="fa fa-inr"></i> {props.price}
          </li>
          <li className="tag__item">
            <i className="fas fa-clock mr-2"></i> {props.cookingTime} mins
          </li>
          <li className="tag__item">
            <img
              className="veg_nonveg"
              src="images/icons/veg.png"
              alt="triangle with equal sides"
              srcSet="images/icons/veg.svg"
            />
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ItemCard;
