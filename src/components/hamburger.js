import React from "react";
import { useDispatch } from "react-redux";

import { TOGGLE_DRAWER } from "../actions";

import MenuIcon from "@material-ui/icons/Menu";

import "../styles/hamburger.scss";

const Hamburger = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="Hamburger"
      onClick={() => dispatch({ type: TOGGLE_DRAWER, payload: true })}
    >
      <MenuIcon className="Icon" />
    </div>
  );
};

export default Hamburger;
