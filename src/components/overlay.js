import React from "react";
// import { useDispatch } from "react-redux";

// import { NAVIGATE_TO } from "../actions/index";
// import { routes } from "../reducers/reducer_router";

import "../styles/overlay.scss";
import "../styles/landing.scss";

import krams from "../assets/krams.png";

// import Button from "@material-ui/core/Button";

const Overlay = () => {
  // const dispatch = useDispatch();

  return (
    <div className="OverlayContainer">
      <div className="OverlayText">
        <h2>1 Augusti 2020</h2>
        <img className="OverlayImg" alt="krams" src={krams} />
        <h2>Vellinge</h2>
      </div>
      {/* <Button
        className="rsvp"
        variant="contained"
        color="primary"
        onClick={() => dispatch({ type: NAVIGATE_TO, payload: routes.RSVP })}
      >
        OSA
      </Button> */}
    </div>
  );
};

export default Overlay;
