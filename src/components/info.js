import React from "react";

const Info = () => {
  return (
    <div className="LandingContainer">
      <div className="left">
        <h1>
          <span className="FirstLetter">B</span> <span>oende</span>
        </h1>
        <p className="intro">
          Vi har abonnerat ett antal hotellrum för våra gäster på Scandic S:t
          Jörgen som är beläget i närheten av centralstationen i Malmö. Rummen
          finns tillgängliga för bokning till och med den 31 maj 2020, därefter
          släpps vår reservation så se till att boka innan dess!
        </p>
        <p>
          <b>OBS:</b> Vid bokningen uppger ni koden [xx] för att erhålla ett
          rabatterat pris.
        </p>
        <p>
          I Malmö finns det ju förstås även en stor variation av andra
          boendemöjligheter, t.ex. via Airbnb, hotell eller vandrarhem.
        </p>
      </div>

      <div className="divider"></div>

      <div className="right">
        <h1>
          <span className="FirstLetter">A</span> <span>tt ta sig dit</span>
        </h1>
        <p className="intro">
          Tänk på att boka resa i god tid för att slippa onödiga kostnader när
          priserna stiger. Scandic S:t Jörgen i Malmö ligger centralt beläget på
          cirka 10 minuters gångavstånd från Malmös centralstation.
        </p>
      </div>

      <div className="left">
        <h1>
          <span className="FirstLetter">T</span> <span>al</span>
        </h1>
        <p className="intro">
          Vill du hålla tal eller göra något annat spex under middagen, kontakta
          våra eminenta toastmadames Jenny Palmgren och Hanna Arvidsson på xxx
          senast den 10 juli 2020.
        </p>
      </div>

      <div className="right">
        <h1>
          <span className="FirstLetter">P</span> <span>resenter</span>
        </h1>
        <p className="intro">
          Vi önskar oss inte några presenter, endast att ni kommer och firar med
          oss!
        </p>
      </div>
    </div>
  );
};

export default Info;
