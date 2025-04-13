
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container_footer">
                <div className="footer-column">
                    <h3>Menú del Hospital</h3>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="footer-column">
                    <h3>Otras Opciones</h3>
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#terms">Terms of Service</a>
                    <a href="#faq">FAQ</a>
                    <a href="#support">Support</a>
                </div>
                <div className="footer-column">
                    <h3>Redes Sociales</h3>
                    <div className="social-icons">
                        <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
                        <a href="#twitter"><i className="fab fa-twitter"></i></a>
                        <a href="#instagram"><i className="fab fa-instagram"></i></a>
                        <a href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;