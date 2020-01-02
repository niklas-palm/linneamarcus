import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { TOGGLE_DRAWER } from "./actions";
import { routes } from "./reducers/reducer_router";

import "./App.scss";

import MenuIcon from "@material-ui/icons/Menu";

import Header from "./components/header";
import Drawer from "./components/drawer";

import Landing from "./components/landing";
import RSVP from "./components/rsvp";
import Friday from "./components/friday";
import Contact from "./components/contact";

function App() {
  const route = useSelector(state => state.route);
  const dispatch = useDispatch();
  // const [responding, setResponding] = useState(false);

  const renderRoute = () => {
    switch (route) {
      case routes.LANDING:
        return <Landing />;

      case routes.RSVP:
        return <RSVP />;

      case routes.FRIDAY:
        return <Friday />;

      case routes.CONTACT:
        return <Contact />;

      default:
        break;
    }
  };

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
      {renderRoute()}

      {/* <Router>
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
      </Router> */}
    </div>
  );
}

export default App;
