import React from "react";
import logo from "../logo.svg";
import Button from "@material-ui/core/Button";

const Landing = ({ setResponding }) => {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Vi gifter oss och ni är inte bjudna!</p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setResponding(true)}
      >
        Press me!
      </Button>
    </div>
  );
};

export default Landing;
