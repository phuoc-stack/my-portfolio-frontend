import {
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import "./FooterStyles.css";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <p>Hawthorn, Melbourne</p>
          </div>
          <div className="phone">
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <p>0415 330 620</p>
          </div>
          <div className="email">
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <p>hosuthaophuoc@gmail.com</p>
          </div>
        </div>
        <div className="right">
          <h4>Connect with me</h4>
          <div className="social">
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <a
                href="https://www.linkedin.com/in/kirsy-phuoc-ho/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Phuoc (Kirsy) Ho</p>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
