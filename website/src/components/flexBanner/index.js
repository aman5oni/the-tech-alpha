import React from "react";
import "./style.css";
import DummyImage from "../../assets/images/DummyData.jpg";

const FlexBanner = () => {
  return (
    <div className="flex-banner-container">
      <div className="flex-banner-header">Flex Banner</div>
      <div className="flex-banner-main-container">
        <div className="flex-banner-side-image">
          <img src={DummyImage} className="flex-banner-image" alt="" />
        </div>
        <div className="flex-banner-content-container">
          <div className="flex-banner-content-header">Header</div>
          <div className="flex-banner-content">
            Content dfabk af afdkj dafkadfdasf hadfkhdasf jhdf sdfa kjdfas kjfda
            kdfsa hkfdsk fdsa hkdfadfs df shdf fd kdsfkadfsda kda hkfd ak
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexBanner;
