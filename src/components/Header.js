import React from "react";
import "./Header.css"; // Ensure this is included
import aniketSingh from "../Images/aniketSingh.jpeg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="profile-picture">
          {/* Replace with a real image of Aniket Singh */}
          <img src={aniketSingh} alt="Aniket Singh" />
        </div>
        <div className="header-details">
          <h1 className="name">Aniket Singh</h1>
          <p className="age">Age: 23</p>
          <p className="tagline">
            Developer Relations (DevRel) Professional at Zuraverse
          </p>
          <div className="contact-info">
            <p>Email: aniketsingh1845@gmail.com</p>
            <p>LinkedIn: linkedin.com/in/aniket-singh-8b2281261</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
