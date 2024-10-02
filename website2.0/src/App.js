import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Routing from './router/Routing'; // El componente que maneja las rutas

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routing /> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;
