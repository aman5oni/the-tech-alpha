import React from "react";
import "./style.css";
import DummyImage from "../../assets/images/DummyImage.jpg";

const Section = () => {
  return (
    <div className="section-container">
      <div className="section-header">WHO WE ARE</div>
      <div className="section-card-container">
        <div className="section-card">
          <img src={DummyImage} className="section-card-image" alt="" />
          <div className="section-card-header">HEADER</div>
          <div className="section-card-content">CONTENT fda a df f dasf af fd fd fdas dfsasa gds adds aasd fa dfad fds fdafd a fda dfa daf fad fda dfa fdas df</div>
        </div>
        <div className="section-card">
          {" "}<img src={DummyImage} className="section-card-image" alt="" />
          <div className="section-card-header">HEADER</div>
          <div className="section-card-content">CONTENT</div>
        </div>
        <div className="section-card">
          {" "}<img src={DummyImage} className="section-card-image" alt="" />
          <div className="section-card-header">HEADER</div>
          <div className="section-card-content">CONTENT</div>
        </div>
      </div>
    </div>
  );
};

export default Section;
