import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import bcrypt from "bcryptjs";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import { NAVIGATE_TO, TOGGLE_AUTH, ADD_GUEST } from "../actions";
import { routes } from "../reducers/reducer_router";

import { PASSWORDS, SALT } from "../assets/passwords.js";

import Mail from "./rsvp/Mail";
import Guest from "./rsvp/Guest";

import api from "../controler";

import "../styles/rsvp.scss";

const MyTextField = withStyles({
  root: {
    "& .MuiInput-underline:after": {
      borderBottomColor: "#7e7f7f"
    }
  }
})(TextField);

const RSVP = () => {
  const dispatch = useDispatch();
  const [controler] = useState(new api());
  const [password, setPassword] = useState("");
  const [wrongPass, setWrongPass] = useState(false);
  const [mailSubmitted, setMailSubmitted] = useState(false);
  const [emptyName, setEmptyName] = useState([]);

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

  const renderPassword = () => {
    return (
      <div className="RsvpContainer">
        <h3>Vad heter Linnea och Marcus hund?</h3>
        <p style={{ marginTop: "-1em", fontWeight: "light" }}>
          (Lösenordet står på inbjudan)
        </p>
        <MyTextField
          id="pass"
          label="Lösenord"
          className="Input"
          type="password"
          margin="normal"
          variant="standard"
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
    if (!auth) {
      return renderPassword();
    }
    if (mailSubmitted) {
      return guests.info.map((guest, i) => (
        <Guest
          key={i}
          index={i}
          nameIsEmpty={emptyName.includes(i)}
          clearEmptyName={() => {
            emptyName.splice(emptyName.indexOf(i), 1);
            setEmptyName(emptyName);
          }}
        />
      ));
    }

    return <Mail go={() => setMailSubmitted(true)} controler={controler} />;
  };

  const verifyGuests = guestObj => {
    const removeEmptySpec = arr => {
      const newList = arr.map(el => {
        if (el.spec === "") {
          el.spec = "-";
        }
        return el;
      });

      return newList;
    };

    const isNameEmpty = arr => {
      const resIndexes = arr
        .map((el, index) => {
          if (el.name === "") {
            return index;
          }
          return null;
        })
        .filter(el => el != null);

      return resIndexes;
    };

    const emptyNameArray = isNameEmpty(guests.info);

    if (emptyNameArray.length > 0) {
      setEmptyName(emptyNameArray);
      return false;
    }

    guestObj.info = removeEmptySpec(guestObj.info);
    return guestObj;
  };

  const onSubmit = async () => {
    const payload = verifyGuests(guests);
    // Validation checks have failed
    if (payload === false) return;

    try {
      await controler.post(payload);
      dispatch({ type: NAVIGATE_TO, payload: routes.FINAL });
    } catch (err) {
      console.err("Something went terribly wrong when posting!!!");
    }
  };

  const renderButtons = () => {
    if (auth && mailSubmitted) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <Button
            // className="RsvpButton"
            variant="contained"
            color="primary"
            onClick={() => dispatch({ type: ADD_GUEST })}
          >
            Lägg till gäst
          </Button>

          <Button
            className="RsvpButton"
            variant="contained"
            color="primary"
            onClick={() => onSubmit()}
          >
            OSA
          </Button>
        </div>
      );
    }
    return;
  };

  return (
    <div className="RsvpContainer">
      {renderForm()}
      {renderButtons()}
    </div>
  );
};

export default RSVP;
