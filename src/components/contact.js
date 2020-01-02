import React from "react";

import "../styles/contact.scss";

import contact from "../assets/drawer/contact.png";
import mail from "../assets/drawer/mail.png";

const Contact = () => {
  return (
    <div className="ContactContainer">
      <h3>Tveka inte att höra av er vid frågor! </h3>
      <div className="ContactItems">
        <div className="ContactItem">
          <h2 className="ContactName">Linnea</h2>
          <div className="ContactInfo">
            <div className="ContactRow">
              <div className="Left">
                <img src={contact} alt="phone" className="Icon" />
              </div>
              <div className="Right">
                <a href="tel:+46736009340">+46 73-600 93 40</a>
              </div>
            </div>

            <div className="ContactRow">
              <div className="Left">
                <img src={mail} alt="mail" className="Icon" />
              </div>
              <div className="Right">
                <a href="mailto:linnea_lindvall@live.se">
                  linnea_lindvall@live.se
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="ContactItem">
          <h2 className="ContactName">Marcus</h2>
          <div className="ContactInfo">
            <div className="ContactRow">
              <div className="Left">
                <img src={contact} alt="phone" className="Icon" />
              </div>
              <div className="Right">
                <a href="tel:+46700029421">+46 70-002 94 21</a>
              </div>
            </div>

            <div className="ContactRow">
              <div className="Left">
                <img src={mail} alt="mail" className="Icon" />
              </div>
              <div className="Right">
                <a href="mailto:marcus.almhagen@gmail.com">
                  marcus.almhagen@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
