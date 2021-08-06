import React from "react";
import PricingCard from "./PricingCard";

function Plans() {
  return (
    <section className="container-fluid" id="plans">
      <div className="plans-div">
        <h1 className="plans-heading">Different needs. Different plans.</h1>
        <div className="plans-card-div">
          <PricingCard title="Basic" price="0.00" features="Esse aliquip ut irure aliqua mollit incididunt veniam veniam." color1="#8ec6ff" color2="#7064be" />
          <PricingCard title="Standard" price="1000" features="Esse aliquip ut irure aliqua mollit incididunt veniam veniam." color1="#6bdbd4" color2="#00a0ff" />
          <PricingCard title="Premium" price="3000" features="Esse aliquip ut irure aliqua mollit incididunt veniam veniam."  color1="#f08fee" color2="#f35d7b" />
        </div>
      </div>
    </section>
  );
}

export default Plans;
