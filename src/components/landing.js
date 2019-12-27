import React from "react";
// import logo from "../logo.svg";

import "../styles/landing.scss";

import Overlay from "./overlay";
import Schedule from "./schedule";

const Landing = ({ setResponding }) => {
  return (
    <div className="LandingContainer">
      {/* <h2 className="SubHeading">Varmt välkomna att fira med oss!</h2> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <img className="LandingImage" alt="Couple" />
      {/* <div className="Landing"></div> */}
      <Overlay setResponding={bool => setResponding(bool)} />

      <div className="left">
        <h1>Vigsel</h1>
        <p className="intro">Den 1 augusti 2020 smäller det! </p>
        <p>
          Bussarna avgår mot kyrkan kl. 13:15 från Scandic S:t Jörgen i Malmö.
          Kom i tid! I händelse av försening ber vi er kontakta xx [tel] eller
          xx [tel].
        </p>
      </div>

      <div className="divider"></div>

      <div className="right">
        <h1>Middag och fest</h1>
        <p className="intro">
          Efter vigseln tar bussarna er vidare från kyrkan till Stallgården i
          Fuglie för fortsatta festligheter!
        </p>
        <p>
          När natten börjar lida mot sitt slut tar bussar er sedan tillbaka till
          Malmö i två olika omgångar. Ni väljer själva vilken avgång som passar
          er bäst, antingen kl. 01:30 eller kl. 03:15.
        </p>
      </div>

      <Schedule />

      <div className="left">
        <h1>Uppvärmning</h1>
        <p className="intro">
          Eftersom många gäster kommer långväga, vi gillar er så mycket och
          träffar många av er alldeles för sällan vill vi gärna hänga med er
          redan på fredagen. Vi kickar därför igång vår bröllopshelg på
          fredagskvällen den 31 juli för dem som vill och kan.
        </p>
        <p>
          Från kl. 19:30 bjuder vi på en enklare middag med mingel på
          Stallgården i Fuglie (den vaksamme uppmärksammar att detta även är
          lokalen för festligheterna dagen efter - perfekt uppvärmning enligt
          oss!). Vi hoppas att så många som möjligt kan komma och hänga med oss
          redan då! Glöm inte att meddela eventuellt deltagande när du OSA:r så
          vi vet hur mycket mat vi ska ordna :)
        </p>
      </div>
    </div>
  );
};

export default Landing;
