import React from "react";
import "./soMeLinks.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export const SoMeLinks = () => {
  return (
    <div className="socialMediaContainer">
      <a
        className="icons facebook-icon"
        href="https://www.facebook.com/ispas.dani14/"
      >
        <FacebookIcon />
      </a>
      <a className="icons github-icon" href="https://github.com/ispasdani">
        <GitHubIcon />
      </a>
      <a className="icons linkedin-icon" href="www.linkedin.com/in/dani-ispas">
        <LinkedInIcon />
      </a>
      <a
        className="icons instagram-icon"
        href="https://www.instagram.com/ispasdani/"
      >
        <InstagramIcon />
      </a>
      <a
        className="icons twitter-icon"
        href="https://twitter.com/IspasDaniel14"
      >
        <TwitterIcon />
      </a>
    </div>
  );
};
