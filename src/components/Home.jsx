import React from "react";
// import { Link } from "react-router";

function Home() {
  return (
    <section className="container-fluid " id="home">
      <div className=" title-div">
        <div className="wingit-title">
          <a href="#home" className="wingit">
            Wingit
          </a>

          <h1 className="before-typing">
            {"Ordering made "}
            <a
              href="#about"
              className="typewrite"
              data-period="2000"
              data-type='[ "fast.", "safe.", "easy."]'
            >
              <span className="wrap"></span>
            </a>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Home;
