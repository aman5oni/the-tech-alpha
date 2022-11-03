import React from "react";
import "./style.css";
import WebDesign from "../../assets/icons/WebDesign.png";
import AppDesign from "../../assets/icons/AppDesign.png";
import AppDevelopment from "../../assets/icons/AppDevelopment.png";
import WebDevelopment from "../../assets/icons/WebDevelopment.png";

const OurServices = () => {
  return (
    <div className="our-services-container">
      <div className="our-services-header">Our Services</div>
      <div className="our-services-card-container">
        <div className="our-services-card">
          <img
            src={WebDesign}
            className="our-services-card-container-icon"
            alt=""
          />
          <div className="our-services-card-container-header">Header</div>
          <div className="our-services-card-container-sub-header">
            Sub Header
          </div>
          <div className="our-services-card-container-description">
            Description
          </div>
        </div>
        <div className="our-services-card">
          <img
            src={WebDevelopment}
            className="our-services-card-container-icon"
            alt=""
          />
          <div className="our-services-card-container-header">Header</div>
          <div className="our-services-card-container-sub-header">
            Sub Header
          </div>
          <div className="our-services-card-container-description">
            Description
          </div>
        </div>
        <div className="our-services-card">
          <img
            src={AppDesign}
            className="our-services-card-container-icon"
            alt=""
          />
          <div className="our-services-card-container-header">Header</div>
          <div className="our-services-card-container-sub-header">
            Sub Header
          </div>
          <div className="our-services-card-container-description">
            Description
          </div>
        </div>
        <div className="our-services-card">
          <img
            src={AppDevelopment}
            className="our-services-card-container-icon"
            alt=""
          />
          <div className="our-services-card-container-header">Header</div>
          <div className="our-services-card-container-sub-header">
            Sub Header
          </div>
          <div className="our-services-card-container-description">
            Description
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
