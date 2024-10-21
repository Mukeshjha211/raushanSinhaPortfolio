import React from "react";
import "./Header.css"; // Ensure this is included
import raushansinha from "../Images/raushan.jpeg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="profile-picture">
          <img src={raushansinha} alt="Raushan Sinha" />
        </div>
        <div className="header-details">
          <h1 className="name">Raushan Sinha</h1>
          <p className="age">Age: 20</p>
          <p className="tagline">Full Stack Developer</p>
          <div className="contact-info">
            <p>Email: raushankrsinha2004@gmail.com</p>
            <p>
              LinkedIn: https://www.linkedin.com/in/raushan-sinha-4b94452a1/
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
