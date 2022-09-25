import React from "react";
import "./title.css";

export const Title = () => {
  return (
    <div className="title-container">
      <div className="small-title">
        <h2 className="jelly-letter">I</h2>
        <h2 className="jelly-letter">'</h2>
        <h2 className="diff att">m</h2>
      </div>
      <div className="title">
        <h1 className="jelly-letter">
          <span className="span-light">D</span>
        </h1>
        <h1 className="jelly-letter">
          <span className="span-light">A</span>
        </h1>
        <h1 className="jelly-letter">
          <span className="span-light">N</span>
        </h1>
        <h1 className="jelly-letter">
          <span className="span-light">N</span>
        </h1>
        <h1 className="jelly-letter">
          <span className="span-light">I</span>
        </h1>
      </div>
    </div>
  );
};
