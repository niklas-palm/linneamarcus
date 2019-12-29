import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { TOGGLE_DRAWER } from "./actions";

import "./App.scss";

import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

import Header from "./components/header";
import Landing from "./components/landing";
import RSVP from "./components/rsvp";
import Drawer from "./components/drawer";

function App() {
  const dispatch = useDispatch();
  const [responding, setResponding] = useState(false);

  return (
    <div className="App">
      <Header />
      <Drawer />
      <div
        className="Hamburger"
        onClick={() => dispatch({ type: TOGGLE_DRAWER, payload: true })}
      >
        <MenuIcon className="Icon" />
      </div>

      <Router>
        <Switch>
          {responding ? (
            <Route
              path="/"
              component={() => (
                <RSVP setResponding={bool => setResponding(bool)} />
              )}
            />
          ) : null}
          <Route
            path="/"
            component={() => (
              <Landing setResponding={bool => setResponding(bool)} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
