import React from "react";

import "../styles/header.scss";
import rings from "../assets/rings.png";

import { useDispatch } from "react-redux";

import { NAVIGATE_TO } from "../actions";
import { routes } from "../reducers/reducer_router";

const Header = () => {
  const dispatch = useDispatch();

  const navigateTo = route => {
    dispatch({ type: NAVIGATE_TO, payload: route });
  };

  return (
    <div className="Header">
      <h1 onClick={() => navigateTo(routes.LANDING)}>Linnea</h1>
      <img
        className="HeaderRings"
        src={rings}
        alt="rings"
        onClick={() => navigateTo(routes.LANDING)}
      />
      <h1 onClick={() => navigateTo(routes.LANDING)}>Marcus</h1>
    </div>
  );
};

export default Header;
