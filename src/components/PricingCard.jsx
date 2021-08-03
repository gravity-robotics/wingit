import React from "react";
import "../css/style_pricing_card.css";

function PricingCard(props) {
  return (
    <div className="pricingCard">
      <div className="pricingCardTitleDiv">
        <h1 className="pricingCardTitle">{props.title}</h1>
      </div>
      <div className="pricingDiv">
        <h1 className="price">&#x20B9; {props.price}</h1>
        <p className="month">/month</p>
      </div>
      <div className="pricingFeatureseDiv" >
        <p className="pricingCardFeatures">{props.features}</p>
        <p className="pricingCardFeatures">{props.features}</p>
        <p className="pricingCardFeatures">{props.features}</p>
        <p className="pricingCardFeatures">{props.features}</p>
      </div>
    </div>
  );
}

export default PricingCard;