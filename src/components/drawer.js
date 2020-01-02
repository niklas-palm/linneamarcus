import React from "react";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";

import { useDispatch, useSelector } from "react-redux";

import { TOGGLE_DRAWER, NAVIGATE_TO } from "../actions";
import { routes } from "../reducers/reducer_router";

import "../styles/drawer.scss";

import mingle from "../assets/drawer/mingle.png";
import heart from "../assets/drawer/heart.png";
import contact from "../assets/drawer/contact.png";
import info from "../assets/drawer/info.png";
import rsvp from "../assets/drawer/rsvp.png";

export default function SwipeableTemporaryDrawer() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const open = state.drawer;
  const current = state.route;

  const color = "cadetblue";

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    dispatch({ type: TOGGLE_DRAWER, payload: open });
  };

  const navigateTo = route => {
    dispatch({ type: TOGGLE_DRAWER, payload: false });
    dispatch({ type: NAVIGATE_TO, payload: route });
  };

  const list = () => {
    return (
      <div className="Drawer">
        <div className="DrawerRow" onClick={() => navigateTo(routes.FRIDAY)}>
          <img src={mingle} alt="mingle" className="Icon" />
          <h3 style={current === routes.FRIDAY ? { color } : null}>Fredag</h3>
        </div>

        <div className="DrawerRow" onClick={() => navigateTo(routes.LANDING)}>
          <img src={heart} alt="heart" className="Icon" />
          <h3 style={current === routes.LANDING ? { color } : null}>
            Bröllopsdag
          </h3>
        </div>

        <div className="DrawerRow" onClick={() => navigateTo(routes.INFO)}>
          <img src={info} alt="info" className="Icon" />

          <h3 style={current === routes.INFO ? { color } : null}>
            Praktikaliteter
          </h3>
        </div>

        <div className="DrawerRow" onClick={() => navigateTo(routes.RSVP)}>
          <img src={rsvp} alt="osa" className="Icon" />
          <h3 style={current === routes.RSVP ? { color } : null}>OSA</h3>
        </div>

        <Divider />

        <div className="DrawerRow" onClick={() => navigateTo(routes.CONTACT)}>
          <img src={contact} alt="contact" className="Icon" />

          <h3 style={current === routes.CONTACT ? { color } : null}>Kontakt</h3>
        </div>
      </div>
    );
  };

  return (
    <div>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
