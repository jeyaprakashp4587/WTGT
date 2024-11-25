/** @format */

import React from "react";
import "./about.css";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <div className="about-wrapper container mt-5" id="about">
      <div className="about-wrapper-left">
        <img src={aboutImg} alt="" />
      </div>
      <div className="about-wrapper-right">
        <h2 className="text">Who we are?</h2>
        <p>
          At WTGT, we specialize in innovative web app development to transform
          your ideas into functional, engaging, and user-friendly digital
          solutions. Our mission is to empower businesses and individuals by
          creating cutting-edge web applications that combine modern design,
          robust functionality, and seamless performance. We believe in
          delivering excellence through every line of code. Whether you're a
          startup looking to establish your online presence or an enterprise
          aiming to optimize workflows, WTGT is your trusted partner in crafting
          tailored solutions that drive success. Why Choose WTGT? Expertise in
          the latest web technologies and frameworks. Commitment to delivering
          scalable and secure applications. Customer-centric approach to ensure
          your vision comes to life. Let’s turn your web app ideas into
          reality—where tech gets transformed!
        </p>
      </div>
    </div>
  );
};

export default About;
