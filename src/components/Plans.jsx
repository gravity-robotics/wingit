import React from "react";
import PricingCard from "./PricingCard";

function Plans() {
  return (
    <section className="container-fluid" id="plans">
      <div className="plans-div">
        <div className="plans-card-div">
          <PricingCard title="Basic" price="0.00" features="Esse aliquip ut irure aliqua mollit incididunt veniam veniam." color1="#f586ff" color2="#f08989" />
          <PricingCard title="Basic" price="0.00" features="Esse aliquip ut irure aliqua mollit incididunt veniam veniam." color1="" color2="" />
          <PricingCard title="Basic" price="0.00" features="Esse aliquip ut irure aliqua mollit incididunt veniam veniam." color1="" color2="" />
        </div>
      </div>
    </section>
  );
}

export default Plans;
