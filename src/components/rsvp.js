import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import bcrypt from "bcryptjs";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";

import { NAVIGATE_TO, TOGGLE_AUTH, UPDATE_GUEST } from "../actions";
import { routes } from "../reducers/reducer_router";

import { PASSWORDS, SALT } from "../assets/passwords.js";

// import api from "../controler";

import "../styles/rsvp.scss";

const RSVP = ({ setResponding }) => {
  const dispatch = useDispatch();
  // const [controler] = useState(new api());
  const [password, setPassword] = useState("");
  const [wrongPass, setWrongPass] = useState(false);

  const auth = useSelector(state => state.auth);
  const guests = useSelector(state => state.rsvp);

  const handlePasswordChange = entry => {
    setWrongPass(false);
    setPassword(entry);
  };

  const handleSubmit = () => {
    if (PASSWORDS.includes(bcrypt.hashSync(password.toLowerCase(), SALT))) {
      dispatch({ type: TOGGLE_AUTH, payload: true });
    } else setWrongPass(true);
  };

  const handleFormChange = (val, field, guest) => {
    console.log(val);

    guests[guest][field] = val;
    let payload = guests;

    dispatch({ type: UPDATE_GUEST, payload });
  };

  const renderPassword = () => {
    return (
      <div className="RsvpContainer">
        <h3>Vad heter Linnea och Marcus hund?</h3>
        <TextField
          id="pass"
          label="Lösenord"
          className="Input"
          type="password"
          margin="normal"
          variant="outlined"
          value={password}
          onChange={e => handlePasswordChange(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            // dispatch({ type: NAVIGATE_TO, payload: routes.LANDING })
            handleSubmit()
          }
        >
          Go!
        </Button>
        {wrongPass ? <p>fel lösenord!</p> : null}
      </div>
    );
  };

  const renderForm = () => {
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
          value={guests.guest1.name}
          onChange={e => handleFormChange(e.target.value, "name", "guest1")}
        />
        <TextField
          id="mail"
          label="Mail"
          className="Input"
          type="email"
          name="mail"
          margin="normal"
          variant="outlined"
          value={guests.guest1.mail}
          onChange={e => handleFormChange(e.target.value, "mail", "guest1")}
        />
        <TextField
          id="allergies"
          label="Specialkost / Allergier"
          className="Input"
          type="text"
          name="allergier"
          margin="normal"
          variant="outlined"
          value={guests.guest1.spec}
          onChange={e => handleFormChange(e.target.value, "spec", "guest1")}
        />

        <div className="Choice">
          <h3>Jag deltar på middagen fredagen den 31/7</h3>
          <Radio
            className="Radio"
            disableRipple
            checked={guests.guest1.friday}
            color="primary"
            onClick={e =>
              handleFormChange(!guests.guest1.friday, "friday", "guest1")
            }
          />
        </div>
        {guests.guest1.friday ? (
          <div className="Choice">
            <h3>Jag önskar transport</h3>
            <Radio
              className="Radio"
              disableRipple
              checked={guests.guest1.ride}
              color="primary"
              onClick={e =>
                handleFormChange(!guests.guest1.ride, "ride", "guest1")
              }
            />
          </div>
        ) : null}
        <Button
          className="RsvpButton"
          variant="contained"
          color="primary"
          onClick={() => dispatch({ type: NAVIGATE_TO, payload: routes.RSVP })}
        >
          OSA
        </Button>
      </div>
    );
  };

  return (
    <div className="RsvpContainer">
      {auth ? renderForm() : renderPassword()}
    </div>
  );
};

export default RSVP;
