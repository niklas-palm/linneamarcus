import React, { useState } from "react";
import logo from "./logo.svg";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./App.scss";

import api from "./controler";

function App() {
  const [controler] = useState(new api());

  return (
    <CssBaseline>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Vi gifter oss och ni är inte bjudna!</p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => controler.post()}
          >
            Press me!
          </Button>
        </div>
      </div>
    </CssBaseline>
  );
}

export default App;
