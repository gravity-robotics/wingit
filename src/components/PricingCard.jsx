import React from "react";
import "../css/style_pricing_card.css";

function PricingCard(props) {
  var bg = {background: "linear-gradient(" + props.color1 + "," +  props.color2 + ")"};
  var titleBg = {backgroundColor: props.color1};
  return (
    <div className="pricingCard">
      <div className="pricingCardTitleDiv" style={titleBg}>
        <h1 className="pricingCardTitle">{props.title}</h1>
      </div>
      <div className="pricingDiv">
        <h1 className="price">&#x20B9; {props.price}</h1>
        <p className="month">/month</p>
      </div>
      <div className="pricingFeatureseDiv" style={bg} >
        <p className="pricingCardFeatures">{props.feature1}</p>
        <p className="pricingCardFeatures">{props.feature2}</p>
        <p className="pricingCardFeatures">{props.feature3}</p>
        <p className="pricingCardFeatures">{props.feature4}</p>
        <p className="pricingCardFeatures">{props.feature5}</p>
        <p className="pricingCardFeatures">{props.feature6}</p>
      </div>
    </div>
  );
}

export default PricingCard;