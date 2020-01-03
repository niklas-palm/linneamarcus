import React from "react";

import "../styles/desktopHeader.scss";
import rings from "../assets/rings.png";

import { useDispatch, useSelector } from "react-redux";

import { NAVIGATE_TO } from "../actions";
import { routes } from "../reducers/reducer_router";

const DesktopHeader = () => {
  const dispatch = useDispatch();
  const route = useSelector(state => state.route);
  console.log(route);

  const color = "#bd9147";

  const navigateTo = route => {
    dispatch({ type: NAVIGATE_TO, payload: route });
  };

  return (
    <div className="DeskHeader">
      <div className="DeskHeaderItem" onClick={() => navigateTo(routes.FRIDAY)}>
        <h3 style={route === routes.FRIDAY ? { color } : null}>Fredag</h3>
      </div>

      <div
        className="DeskHeaderItem"
        onClick={() => navigateTo(routes.LANDING)}
      >
        <h3 style={route === routes.LANDING ? { color } : null}>Bröllopsdag</h3>
      </div>

      <div
        className="DeskHeaderItem"
        onClick={() => navigateTo(routes.LANDING)}
      >
        <h3 style={route === routes.LANDING ? { color } : null}>Om oss</h3>
      </div>

      <div className="HeaderCenter">
        <h1>Niklas</h1>
        <img className="HeaderRings" src={rings} alt="rings" />
        <h1>Marcus</h1>
      </div>

      <div className="DeskHeaderItem" onClick={() => navigateTo(routes.INFO)}>
        <h3 style={route === routes.INFO ? { color } : null}>
          Praktikaliteter
        </h3>
      </div>

      <div className="DeskHeaderItem" onClick={() => navigateTo(routes.RSVP)}>
        <h3 style={route === routes.RSVP ? { color } : null}>OSA</h3>
      </div>

      <div
        className="DeskHeaderItem"
        onClick={() => navigateTo(routes.CONTACT)}
      >
        <h3 style={route === routes.CONTACT ? { color } : null}>Kontakt</h3>
      </div>
    </div>
  );
};

export default DesktopHeader;
