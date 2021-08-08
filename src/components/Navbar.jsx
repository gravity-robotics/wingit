import React, { useState } from "react";
// import { Link } from "react-router";
import "../css/style_index.css";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.min.js";
import { Button, Collapse } from "react-bootstrap";

function Navbar() {
  const [open, setOpen] = useState(false);

  $("body").bind("click", function (e) {
    if ($(e.target).closest(".navbar").length === 0) {
      // click happened outside of .navbar, so hide
      var opened = $(".navbar-toggler").hasClass("opened");
      if (opened === true) {
        setOpen(!open);
        if (!open) {
          $(".navbar-toggler").addClass("opened");
        } else {
          $(".navbar-toggler").removeClass("opened");
        }
      }
    }
  });

  $(".navbar-nav a").click(function () {
    setOpen(!open);
    if (!open) {
      $(".navbar-toggler").addClass("opened");
    } else {
      $(".navbar-toggler").removeClass("opened");
    }
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid">
        <Button
          className="menu navbar-toggler"
          onClick={() => {
            setOpen(!open);
            if (!open) {
              $(".navbar-toggler").addClass("opened");
            } else {
              $(".navbar-toggler").removeClass("opened");
            }
          }}
          type="button"
          aria-controls="navbarNav"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <svg width="50" height="50" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </Button>
        <Collapse in={open}>
          <div className="navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#home">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#plans">
                  PLANS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  CONTACT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/demo">
                  DEMO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/careers">
                  CAREERS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  LOGIN
                </a>
              </li>
            </ul>
          </div>
        </Collapse>
      </div>
    </nav>
  );
}

export default Navbar;
