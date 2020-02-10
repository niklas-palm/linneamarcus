import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";

import { UPDATE_GUEST } from "../../actions";

const MyTextField = withStyles({
  root: {
    "& .MuiInput-underline:after": {
      borderBottomColor: "#7e7f7f"
    }
  }
})(TextField);

const Mail = ({ go, controler }) => {
  const [wrongMail, setWrongMail] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const guests = useSelector(state => state.rsvp);

  const handleMailChange = mail => {
    wrongMail && setWrongMail(false);

    guests.email = mail;

    dispatch({ type: UPDATE_GUEST, payload: guests });
  };

  const onSubmit = async () => {
    // validate email
    setLoading(true);
    const validateEmail = email => {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    if (!validateEmail(guests.email)) {
      setWrongMail(true);
      setLoading(false);
      return;
    }
    guests.email = guests.email.toLowerCase();
    const res = await controler.get(guests.email);

    if (
      res.data &&
      res.data.Item &&
      Object.keys(res.data.Item).length > 0 &&
      res.data.Item.email &&
      res.data.Item.info
    ) {
      // Guest already RSVPd, dispatch info.
      dispatch({ type: UPDATE_GUEST, payload: res.data.Item });
    }

    // Here we should ensure that we clear the last guest, if
    // fetching above didn't return anything, but one guest
    // already exists in the state due to an earlier RSVP.
    go();
  };

  return (
    <div className="RsvpContainer">
      <MyTextField
        id="mail"
        label="Mail"
        className="Input"
        type="email"
        name="mail"
        margin="normal"
        variant="standard"
        maxLength="40"
        value={guests.mail}
        onChange={e => handleMailChange(e.target.value)}
      />
      {wrongMail ? <p style={{ color: "red" }}>Ej giltig mail!</p> : null}

      {loading ? (
        <CircularProgress style={{ marginTop: "2em" }} />
      ) : (
        <Button
          className="RsvpButton"
          variant="contained"
          color="primary"
          // onClick={() => dispatch({ type: NAVIGATE_TO, payload: routes.RSVP })}
          onClick={() => onSubmit()}
        >
          Nästa
        </Button>
      )}
    </div>
  );
};

export default Mail;
