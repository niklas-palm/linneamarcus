import React from "react";

import "../styles/landing.scss";

import Schedule from "./schedule";

const Wedding = () => {
  return (
    <div className="LandingContainer">
      <div className="left">
        <h1>
          <span className="FirstLetter">V</span> <span>igsel</span>
        </h1>
        <p className="intro">Lördagen den 1 augusti 2020 gifter vi oss!</p>
        <p>
          Vigseln börjar kl. 14:00 i Hököpinge kyrka. Bussarna avgår kl. 13:00
          från hotell Scandic S:t Jörgen i Malmö. Kom i tid!
        </p>
      </div>

      {/* <div className="divider"></div> */}

      <div className="right">
        <h1>
          <span className="FirstLetter">M</span> <span>iddag och fest</span>
        </h1>
        <p className="intro">
          Efter vigseln tar bussarna er vidare från kyrkan till Stallgården i
          Vellinge för fortsatt bröllopsmiddag och fest.
        </p>
        <p>
          När festligheterna börjar lida mot sitt slut tar bussar er sedan
          tillbaka till Malmö i två olika omgångar. Ni väljer själva vilken
          avgång som passar er bäst, antingen kl. 01:30 eller kl. 03:15.
        </p>
      </div>
      <div className="divider"></div>

      <div className="center">
        <h2>Klädsel - mörk kostym</h2>
        <p className="intro">
          Kostym i mörkare färg, klänning, kjol/byxor, byxdress eller liknande.
        </p>
      </div>
      <div className="divider"></div>

      <Schedule />

      {/* <div className="center">
        <h2>Tal</h2>
        <p className="intro">
          Vill du hålla tal eller göra något annat spex under middagen, kontakta
          våra eminenta toastmadames Jenny Palmgren och Hanna Arvidsson på xxx
          senast den 10 juli 2020.
        </p>
      </div> */}

      <div className="center">
        <h2>Tal </h2>
        <p className="intro">
          Vill du hålla tal eller göra något annat under bröllopsmiddagen,
          kontakta våra eminenta toastmadames Jenny Palmgren och Hanna Arvidsson
          på{" "}
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="mailto:toast@linneamarcus.se"
          >
            toast@linneamarcus.se
          </a>{" "}
          senast den 10 juli 2020.
        </p>
      </div>

      <div className="center">
        <h2>Söndagen</h2>
        <p className="intro">
          Det blir inte någon samordnad frukost på söndagen men brudparet är på
          plats vid frukosten på Scandic S:t Jörgen från kl. 09:00, kom gärna
          förbi och säg hej och snacka om (skratta åt) helgens bravader innan vi
          så småningom bryter upp vår bröllopshelg.
        </p>
      </div>
    </div>
  );
};

export default Wedding;
