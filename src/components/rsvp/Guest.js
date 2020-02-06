import React from "react";

import { useDispatch, useSelector } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import { withStyles } from "@material-ui/core/styles";

import { UPDATE_GUEST, DELETE_GUEST } from "../../actions";

const MyTextField = withStyles({
  root: {
    "& .MuiInput-underline:after": {
      borderBottomColor: "#7e7f7f"
    }
  }
})(TextField);

const Guest = ({ index, nameIsEmpty, clearEmptyName }) => {
  const dispatch = useDispatch();
  const guests = useSelector(state => state.rsvp);

  const handleFormChange = (val, input) => {
    guests.info[index][input] = val;

    if (nameIsEmpty) {
      clearEmptyName();
    }

    dispatch({ type: UPDATE_GUEST, payload: guests });
  };

  return (
    <div className="RsvpContainer" style={{ marginBottom: "1em" }}>
      <MyTextField
        id="namn"
        label="Namn"
        className="Input"
        type="name"
        name="namn"
        margin="normal"
        variant="standard"
        maxLength="40"
        value={guests.info[index].name}
        onChange={e => handleFormChange(e.target.value, "name")}
      />
      {nameIsEmpty ? (
        <p style={{ color: "red" }}>Namn får ej vara tomt</p>
      ) : null}
      <MyTextField
        id="allergies"
        label="Specialkost / Allergier"
        className="Input"
        type="text"
        name="allergier"
        margin="normal"
        variant="standard"
        maxLength="40"
        value={guests.info[index].spec}
        onChange={e => handleFormChange(e.target.value, "spec")}
      />
      <div className="Choice">
        <h3>Deltar på middagen fredagen den 31/7</h3>
        <Radio
          className="Radio"
          disableRipple
          checked={guests.info[index].friday}
          color="primary"
          onClick={e => handleFormChange(!guests.info[index].friday, "friday")}
        />
      </div>
      {guests.info[index].friday ? (
        <div className="Choice">
          <h3>Önskas transport fredag</h3>
          <Radio
            className="Radio"
            disableRipple
            checked={guests.info[index].ride}
            color="primary"
            onClick={e => handleFormChange(!guests.info[index].ride, "ride")}
          />
        </div>
      ) : null}
      {index > 0 ? (
        <Button
          //   className="RsvpButton"
          style={{ margin: "1em" }}
          variant="contained"
          color="secondary"
          onClick={() => dispatch({ type: DELETE_GUEST, payload: index })}
        >
          Ta bort gäst
        </Button>
      ) : null}

      <div
        className="divider"
        style={{ marginBottom: "1em", marginTop: "2em" }}
      ></div>
    </div>
  );
};

export default Guest;
