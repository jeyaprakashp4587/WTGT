/** @format */

import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-wrapper container mt-5" id="about">
      <div className="about-wrapper-left">
        <img src="https://i.ibb.co/XDqtvsJ/5155720-2672335.jpg" alt="" />
      </div>
      <div className="about-wrapper-right">
        <h2 className="text">Who we are?</h2>
        <p>We are an Start up specialized in developing Web applications and Mobile applications with <span>Latest Technologies & Love.</span></p>
        <p>It's okay if you already developed the website, We also <span>re-design and maintenance</span> your website with current trend and standard.</p>
      </div>
    </div>
  );
};

export default About;
