import React from "react";

import "../styles/overlay.scss";
import "../styles/landing.scss";

import krams from "../assets/krams.png";

const Overlay = () => {
  return (
    <div className="OverlayContainer">
      <h2>1 Augusti</h2>
      <img className="OverlayImg" alt="krams" src={krams} />
      <h2>Vellinge</h2>
    </div>
  );
};

export default Overlay;
