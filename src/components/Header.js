import React from "react";
import "./Header.css"; // Ensure this is included

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="profile-picture">
          {/* Replace with a real image of Aniket Singh */}
          <img src={""} alt="Raushan Sinha" />
        </div>
        <div className="header-details">
          <h1 className="name">Raushan Sinha</h1>
          <p className="age">Age: 20</p>
          <p className="tagline">
            Full Stack Developer
          </p>
          <div className="contact-info">
            <p>Email: raushansinha@gmail.com</p>
            {/* <p>LinkedIn: linkedin.com/in/aniket-singh-8b2281261</p> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
