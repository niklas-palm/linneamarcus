import React from "react";

import "../styles/header.scss";
import rings from "../assets/rings.png";

const Header = () => {
  return (
    <div className="Header">
      <h1>Linnea</h1>
      <img className="HeaderRings" src={rings} alt="rings" />
      <h1>Marcus</h1>
    </div>
  );
};

export default Header;
