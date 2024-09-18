gsap.registerPlugin(ScrollTrigger);



// Primero animamos el .cuadro con rotación
gsap.to(".cuadro", {
    duration: 2,
    rotation: 360,
    transformOrigin: "50% 50%",
    x: 100,
    ease: "bounce.out"
});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".contenedor",  // El elemento que activa la animación
        start: "800px 40%",  // La animación empezará cuando el trigger esté en el 80% de la pantalla
        toggleActions: "play none none none", 
    }
});

// Luego animamos .headerCuadro
tl.fromTo(".headerCuadro", 
    {
        scaleX: 1,  // Estado inicial (tamaño normal)
    }, 
    {   
        scaleY: 2,
        scaleX: 15,  // Estado final (agrandado en el eje X)
        duration: 0.5,  // Duración de la animación
        ease: "bounce.out",  // Animación suave con rebote
        onComplete: function () {
        // Luego animamos .cuadroLinea y .circle a la vez
        tl.to(".cuadroLinea", {
            x: 345,
            rotation: 360,    // Gira 360 grados
            duration: 1.5,    // Duración de la animación de giro
            ease: "power2.out",  // Efecto de suavización
            onComplete: function() {
                gsap.to(".cuadroLinea",{
                    opacity:0,
                    duration: 1,
                    ease: "power2.out"
                })
            }
        });

        // Animación del ícono de código
        gsap.fromTo(".icon-codigo", {
            strokeDashoffset: 100,
            strokeDasharray: 100,
            opacity: 0
        }, {
            strokeDashoffset: 0,
            opacity: 1,
            duration: 1,
            ease: "bounce.out",
            x: -390,
            onComplete: function () {
                // Animación de .texto-titulo
                gsap.to(".texto-titulo", {
                    strokeDashoffset: 0,
                    duration: 4,
                    ease: "power2.out",
                    onComplete: function () {
                        gsap.to(".texto-titulo", {
                            fill: "black",
                            duration: 0.3
                        });
                    }
                });

                // Después animamos .cuadroFront
                gsap.fromTo(".cuadroFront", {
                    opacity: 0,
                    scaleY: 0,
                    transformOrigin: "top"
                }, {
                    opacity: 1,
                    scaleY: 50,
                    ease: "bounce.out",
                    duration: 0.7,
                    onComplete: function () {
                        // Luego animamos .lineaHeader
                        gsap.fromTo(".lineaHeader", {
                            opacity: 0,
                            width: "0%"
                        }, {
                            opacity: 1,
                            width: "750px",
                            duration: 0.7,
                            ease: "bounce.out",
                            onComplete: function () {
                                // Luego animamos .cuadroBack
                                gsap.fromTo(".cuadroBack", {
                                    opacity: 0,
                                    scaleY: 0,
                                    transformOrigin: "top"
                                }, {
                                    opacity: 1,
                                    scaleY: 50,
                                    ease: "bounce.out",
                                    duration: 1,
                                    onComplete: function () {
                                        gsap.fromTo(".lineaBack", {
                                            opacity: 0,
                                            width: "0%"
                                        }, {
                                            opacity: 1,
                                            width: "750px",
                                            duration: 0.7,
                                            ease: "bounce.out"
                                        });

                                        gsap.fromTo(".icons-front svg", 
                                            {
                                                opacity: 0,  // Comienzan invisibles
                                                scale: 0  // Tamaño inicial 0
                                            }, 
                                            {
                                                opacity: 1,  // Hacemos los iconos visibles
                                                scale: 1,  // Escalamos al tamaño completo
                                                duration: 1,  // Duración de la animación
                                                ease: "bounce.out",  // Efecto de rebote
                                                stagger: 0.2  // Retraso entre cada icono para que aparezcan uno a la vez
                                            }
                                        );

                                        gsap.fromTo(".icons-back svg", 
                                            {
                                                opacity: 0,  // Comienzan invisibles
                                                scale: 0  // Tamaño inicial 0
                                            }, 
                                            {
                                                opacity: 1,  // Hacemos los iconos visibles
                                                scale: 1,  // Escalamos al tamaño completo
                                                duration: 1,  // Duración de la animación
                                                ease: "bounce.out",  // Efecto de rebote
                                                stagger: 0.2  // Retraso entre cada icono para que aparezcan uno a la vez
                                            }
                                        );
                                        gsap.fromTo(".icons-back img", 
                                            {
                                                opacity: 0,  // Comienzan invisibles
                                                scale: 0  // Tamaño inicial 0
                                            }, 
                                            {
                                                opacity: 1,  // Hacemos los iconos visibles
                                                scale: 1,  // Escalamos al tamaño completo
                                                duration: 1,  // Duración de la animación
                                                ease: "bounce.out",  // Efecto de rebote
                                                stagger: 0.2  // Retraso entre cada icono para que aparezcan uno a la vez
                                            }
                                        );

                                        gsap.fromTo(".lineaDB", {
                                            opacity: 0,
                                            height: "0%"
                                        }, {
                                            opacity: 1,
                                            height: "250",
                                            duration: 0.7,
                                            ease: "bounce.out",
                                            onComplete: function () {
                                                gsap.fromTo(".title-db, .title-tools", {
                                                    opacity: 0
                                                }, {
                                                    opacity: 1,
                                                    duration: 1
                                                });
                                            }
                                        });

                                        gsap.fromTo(".icons-db img", //Aqui por que hay img en vez de svg, mira los stylos
                                            {
                                                opacity: 0,  // Comienzan invisibles
                                                scale: 0  // Tamaño inicial 0
                                            }, 
                                            {
                                                opacity: 1,  // Hacemos los iconos visibles
                                                scale: 1,  // Escalamos al tamaño completo
                                                duration: 1,  // Duración de la animación
                                                ease: "bounce.out",  // Efecto de rebote
                                                stagger: 0.2  // Retraso entre cada icono para que aparezcan uno a la vez
                                            }
                                        );

                                        gsap.fromTo(".icons-tools svg", 
                                            {
                                                opacity: 0,  // Comienzan invisibles
                                                scale: 0  // Tamaño inicial 0
                                            }, 
                                            {
                                                opacity: 1,  // Hacemos los iconos visibles
                                                scale: 1,  // Escalamos al tamaño completo
                                                duration: 1,  // Duración de la animación
                                                ease: "bounce.out",  // Efecto de rebote
                                                stagger: 0.2  // Retraso entre cada icono para que aparezcan uno a la vez
                                            }
                                        );
                                    }
                                });
                            }
                        });

                        // Finalmente animamos .lineaFront
                        gsap.fromTo(".lineaFront", {
                            opacity: 0,
                            height: "0%"
                        }, {
                            opacity: 1,
                            height: "250",
                            duration: 1,
                            ease: "bounce.out"
                        });

                        gsap.fromTo(".title-front, .title-back", {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: 1
                        });
                    }
                });
            }
        });
    }
});
