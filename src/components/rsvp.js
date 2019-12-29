import React from "react";
import { useDispatch } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { NAVIGATE_TO } from "../actions";
import { routes } from "../reducers/reducer_router";

// import api from "../controler";

import "../styles/rsvp.scss";

const RSVP = ({ setResponding }) => {
  const dispatch = useDispatch();
  // const [controler] = useState(new api());

  return (
    <div className="RsvpContainer">
      <TextField
        id="namn"
        label="Namn"
        className="Input"
        type="name"
        name="namn"
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="tel"
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
        id="allergies"
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
        onClick={() => dispatch({ type: NAVIGATE_TO, payload: routes.LANDING })}
      >
        Press me!
      </Button>
    </div>
  );
};

export default RSVP;
