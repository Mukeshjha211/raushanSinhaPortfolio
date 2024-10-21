import React from "react";
import "./Footer.css"; // Updated CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Raushan Singha. All rights reserved.</p>
        <div className="footer-links">
          <a
            href="https://github.com/raushan620300"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/raushan-sinha-4b94452a1/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app1"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
