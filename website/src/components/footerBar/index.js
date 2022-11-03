import React from "react";
import "./style.css";

import ArrowRightIcon from "../../assets/icons/ArrowRight.png";
import FaceBookIcon from "../../assets/icons/FacebookIcon.png";
import InstagramIcon from "../../assets/icons/InstagramIcon.png";
import LinkedInIcon from "../../assets/icons/LinkedInIcon.png";
import TwitterIcon from "../../assets/icons/TwitterIcon.png";
import PhoneIcon from "../../assets/icons/PhoneIcon.png";
import LocationIcon from "../../assets/icons/LocationIcon.png";
import MailIcon from "../../assets/icons/MailIcon.png";

const FooterBar = () => {
  return (
    <div className="footer-bar-container">
      <div className="footer-bar-main-container">
        <div className="footer-bar-left-section-container">
          <div className="footer-bar-header">THE TECH ALPHA</div>
          <div className="footer-bar-content">
            Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem
            lorem sit sed elitr sed kasd et
          </div>
          <div className="footer-bar-tiny-header">FOLLOW US</div>
          <div className="footer-bar-social-icon-container">
            <div className="footer-bar-social-icon-button">
              <img
                className="footer-bar-social-icon"
                src={TwitterIcon}
                alt=""
              />
            </div>
            <div className="footer-bar-social-icon-button">
              <img
                className="footer-bar-social-icon"
                src={FaceBookIcon}
                alt=""
              />
            </div>
            <div className="footer-bar-social-icon-button">
              <img
                className="footer-bar-social-icon"
                src={InstagramIcon}
                alt=""
              />
            </div>
            <div className="footer-bar-social-icon-button">
              <img
                className="footer-bar-social-icon"
                src={LinkedInIcon}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="footer-bar-main-section-container">
          <div className="footer-bar-sub-header">GET IN TOUCH</div>
          <div className="footer-bar-content">
            Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem
            lorem sit sed elitr sed kasd et
          </div>
          <div className="footer-bar-credentials-container">
            <img
              className="footer-bar-credentials-icon"
              src={LocationIcon}
              alt=""
            />
            <div className="footer-bar-credentials-name">
              Near BSNL Tower,Manasa
            </div>
          </div>
          <div className="footer-bar-credentials-container">
            <img
              className="footer-bar-credentials-icon"
              src={PhoneIcon}
              alt=""
            />
            <div className="footer-bar-credentials-name">+91 62606 21943</div>
          </div>
          <div className="footer-bar-credentials-container">
            <img
              className="footer-bar-credentials-icon"
              src={MailIcon}
              alt=""
            />
            <div className="footer-bar-credentials-name">
              sonichinu820@gmail.com
            </div>
          </div>
        </div>
        <div className="footer-bar-main-section-container">
          <div className="footer-bar-sub-header">QUICK LINKS</div>
          <div className="footer-bar-links-container">
            <img
              className="footer-bar-links-icon"
              src={ArrowRightIcon}
              alt="link"
            />
            <div className="footer-bar-links-name">Home</div>
          </div>
          <div className="footer-bar-links-container">
            <img
              className="footer-bar-links-icon"
              src={ArrowRightIcon}
              alt="link"
            />
            <div className="footer-bar-links-name">About Us</div>
          </div>
          <div className="footer-bar-links-container">
            <img
              className="footer-bar-links-icon"
              src={ArrowRightIcon}
              alt="link"
            />
            <div className="footer-bar-links-name">Our Services</div>
          </div>
          <div className="footer-bar-links-container">
            <img
              className="footer-bar-links-icon"
              src={ArrowRightIcon}
              alt="link"
            />
            <div className="footer-bar-links-name">Pricing Plan</div>
          </div>
          <div className="footer-bar-links-container">
            <img
              className="footer-bar-links-icon"
              src={ArrowRightIcon}
              alt="link"
            />
            <div className="footer-bar-links-name">Meet The Team</div>
          </div>
          <div className="footer-bar-links-container">
            <img
              className="footer-bar-links-icon"
              src={ArrowRightIcon}
              alt="link"
            />
            <div className="footer-bar-links-name">Contact Us</div>
          </div>
        </div>
        <div className="footer-bar-main-section-container">
          <div className="footer-bar-sub-header">NEWSLETTER</div>
          <div className="footer-bar-content">
            Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem
            lorem sit sed elitr sed kasd et
          </div>
          <div className="footer-bar-send-email-container">
            <input
              type="text"
              className="footer-bar-email"
              placeholder="YOUR EMAIL"
            />
            <div className="footer-bar-button">SIGN UP</div>
          </div>
          <div className="footer-bar-paragraph">SUBSCRIBE FOR MORE</div>
        </div>
      </div>
      <div className="footer-bar-bottom-container">
        <div className="footer-bar-bottom-header">
          @
          <span className="footer-bar-bottom-company-name">
            THE TECH ALPHA{" "}
          </span>{" "}
          All Rights Reserved
        </div>
        <div className="footer-bar-bottom-sub-header">
          Designed By{" "}
          <span className="footer-bar-bottom-company-name">Aman Soni</span>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
