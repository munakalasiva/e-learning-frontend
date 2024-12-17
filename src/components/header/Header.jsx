import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Header.css";



const Header = ({ isAuth }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar expand="lg" bg="light" className="custom-navbar">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="navbar-logo">
            Vaarush E-Learning
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
        <Navbar.Collapse id="basic-navbar-nav" className={isMenuOpen ? "show" : ""}>
          <Nav className="ms-auto">
            <Link to="/" className="nav-link" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/courses" className="nav-link" onClick={toggleMenu}>
              Courses
            </Link>
            <Link to="/about" className="nav-link" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/contactus" className="nav-link" onClick={toggleMenu}>
              Contact Us
            </Link>
            {isAuth ? (
              <Link to="/account" className="nav-link" onClick={toggleMenu}>
                Account
              </Link>
            ) : (
              <Link to="/login" className="nav-link" onClick={toggleMenu}>
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

