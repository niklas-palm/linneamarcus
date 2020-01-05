import React from "react";

const Info = () => {
  return (
    <div className="LandingContainer">
      <div className="left">
        <h1>
          <span className="FirstLetter">B</span> <span>oende</span>
        </h1>
        <p className="intro">
          Vi har reserverat ett antal hotellrum för våra gäster på Scandic S:t
          Jörgen som är beläget i närheten av centralstationen i Malmö. Rummen
          finns tillgängliga för bokning till och med den 31 maj 2020, därefter
          släpps vår reservation så se till att boka innan dess!
        </p>
        <p>
          Det finns även ett par flerbäddsrum och singelrum reserverade,
          vänligen kontakta hotellet på ovan telefonnummer om ni önskar boka ett
          sådant rum. Glöm inte att uppge rabattkoden!
        </p>
        <p style={{ marginBottom: "0" }}>
          Bokning av hotellrum kan göras via:{" "}
        </p>
        <ul>
          <li>
            <a
              style={{ color: "inherit" }}
              href="www.scandichotels.se/stjorgen?bookingcode=BSTA310720"
              target="_blank"
            >
              <p> Scandics hemsida</p>
            </a>
          </li>
          <li>
            <p>
              Telefon:{" "}
              <a
                style={{
                  color: "inherit",
                  textDecoration: "none"
                }}
                href="tel:+46 40 693 46 00"
              >
                +46 40 693 46 00
              </a>
              , tonval 1
            </p>
          </li>
        </ul>
        <p>
          <b>OBS:</b> Vid bokningen uppger ni koden BSTA310720 för att erhålla
          ett rabatterat pris (750 kr för ett dubbelrum per natt).
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
          <span className="FirstLetter">P</span> <span>resenter</span>
        </h1>
        <p className="intro">
          Vi önskar oss inte några presenter, endast att ni kommer och firar med
          oss!
        </p>
      </div>

      <div className="right">
        <h1>
          <span className="FirstLetter">B</span> <span>arn</span>
        </h1>
        <p className="intro">
          För att alla föräldrar ska kunna släppa loss riktigt ordentligt önskar
          vi en barnfri helg (självklart med undantag för de allra minsta
          småttingarna).
        </p>
      </div>
    </div>
  );
};

export default Info;
