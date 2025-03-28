import logo from '../../assets/img/logo.jpg';
const Navbar = () => {
  return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo Corporativo" />
            </div>
            <div className="nav-links">
                <a href="#home" className="active">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="button-container">
                <button>Agendar Horas</button>
            </div>
        </div>
    );
};

export default Navbar