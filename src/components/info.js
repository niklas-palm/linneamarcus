import React from "react";

const Info = () => {
  return (
    <div className="LandingContainer">
      <div className="left">
        <h1>
          <span className="FirstLetter">B</span> <span>oende</span>
        </h1>
        <p className="intro">
          Vi har reserverat hotellrum för våra gäster på Scandic S:t Jörgen i
          Malmö (cirka tio minuters gångavstånd från Malmö centralstation).
          Rummen finns tillgängliga för bokning till och med den 31 maj 2020,
          därefter släpps vår reservation så se till att boka innan dess!
        </p>
        <p>
          Uppge BSTA310720 för rabatterat pris (750 kr för ett dubbelrum per
          natt).
        </p>
        <p>
          Det finns även ett par flerbäddsrum och singelrum reserverade,
          vänligen kontakta hotellet om ni önskar boka ett sådant rum.
        </p>
        <p style={{ marginBottom: "0" }}>Bokning av hotellrum sker via: </p>
        <ul>
          <li>
            <a
              style={{ color: "inherit" }}
              href="https://www.scandichotels.se/stjorgen?bookingcode=BSTA310720"
              target="_blank"
              rel="noopener noreferrer"
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
          I Malmö finns det även en stor variation av andra boendemöjligheter,
          t.ex. via Airbnb, hotell eller vandrarhem.
        </p>
      </div>

      <div className="divider"></div>

      <div className="right">
        <h1>
          <span className="FirstLetter">P</span> <span>resenter</span>
        </h1>
        <p className="intro">
          Att ni är med och firar vårt bröllop är det enda vi önskar oss!
        </p>
      </div>

      <div className="left">
        <h1>
          <span className="FirstLetter">B</span> <span>arn</span>
        </h1>
        <p className="intro">
          Vi älskar barn och särskilt era, men den här helgen önskar vi fira med
          våra vuxna vänner. Spädbarn är givetvis välkomna!
        </p>
      </div>
    </div>
  );
};

export default Info;
