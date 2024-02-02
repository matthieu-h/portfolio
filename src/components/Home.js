import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from "react-router-hash-link";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <span className="home-name">Matthieu Hatinguais</span> <br />
        <span className="home-dev">Développeur Front-end</span>
        <p className="home-para">
          Je suis développeur Front-end débutant basé à La Rochelle.
        </p>
        <Link to="#contact" className="menu-contact-link">
          <button className="menu-btn">
            <FontAwesomeIcon icon={faMessage} className="message-icon" />
            <span className="message-icon-text">Contactez moi</span>
          </button>
        </Link>
      </div>
      <div className="home-portrait">
        <img
          src="./pictures/portrait.png"
          alt="portrait du développeur"
          className="portrait"
        />
      </div>
    </section>
  );
};

export default Home;
