import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


import {useNavigate} from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();
    const handleNavigation=(path)=>{
         navigate(path);
     }
  return (
    <footer>
      <div className="footer-content">
        <button  className="btn" onClick={() => handleNavigation('/privacypolicy')}>Privacy Policy</button>
        <button  className="btn" onClick={() => handleNavigation('/termsandconditions')}>Terms and Conditions</button>
        <button  className="btn" onClick={() => handleNavigation('/refund')}>Refunds/Cancellations</button>
        <p className="copyright">
          &copy; 2024 Your Vaarush E-Learning Platform. All rights reserved. <br />
        </p>
        <div className="social-links">
        <a href="https://www.linkedin.com/in/vaarush-technologies-official-95244a301/">
        <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/vaarushtechnologies/">
            <AiFillInstagram />
          </a>
          <a href="https://www.youtube.com/@VaarushTechnologies">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
