import { React, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const BurgerMenu = () => {
  const [showLinks, setShowLinks] = useState(false);
  const showBurgerLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`burger-menu ${showLinks ? "show-links" : ""}`}>
      <ul className="burger-menu-links">
        <li className="burger-menu-item">
          <Link className="burger-menu-link" to="#home">
            Accueil
          </Link>
        </li>
        <li className="burger-menu-item">
          <Link className="burger-menu-link" to="#skills">
            Compétences
          </Link>
        </li>
        <li className="burger-menu-item">
          <Link className="burger-menu-link" to="#portfolio">
            Portfolio
          </Link>
        </li>
        <li className="burger-menu-item">
          <Link className="burger-menu-link" to="#about">
            À propos
          </Link>
        </li>
        <li className="burger-menu-item">
          <Link className="burger-menu-link" to="#contact">
            Contact
          </Link>
        </li>
      </ul>
      <button className="burger-button" onClick={showBurgerLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};

export default BurgerMenu;
