import React from "react";

import "../styles/overlay.scss";
import "../styles/landing.scss";

import krams from "../assets/krams.png";

import Button from "@material-ui/core/Button";

const Overlay = ({ setResponding }) => {
  return (
    <div className="OverlayContainer">
      <div className="OverlayText">
        <h2>1 Augusti</h2>
        <img className="OverlayImg" alt="krams" src={krams} />
        <h2>Vellinge</h2>
      </div>
      <Button
        className="rsvp"
        variant="contained"
        color="primary"
        onClick={() => setResponding(true)}
      >
        OSA
      </Button>
    </div>
  );
};

export default Overlay;
