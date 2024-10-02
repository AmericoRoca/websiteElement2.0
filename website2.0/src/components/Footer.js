import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/components/Footer.css"
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png'; 

function Footer() {
  return (
    <footer className="text-center text-lg-start">
      <div className="container-fluid p-4">
        <div className="row">
          {/* Sección de descripción */}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <img
              src={logo}
              alt="Logo"
              className="d-inline-block align-text-top"
              width="100"
            />
            <h5>Americo Roca Dev</h5>
          </div>

          {/* Sección de enlaces rápidos */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">About me</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <NavLink to="/home" exact activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" exact activeClassName="active">About</NavLink>
              </li>
              <li>
                <NavLink to="/services" exact activeClassName="active">Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact" exact activeClassName="active">Contact</NavLink>
              </li>
            </ul>
          </div>

          {/* Sección de contacto */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="mailto:info@misitioweb.com" className="text-white">info@misitioweb.com</a>
              </li>
              <li>
                <p className="text-white mb-0">+123 456 789</p>
              </li>
              <li>
                <p className="text-white">Dirección Ficticia 123</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center p-3 text-dark">
        © 2024 Created with  by Americo Roca.
      </div>
    </footer>
  );
}

export default Footer;
