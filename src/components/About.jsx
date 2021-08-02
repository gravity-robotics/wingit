import React from "react";

function About() {
    return (
        <section className="container-fluid" id="about">
      <div className="about-div">
        <h1 className="section-title">"What's Wingit?" you ask.</h1>
        <div className="cards">

          <div className="pushed card">
            <h2 className="card-heading">SCAN</h2>
            <p className="card-text">It lets your clients be seated or come up to your store front to scan a QR code. They
              are greeted by a webapp, with your menu, completely curated to your store's theme.</p>
          </div>
          <div className="pushed card">
            <h2 className="card-heading">ORDER</h2>
            <p className="card-text">From there your clients can not only browse and filter the menu, but also order and pay
              online.</p>
          </div>
          <div className="pushed card">
            <h2 className="card-heading">PAY</h2>
            <p className="card-text">The order comes right to your Point of Sale and you get a ton of benefits through this
              simple process.</p>
          </div>
          <div className="pushed card">
            <h2 className="card-heading">ANYWHERE</h2>
            <p className="card-text">Why should good things be limited? Use Wingit for anything, anywhere. You provide
              services? You need Wingit!</p>
          </div>
        </div>

      </div>
    </section>
    );
}

export default About;