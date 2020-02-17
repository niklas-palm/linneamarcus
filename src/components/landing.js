import React from "react";
import { useDispatch } from "react-redux";

import { NAVIGATE_TO } from "../actions";
import { routes } from "../reducers/reducer_router";

import Button from "@material-ui/core/Button";

import "../styles/landing.scss";

import Overlay from "./overlay";

const Landing = () => {
  const dispatch = useDispatch();

  return (
    <div className="LandingContainer">
      <img className="LandingImage" alt=" " />
      <Overlay />

      <div className="center" style={{ marginTop: "2em" }}>
        <p className="intro">
          En mörk novemberkväll 2012 i vimlet på Stockholms nation i Uppsala
          träffades vi, brudparet, för första gången och båda kände att det låg
          något speciellt i luften. Marcus försökte bjuda hem Linnea på
          efterfest, Linnea nappade dock inte den gången. Några veckor senare
          var det dags för lussegasque, och vi pratade oavbrutet med varandra i
          minst åtta timmar… osv Den första kyssen ägde rum i på Snerikes nation
          i Uppsala precis före jul, och efter det har vi varit oskiljaktiga.
        </p>
      </div>
      <div
        className="divider"
        style={{ marginBottom: "2em", marginTop: "0.5em" }}
      ></div>

      <Button
        className="RsvpButton"
        variant="contained"
        color="primary"
        onClick={() => dispatch({ type: NAVIGATE_TO, payload: routes.RSVP })}
      >
        OSA
      </Button>
    </div>
  );
};

export default Landing;
