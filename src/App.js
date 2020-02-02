import React from "react";
import { useSelector } from "react-redux";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import { routes } from "./reducers/reducer_router";

import "./App.scss";

import Header from "./components/header";
import DesktopHeader from "./components/desktopHeader";
import Drawer from "./components/drawer";
import Hamburger from "./components/hamburger";

import Landing from "./components/landing";
import Wedding from "./components/wedding";
import RSVP from "./components/rsvp";
import Friday from "./components/friday";
import Contact from "./components/contact";
import Info from "./components/info";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Cormorant Garamond", "serif"].join(",")
  }
});

function App() {
  const route = useSelector(state => state.route);

  const renderRoute = () => {
    switch (route) {
      case routes.LANDING:
        return <Landing />;

      case routes.WEDDING:
        return <Wedding />;

      case routes.RSVP:
        return <RSVP />;

      case routes.FRIDAY:
        return <Friday />;

      case routes.INFO:
        return <Info />;

      case routes.CONTACT:
        return <Contact />;

      default:
        break;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <DesktopHeader />
        <Header />

        <Drawer />
        <Hamburger />

        {renderRoute()}
      </div>
    </ThemeProvider>
  );
}

export default App;
