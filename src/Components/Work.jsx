/** @format */

import React from "react";
import "./work.css";

const Work = () => {
  return (
    <div className="work-wrapper container" id="work">
      <h2>What We Make?</h2>
      <div className="work-wrappers mt-5 ">
        <div>
          <img src="https://i.ibb.co/sJTyDRM/Open-source-rafiki.png" alt="" />
          <h3>Web Development</h3>
          <p>
            We develop websites and webapps with current industry standards.
          </p>
          <div className="line1"></div>
        </div>
        <div>
          <img
            src="https://i.ibb.co/h1xmhtB/Mobile-development-rafiki.png"
            alt=""
          />
          <h3>App Development</h3>
          <p>
            We develop mobile applications where the users can use the
            applications on both ios and android.
          </p>
          <div className="line2"></div>
        </div>
      </div>
    </div>
  );
};

export default Work;
