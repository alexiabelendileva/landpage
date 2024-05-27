import "./Presentacion.css";
import { Link } from "react-router-dom";

function Presentacion() {
  return (
    <div className="pres-container">
      <div className="img-pres">
        <div className="texto">
          <h1>Profesional Canino.</h1>
          <Link to="wa.me/1161262744">
            <button className="button-contact">Contáctame</button>
          </Link>
        </div>
      </div>
      <div className="reconocimientos">
        <h2 className="recon-text">Reconocimientos</h2>
        <p className="recon-text">
          Buena parte de los profesionales que trabajan junto a CW han obtenido
          1°, 2° o 3° puesto en IGP y/o OCI. Expedido por las siguientes
          federaciones y clubes.
        </p>

        <ul className="recon-logos recon-text">
          <li>
            <a href="#">logo1</a>
          </li>
          <li>
            <a href="#">logo2</a>
          </li>
          <li>
            <a href="#">logo3</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Presentacion;
