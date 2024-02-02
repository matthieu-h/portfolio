import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h2>Contact</h2>
      <a href="mailto:matthieu.hatinguais@hotmail.fr">
        <button className="contact-btn">
          <FontAwesomeIcon icon={faMessage} className="message-icon" />
          <span className="message-icon-text">Envoyez moi un mail</span>
        </button>
      </a>
    </div>
  );
};

export default Contact;
