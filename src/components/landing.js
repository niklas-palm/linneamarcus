import React from "react";
// import logo from "../logo.svg";
import Button from "@material-ui/core/Button";

import "../styles/landing.scss";

import linneamarcus from "../assets/linneamarcus.png";

const Landing = ({ setResponding }) => {
  return (
    <div className="LandingContainer">
      <h2 className="SubHeading">Varmt välkomna att fira med oss!</h2>

      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <img className="LandingImage" src={linneamarcus} alt="Couple" />
      {/* <div className="Landing"></div> */}

      <Button
        className="rsvp"
        variant="contained"
        color="primary"
        onClick={() => setResponding(true)}
      >
        OSA
      </Button>

      <div className="Vigsel">
        <h1>Vigsel</h1>
        <p>Den 1 augusti 2020 smäller det! </p>
        <p>
          Bussarna avgår mot kyrkan kl. 13:15 från Scandic S:t Jörgen i Malmö.
          Kom i tid! I händelse av försening ber vi er kontakta xx [tel] eller
          xx [tel].
        </p>
      </div>

      <div className="divider"></div>

      <div className="Middag">
        <h1>Middag och fest</h1>
        <p>
          Efter vigseln tar bussarna er vidare från kyrkan till Stallgården i
          Fuglie för fortsatta festligheter!
        </p>
        <p>
          När natten börjar lida mot sitt slut tar bussar er sedan tillbaka till
          Malmö i två olika omgångar. Ni väljer själva vilken avgång som passar
          er bäst, antingen kl. 01:30 eller kl. 03:15.
        </p>
      </div>
    </div>
  );
};

export default Landing;
