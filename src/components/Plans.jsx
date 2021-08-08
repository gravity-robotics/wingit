import React from "react";
import PricingCard from "./PricingCard";

function Plans() {
  return (
    <section className="container-fluid" id="plans">
      <div className="plans-div">
        <h1 className="section-title">Different needs. Different plans.</h1>
        <div className="plans-card-div">
          <PricingCard
            title="Basic"
            price="0.00"
            feature1="50 Menu categories"
            feature2="50 Menu items per category"
            feature3="5000 QR code scans per month"
            feature4="Contactless ordering"
            color1="#8ec6ff"
            color2="#7064be"
          />
          <PricingCard
            title="Standard"
            price="1000"
            feature1="50 Menu categories"
            feature2="50 Menu items per category"
            feature3="Unlimited QR code scans per month"
            feature4="Contactless ordering"
            feature5="Accept online payments"
            color1="#6bdbd4"
            color2="#00a0ff"
          />
          <PricingCard
            title="Premium"
            price="5000"
            feature1="Unlimited Menu categories"
            feature2="Unlimited Menu items per category"
            feature3="Unlimited QR code scans per month"
            feature4="Contactless ordering"
            feature5="Accept online payments"
            feature6="Theme & QR customization"
            color1="#f08fee"
            color2="#f35d7b"
          />
        </div>
      </div>
    </section>
  );
}

export default Plans;
