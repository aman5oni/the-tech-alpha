import React from "react";
import "./style.css";
import DoughNutChart from "../../assets/icons/DoughNutChart.png";
import GoogleEarth from "../../assets/icons/GoogleEarth.png";
import MindMap from "../../assets/icons/MindMap.png";

const Highlight = () => {
  return (
    <div className="highlight-container">
      <div className="highlight-header">HighlightS</div>
      <div className="highlight-card-container">
        <div className="highlight-card">
          <img src={GoogleEarth} alt="" className="highlight-card-image" />
          <div className="highlight-card-title">TItle</div>
          <div className="highlight-card-description">Description</div>
        </div>
        <div className="highlight-card">
          <img src={DoughNutChart} alt="" className="highlight-card-image" />
          <div className="highlight-card-title">TItle</div>
          <div className="highlight-card-description">Description</div>
        </div>
        <div className="highlight-card">
          <img src={MindMap} alt="" className="highlight-card-image" />
          <div className="highlight-card-title">TItle</div>
          <div className="highlight-card-description">Description</div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
