import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// import api from "../controler";

import "../styles/rsvp.scss";

const RSVP = ({ setResponding }) => {
  // const [controler] = useState(new api());

  return (
    <div className="RsvpContainer">
      <TextField
        id="outlined-email-input"
        label="Namn"
        className="Input"
        type="name"
        name="namn"
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-email-input"
        label="Telefonnummer"
        // className={classes.textField}
        className="Input"
        type="tel"
        name="telefonnummer"
        // autoComplete="email"
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-email-input"
        label="Allergier"
        // className={classes.textField}
        className="Input"
        type="text"
        name="allergier"
        // autoComplete="email"
        margin="normal"
        variant="outlined"
        // value={this.}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setResponding(false)}
      >
        Press me!
      </Button>
    </div>
  );
};

export default RSVP;
