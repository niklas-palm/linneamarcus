import React from "react";

import "../styles/schedule.scss";

import bus from "../assets/bus.png";
import camera from "../assets/camera.png";
import party from "../assets/party.png";
import mingel from "../assets/mingel.png";
import rings from "../assets/rings.png";

const Schedule = () => {
  return (
    <div className="Schedule">
      <h2 className="Title">Viktiga hålltider</h2>

      <div className="InfoContainer">
        <div className="Row">
          <div className="IconContainer">
            <img className="Icon" src={bus} />
          </div>
          <p className="Time">13:00</p>
          <p className="Info">Avgång från hotellet</p>
        </div>

        <div className="Row">
          <div className="IconContainer">
            <img className="Icon" src={rings} />
          </div>
          <p className="Time">14:00</p>
          <p className="Info">Vigsel</p>
        </div>

        <div className="Row">
          <div className="IconContainer">
            <img className="Icon" src={mingel} />
          </div>
          <p className="Time">15:30</p>
          <p className="Info">Mingel på Stallgården</p>
        </div>

        <div className="Row">
          <div className="IconContainer">
            <img className="Icon" src={camera} />
          </div>
          <p className="Time">16:00</p>
          <p className="Info">Gruppfoto</p>
        </div>

        <div className="Row">
          <div className="IconContainer">
            <img className="Icon" src={party} />
          </div>
          <p className="Time">17:00 - 03:00</p>
          <p className="Info">Middag och fest</p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
