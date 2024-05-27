import "./HamburgerMenu.css";
import { React, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="responsive-menu">
      <div className="logo">
        <img src={logo} alt="ClubKninodelOeste" />
      </div>
      <Hamburger
        className="hamburger"
        direction="right"
        toggled={isOpen}
        toggle={setOpen}
      />
      <div className={`menu-content ${isOpen ? "show" : ""}`}>
        <ul className="nav-list">
          <a className="" href="#id">
            <li className="nav-item">Nuestra propuesta</li>
          </a>
          <a href="#id">
            <li className="nav-item">Sobre mí</li>
          </a>
          <a href="#servicios">
            <li className="nav-item">Servicios</li>
          </a>
          <a href="#id">
            <li className="nav-item">Contacto</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default HamburgerMenu;
