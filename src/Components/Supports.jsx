import React from "react";
import "./support.css";

const Supports = () => {
  return (
    <div className="support-wrapper container" id="support">
      <h2>Our Supports!</h2>
      <div className="support-details">
        <div className="support-boxes">
          <div>
            <h5>Free-maintenance (Half-year)</h5>
            <h6>
              We offer you the semi-annual maintenance service expertly provided
              by our team
            </h6>
          </div>
          <div>
            <h5>SEO (Search Engine Optimization)</h5>
            <h6>
              we boost your online presence and drive organic traffic to your
              website.
            </h6>
          </div>
          <div>
            <h5>Performance Optimization.</h5>
            <h6>
              We enhance web/apps to adapt to different device capabilities and
              network conditions.
            </h6>
          </div>
          <div>
            <h5>Free (Website Security Scans)</h5>
            <h6>
              We secure and scan to identify vulnerabilities and advise you, how
              to secure your websites.
            </h6>
          </div>
        </div>
        <div className="support-img">
          <img
            src="https://i.ibb.co/c34J38V/26761899-2106-i201-003-S-m004-c13-call-center-technical-support-isometric-01.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Supports;
