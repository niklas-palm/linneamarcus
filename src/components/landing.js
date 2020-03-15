import React from "react";
import { useDispatch } from "react-redux";

import { NAVIGATE_TO } from "../actions";
import { routes } from "../reducers/reducer_router";

import Button from "@material-ui/core/Button";

import "../styles/landing.scss";

import Overlay from "./overlay";

const Landing = () => {
  const dispatch = useDispatch();

  return (
    <div className="LandingContainer">
      <img className="LandingImage" alt=" " />
      <Overlay />

      <div className="center" style={{ marginTop: "2em" }}>
        <p className="intro">
          En decemberkväll i vimlet på Stockholms nation (läs kakel) för snart
          åtta år sedan träffades vi, brudparet, för första gången. Redan från
          start låg det något väldigt speciellt i luften. Linnea föll pladask
          (bildligt och bokstavligt talat) när hon fick ta del av några av
          Marcus oförglömliga dansmoves den kvällen. Att detta ska ha ägt rum
          förnekas än idag av Marcus som ju, som många av er vet, för det mesta
          skyr dansgolvet (om det inte vankas Zara Larsson i högtalarna
          förstås). Med denna dansanta start inleddes vår kärlekshistoria och
          sedan dess har det varit vi.
        </p>
        <p>
          Vi förlovade oss i Paris efter att Marcus hade försökt hitta rätt
          tillfälle och plats - en plats utan några människor i närheten - under
          två något nervösa dygn. Detta visade sig vara en omöjlig uppgift och
          sista kvällen bestämde sig Marcus därför i lite lätt panik att fria på
          hotellet istället. Linnea, som inte anade någonting, hade glatt hunnit
          byta om till myskläder och hade munnen full av chips när frågan väl
          kom. Det blev kanske inte exakt så som Marcus hade planerat det men en
          oförglömlig historia och ett väldigt känslofyllt ögonblick som
          brudparet gärna berättar mer om.
        </p>
        <p>
          Här är vi nu, snart åtta år senare, och ska äntligen gifta oss. Vi ser
          enormt mycket fram emot att få dela vår stora dag och bröllopshelg
          tillsammans med er - våra favoritpersoner i hela världen!
        </p>
      </div>
      <div
        className="divider"
        style={{ marginBottom: "2em", marginTop: "0.5em" }}
      ></div>

      <Button
        className="RsvpButton"
        variant="contained"
        color="primary"
        onClick={() => dispatch({ type: NAVIGATE_TO, payload: routes.RSVP })}
      >
        OSA
      </Button>
    </div>
  );
};

export default Landing;
