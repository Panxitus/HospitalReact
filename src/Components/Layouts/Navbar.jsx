import logo from '../../assets/img/logo.jpg';
const Navbar = () => {
  return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo Corporativo" />
            </div>
            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#services">Servicios</a>
                <a href="#about">Sobre Nosotros</a>
                <a href="#contact">Contacto</a>
            </div>
            <div className="button-container">
                <button>Agendar Horas</button>
            </div>
        </div>
    );
};

export default Navbar