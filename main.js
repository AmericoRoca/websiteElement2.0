//Scrolling effects
gsap.registerPlugin(ScrollTrigger);

gsap.to(".fullstack", {
    scrollTrigger: {
        trigger:".circulo-principal",
        toggleActions: "restart pause restart resume"
    },
    duration: 1,
    y: 200,
})

// Selecciona el elemento que deseas animar
const circuloPrincipal = document.querySelector(".circulo-principal");

// Crea una animación con GSAP y ScrollTrigger
const animacion = gsap.to(circuloPrincipal, {
  scrollTrigger: {
    trigger: ".circulo-principal",
    toggleActions: "restart pause restart resume",
    start: "50px 70%",
    end: "800px 100%",
    scrub: true,
  },
  duration: 9,
  y: 700,
  onComplete: function() {
    // Agrega la clase "circulo-principal-finalizado" al elemento
    circuloPrincipal.classList.add("circulo-principal-finalizado");

    // Verifica si la clase "circulo-principal-finalizado" existe después de que se agregue
    if (circuloPrincipal.classList.contains("circulo-principal-finalizado")) {

        let mayor = document.querySelector(".mayor");
        let menor = document.querySelector(".menor");

        circuloPrincipal.classList.add("circulo-principal-opacity");

        gsap.to(mayor, {
            scrollTrigger: {
                trigger:".mayor",
                toggleActions: "restart pause restart resume"
            },
            duration: 1,
            x: 600,
        })

        gsap.to(menor, {
            scrollTrigger: {
                trigger:".menor",
                toggleActions: "restart pause restart resume"
            },
            duration: 1,
            x: -600,
        })
    } else {
      console.log("No");
    }
  },
});





