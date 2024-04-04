import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import "./Nav.css";
import logo from "../assets/logo.png";

function Nav() {
  return (
    <div>
      <nav className="normal-nav">
        <ul className="nav-links">
          <img className="large-nav" src={logo} />
          <li>
            <a className="underline item-links" href="/">Nuestra propuesta</a>
          </li>
          <li>
            <a className="underline item-links" href="/about">Sobre mí</a>
          </li>
          <li>
            <a className="underline item-links" href="/services">Servicios</a>
          </li>
          <li>
            <a className="underline item-links" href="/services">Contacto</a>
          </li>
        </ul>
      </nav>
      <HamburgerMenu />
    </div>
  );
}

export default Nav;
