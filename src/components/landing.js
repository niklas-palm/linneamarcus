import React from "react";

import "../styles/landing.scss";

import Overlay from "./overlay";
// import Schedule from "./schedule";

const Landing = () => {
  return (
    <div className="LandingContainer">
      <img className="LandingImage" alt=" " />
      <Overlay />

      {/* <div className="left">
        <h1>
          <span className="FirstLetter">V</span> <span>igsel</span>
        </h1>
        <p className="intro">Den 1 augusti 2020 smäller det! </p>
        <p>
          Bussarna avgår mot kyrkan kl. 13:15 från Scandic S:t Jörgen i Malmö.
          Kom i tid! I händelse av försening ber vi er kontakta xx [tel] eller
          xx [tel].
        </p>
      </div> */}

      {/* <div className="divider"></div> */}

      {/* <div className="right">
        <h1>
          <span className="FirstLetter">M</span> <span>iddag och fest</span>
        </h1>
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
      <div className="divider"></div> */}

      <div className="center" style={{ marginTop: "2em" }}>
        {/* <h2>Klädsel - mörk kostym</h2> */}
        <p className="intro">
          En mörk novemberkväll 2012 i vimlet på Stockholms nation i Uppsala
          träffades vi, brudparet, för första gången och båda kände att det låg
          något speciellt i luften. Marcus försökte bjuda hem Linnea på
          efterfest, Linnea nappade dock inte den gången. Några veckor senare
          var det dags för lussegasque, och vi pratade oavbrutet med varandra i
          minst åtta timmar… osv Den första kyssen ägde rum i på Snerikes nation
          i Uppsala precis före jul, och efter det har vi varit oskiljaktiga.
        </p>
      </div>
      <div
        className="divider"
        style={{ marginBottom: "2em", marginTop: "0.5em" }}
      ></div>

      {/* <Schedule />

      <div className="center">
        <h2>Barn</h2>
        <p className="intro">
          För att alla föräldrar ska kunna släppa loss riktigt ordentligt önskar
          vi en barnfri helg (självklart med undantag för de allra minsta
          småttingarna).{" "}
        </p>
      </div> */}
    </div>
  );
};

export default Landing;
