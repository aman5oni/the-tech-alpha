import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NavigationBar = () => {
  return (
    <div className="navigation-bar-container">
      <div className="navigation-bar-web-container">
        <Link to="/" className="navigation-bar-logo">
          THE TECH ALPHA
        </Link>
        <div className="navigation-bar-button-container">
          <Link to="/" className="navigation-bar-button">
            HOME
          </Link>
          <Link to="/services" className="navigation-bar-button">
            SERVICES
          </Link>
          <Link to="/portfolio" className="navigation-bar-button">
            PORTFOLIO
          </Link>
          <Link to="/career" className="navigation-bar-button">
            CAREER
          </Link>
          <Link to="/contact" className="navigation-bar-button">
            CONTACT US
          </Link>
          <Link to="/about" className="navigation-bar-button">
            ABOUT US
          </Link>
          <div className="navigation-bar-mobile-icon">BUTTON 6</div>
        </div>
      </div>
      <div className="navigation-bar-mobile-button-container">
        <div className="navigation-bar-mobile-button">HOME</div>
        <div className="navigation-bar-mobile-button">SERVICES</div>
        <div className="navigation-bar-mobile-button">PORTFOLIO</div>
        <div className="navigation-bar-mobile-button">CAREER</div>
        <div className="navigation-bar-mobile-button">BLOG'S</div>
        <div className="navigation-bar-mobile-button">GALLARY</div>
        <div className="navigation-bar-mobile-button">CONTACT US</div>
        <div className="navigation-bar-mobile-button">ABOUT US</div>
      </div>
    </div>
  );
};

export default NavigationBar;
