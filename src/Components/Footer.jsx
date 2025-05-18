/** @format */

import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper" id="contact">
      <div className="footer-content container">
        <div
          className="footer-logo"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
            border: "0px solid red",
          }}
        >
          <h2>Rynex</h2>
          <p>An Software Solution</p>
          <div className="footer-icons"></div>
        </div>
        <div className="footer-navigate">
          <h3>Pages</h3>
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#about">
            {" "}
            <li>About Us</li>
          </a>
          <a href="#work">
            {" "}
            <li>Services</li>
          </a>
          <a href="#support">
            {" "}
            <li>Features</li>
          </a>
          <a href="#contact">
            <li>Contact Us</li>
          </a>
        </div>
        <div className="footer-services">
          <h3>Our Services</h3>

          <li>Web Development</li>
          <li>App Development</li>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <div>
            <i class="fa fa-phone" aria-hidden="true"></i>
            +91 9025167302
          </div>
          <div>
            <i class="fa fa-location-arrow" aria-hidden="true"></i>
            2/1 Second Floor, Joseph Convent School,Opposite
            Tirunelveli,TamilNadu,India
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <i class="fa fa-mail-forward" aria-hidden="true"></i>
            Rynex@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
