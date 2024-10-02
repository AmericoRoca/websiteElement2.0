import React from 'react'
import "../assets/css/pages/Home.css";
import logo from '../assets/img/logo.png';

//import imgs
import boots from "../assets/img/boots.png"
import css from "../assets/img/css.png"
import ex from "../assets/img/ex.png"
import git from "../assets/img/git.png"
import html from "../assets/img/html.png"
import js from "../assets/img/js.png"
import lar from "../assets/img/lar.png"
import md from "../assets/img/md.png"
import node from "../assets/img/node.png"
import php from "../assets/img/php.png"
import react from "../assets/img/react.png"
import sql from "../assets/img/sql.png"


import { useEffect } from 'react';
import { gsap } from 'gsap';


export const Home = () => {

  useEffect(() => {
    // Creamos una línea de tiempo para secuenciar las animaciones
    const tl = gsap.timeline();

    // Primera animación: Giro a la derecha y bajar
    tl.to(".cuadro", {
      duration: 2,         // Duración de 2 segundos
      rotation: 360,       // Gira 360 grados hacia la derecha
      y: 95,              // Mueve hacia abajo 200px
      ease: "power2.inOut" // Suaviza el movimiento
    })
    // Segunda animación: Giro a la izquierda
    .to(".cuadro", {
      duration: 1,         // Duración de 1 segundo
      rotation: -360,       // Gira a la izquierda (360 grados en sentido contrario)
      x: -300,                // Gira a la izquierda 
      ease: "power2.inOut" // Suaviza el movimiento
    })
    // Tercera animación: Zoom out (disminuir el tamaño)
    .to(".cuadro", {
      duration: 1,         // Duración de 1 segundo
      scale: 1.5,          // Reducir el tamaño a la mitad
      ease: "power2.inOut" // Suaviza la animación del zoom
    })
    .to (".tech-stack-logo",{
      duration:1,
      opacity:1,
      x: 70,
      ease: "power9.in" 
    });
  }, []);


  return (
    <div className='container-fluid cuadro-negro'>
      <h1 className='text-white'>Americo Roca</h1>
      <h2 className='text-white'>Fullstack Developer</h2>
      <div className="contenedor">
        <img
          src={logo}
          alt="Logo"
          className="d-inline-block align-text-top"
          width="300"
        />
        <div className="cuadro"></div>
        <div>
        <img
          src={html}
          alt="Logo"
          className="d-inline-block align-text-top tech-stack-logo"
          width="50"
        />
        <img
          src={css}
          alt="Logo"
          className="d-inline-block align-text-top tech-stack-logo"
          width="50"
        />
        <img
          src={boots}
          alt="Logo"
          className="d-inline-block align-text-top tech-stack-logo"
          width="50"
        />
        <img
          src={js}
          alt="Logo"
          className="d-inline-block align-text-top tech-stack-logo"
          width="50"
        />
        <img
          src={react}
          alt="Logo"
          className="d-inline-block align-text-top tech-stack-logo"
          width="50"
        />
        <img
          src={node}
          alt="Logo"
          className="d-inline-block align-text-top tech-stack-logo"
          width="50"
        />

        <img
          src={md}
          alt="Logo"
          className="d-inline-block align-text-top tech-stack-logo"
          width="50"
        />
        <img
          src={sql}
          alt="Logo"
          className="d-inline-block align-text-top tech-stack-logo"
          width="50"
        />
        <img
          src={git}
          alt="Logo"
          className="d-inline-block align-text-top tech-stack-logo"
          width="50"
        />
        </div>
      </div>

    </div>
  )
}

export default Home;