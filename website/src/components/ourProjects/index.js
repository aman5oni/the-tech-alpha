import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import Isotope from "isotope-layout";
import "./style.css";
import DummyImage from "../../assets/images/DummyImage.jpg";

const OurProjects = () => {
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    isotope.current = new Isotope(
      ".our-projects-project-overall-card-container",
      {
        itemSelector: ".our-projects-card-container",
        layoutMode: "fitRows"
      }
    );
    // cleanup
    return () => isotope.current.destroy();
  }, []);

  useEffect(
    () => {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    },
    [filterKey]
  );

  useEffect(() => {
    $(".our-projects-button").click(() => {
      $(".our-projects-button").removeClass(".our-projects-active");
      $(this).addClass(".our-projects-active");
    });
  });

  const handleFilterKeyChange = key => () => setFilterKey(key);

  return (
    <div className="our-projects-container">
      <div className="our-projects-header">OUR PROJECTS </div>
      <div className="our-projects-main-card-container">
        <div className="our-projects-button-container">
          <div
            className="our-projects-button our-projects-active"
            onClick={handleFilterKeyChange("*")}
          >
            ALL
          </div>
          <div
            className="our-projects-button"
            onClick={handleFilterKeyChange("web")}
          >
            WEB DESIGN
          </div>
          <div
            className="our-projects-button"
            onClick={handleFilterKeyChange("seo")}
          >
            SEO
          </div>
          <div
            className="our-projects-button"
            onClick={handleFilterKeyChange("graphics")}
          >
            GRAPHICS
          </div>
        </div>
        <div className="our-projects-project-overall-card-container">
          <div className="our-projects-card-container web">
            <img className="our-project-card-image" src={DummyImage} alt="" />
            <div className="our-projects-card-name">Name</div>
          </div>
          <div className="our-projects-card-container seo">
            <img className="our-project-card-image" src={DummyImage} alt="" />
            <div className="our-projects-card-name">Name</div>
          </div>
          <div className="our-projects-card-container graphics">
            <img className="our-project-card-image" src={DummyImage} alt="" />
            <div className="our-projects-card-name">Name</div>
          </div>
          <div className="our-projects-card-container web">
            <img className="our-project-card-image" src={DummyImage} alt="" />
            <div className="our-projects-card-name">Name</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
