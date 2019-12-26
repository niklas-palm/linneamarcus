import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

import Header from "./components/header";
import Landing from "./components/landing";
import RSVP from "./components/rsvp";

function App() {
  const [responding, setResponding] = useState(false);

  return (
    <div className="App">
      <Header />
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
