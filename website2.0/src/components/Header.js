import React from 'react';
import logo from '../assets/img/logo.png'; // Importar correctamente la imagen
import { NavLink } from 'react-router-dom';

export const Header = () => {


  return (
    <header className="App-header container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              className="d-inline-block align-text-top"
              width="100"
            />

          </a>

          {/* Botón hamburguesa para pantallas pequeñas */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Enlaces de navegación */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/home" exact activeClassName="active">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" exact activeClassName="active">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" exact activeClassName="active">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" exact activeClassName="active">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
