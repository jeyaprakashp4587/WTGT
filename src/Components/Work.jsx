/** @format */

import React from "react";
import "./work.css";
import webDevelopImg from "../assets/wegDevelopment.jpg";
import appDevelopImg from "../assets/appDevelopment.png";

import htmlImg from "../assets/html.png";
import cssImg from "../assets/css-3.png";
import bootImg from "../assets/bt.png";
import rnImg from "../assets/rn.png";
import jslImg from "../assets/js.png";
import swiftImg from "../assets/sw.png";
import kotlin from "../assets/kt.png";

const Work = () => {
  const webTools = [htmlImg, cssImg, jslImg, bootImg, rnImg];
  const appTools = [rnImg, kotlin, swiftImg];
  return (
    <div className="work-wrapper container" id="work">
      <h2>What We Make?</h2>
      <div className="work-wrappers mt-5 ">
        <div className="webDevelop">
          <div>
            <img src={webDevelopImg} alt="" />
          </div>
          <div>
            <h3>Web Development</h3>
            <p>
              We develop high-performance websites and web applications tailored
              to meet your business needs. Our solutions ensure responsiveness,
              cross-browser compatibility, and adherence to the latest industry
              standards. From dynamic web apps to static websites, we focus on
              delivering seamless user experiences and scalable architectures.
            </p>
            <div className="Tools">
              {webTools.map((img) => (
                <img src={img} alt="webImg"/>
              ))}
            </div>
          </div>
        </div>
        <div className="appDevelop">
          <div>
            <img src={appDevelopImg} alt="" />
          </div>
          <div>
            <h3>App Development</h3>
            <p>
              Our mobile applications are designed to work flawlessly across
              both iOS and Android platforms. With a focus on intuitive design,
              smooth navigation, and robust functionality, we create apps that
              enhance user engagement and meet the demands of the modern
              mobile-first world. Whether it's for startups or enterprises, we
              deliver apps that users love.
            </p>
            <div className="Tools">
              {appTools.map((img) => (
                <img src={img} alt="app"/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
