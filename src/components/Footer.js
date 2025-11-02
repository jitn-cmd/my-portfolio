import React from "react";
import "../assets/styles/Footer.css"; // ✅ Footer CSS Import

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p> ©2025 Your Name.All rights reserved. </p>{" "}
        <div className="footer-social">
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
            />
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
              alt="LinkedIn"
            />
          </a>{" "}
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733635.png"
              alt="Twitter"
            />
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
};

export default Footer;
