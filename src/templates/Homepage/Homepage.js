import React from "react";
import "./homepage.css";
import sideBackground from "../../assets/sideBackground.png";
import triangle from "../../assets/triangle.png";
import wizzardText from "../../assets/wizzardText.png";
import { Title } from "../../components/Title/Title";
import { SoMeLinks } from "../../components/SoMeLinks/SoMeLinks";
import { Browser } from "../BrowserFrame/Browser";

const Homepage = () => {
  return (
    <div className="homepage">
      <img
        src={sideBackground}
        className="sideBackground"
        alt="sideMountains"
      />
      <img src={triangle} className="triangle" alt="sideMountains" />
      <img src={wizzardText} className="wizzardText" alt="sideMountains" />
      <div className="content">
        <Title />
        <SoMeLinks />
        <Browser />
      </div>
    </div>
  );
};

export default Homepage;
