import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ isAuth }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="logo">Vaarush E-Learning</div>
      <div className={`link ${isMenuOpen ? "open" : ""}`}>
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </button>
        <nav>
          <Link to={"/"} onClick={toggleMenu}>Home</Link>
          <Link to={"/courses"} onClick={toggleMenu}>Courses</Link>
          <Link to={"/about"} onClick={toggleMenu}>About</Link>
          <Link to={"/contactus"} onclick={toggleMenu}>ContactUs</Link>
          {isAuth ? (
            <Link to={"/account"} onClick={toggleMenu}>Account</Link>
          ) : (
            <Link to={"/login"} onClick={toggleMenu}>Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
