import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.jpg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo Corporativo" />
      </div>
      <nav className="nav-links">
        <ul>
          <Link classname="link" to="/">Home</Link>
          <Link classname="link" to="/doctors">Doctores</Link>
          {/* <Link classname="link" to="/about">Nosotros</Link> */}
          <Link classname="link" to="/contact">Contacto</Link>
        </ul>
      </nav>
      <div className="button-container">
        <button>Agendar Horas</button>
      </div>
    </div>
  );
};

export default Navbar;
