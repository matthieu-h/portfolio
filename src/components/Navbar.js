import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-menu">
        <Link className="navbar-menu-item" to="">
          Accueil
        </Link>
        <Link className="navbar-menu-item" to="">
          Compétences
        </Link>
        <Link className="navbar-menu-item" to="">
          Portfolio
        </Link>
        <Link className="navbar-menu-item" to="">
          À propos
        </Link>
        <Link className="navbar-menu-item" to="">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
