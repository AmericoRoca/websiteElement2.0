import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container-fluid p-4">
        <div className="row">
          {/* Sección de descripción */}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Mi Sitio Web</h5>
            <p>
              Este es un sitio web ficticio de ejemplo. Aquí puedes agregar una breve descripción sobre el sitio o los servicios que ofreces.
            </p>
          </div>

          {/* Sección de enlaces rápidos */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Enlaces útiles</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark">Inicio</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Sobre Nosotros</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Servicios</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Sección de contacto */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contacto</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="mailto:info@misitioweb.com" className="text-dark">info@misitioweb.com</a>
              </li>
              <li>
                <p className="text-dark mb-0">+123 456 789</p>
              </li>
              <li>
                <p className="text-dark">Dirección Ficticia 123</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center p-3 bg-dark text-white">
        © 2023 Mi Sitio Web. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
