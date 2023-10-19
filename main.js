//Scrolling effects
gsap.registerPlugin(ScrollTrigger);

gsap.to(".fullstack", {
  scrollTrigger: {
    trigger: ".circulo-principal",
    toggleActions: "restart pause restart resume",
  },
  duration: 1,
  y: 200,
});

// Selecciona el elemento que deseas animar
const circuloPrincipal = document.querySelector(".circulo-principal");
const skills = document.querySelector(".skills");
const frontend = document.querySelector(".frontend");
const backend = document.querySelector(".backend");
const bbdd = document.querySelector(".bbdd");
const tools = document.querySelector(".tools");

// Crea una animación con GSAP y ScrollTrigger
const animacion = gsap.to(circuloPrincipal, {
  scrollTrigger: {
    trigger: ".circulo-principal",
    toggleActions: "restart pause restart resume",
    start: "50px 70%",
    end: "600px 100%",
    scrub: true,
  },
  duration: 9,
  y: 800,
  rotation: 360,
});

const animacionFront = gsap.to(frontend, {
  scrollTrigger: {
    trigger: ".frontend",
    toggleActions: "restart pause restart resume",
    start: "50px 70%",
    end: "700px 100%",
    scrub: true,
    markers: { color: "blue", colorEnd: "blue" },
  },
  duration: 9,
  x: -700,
  rotation: 360,
  onComplete: function () {
    gsap.to(frontend, {
      scrollTrigger: {
        trigger: ".frontend",
        toggleActions: "restart pause restart resume",
        start: "450px 70%",
        end: "700px 100%",
        scrub: true,
        markers: true,
      },
      duration: 9,
      x: 10,
      rotation: 360,
    });

    gsap.to(backend, {
      scrollTrigger: {
        trigger: ".frontend",
        toggleActions: "restart pause restart resume",
        start: "450px 70%",
        end: "700px 100%",
        scrub: true,
        markers: true,
      },
      duration: 9,
      x: 10,
      rotation: 360,
    });

    gsap.to(bbdd, {
      scrollTrigger: {
        trigger: ".frontend",
        toggleActions: "restart pause restart resume",
        start: "450px 70%",
        end: "700px 100%",
        scrub: true,
        markers: true,
      },
      duration: 9,
      x: 10,
      rotation: 360,
    });

    gsap.to(tools, {
      scrollTrigger: {
        trigger: ".frontend",
        toggleActions: "restart pause restart resume",
        start: "450px 70%",
        end: "700px 100%",
        scrub: true,
        markers: true,
      },
      duration: 9,
      x: 10,
      rotation: 360,
    });
      iniciarSiguienteAccion()
  },

});

function iniciarSiguienteAccion() {
  const finalFront = gsap.to(frontend, {
    scrollTrigger: {
      trigger: ".frontend",
      toggleActions: "restart pause restart resume",
      start: "700px 70%",
      end: "1000px 100%",
      scrub: true,
      markers: true,
    },
    duration: 9,
    scale: 2,
    y: 500,
    rotation: 360,
  });
}

const animacionBack = gsap.to(backend, {
  scrollTrigger: {
    trigger: ".backend",
    toggleActions: "restart pause restart resume",
    start: "200px 70%",
    end: "500px 100%",
    scrub: true,
  },
  duration: 9,
  x: -350,
  rotation: 360,
});

const animacionBB = gsap.to(bbdd, {
  scrollTrigger: {
    trigger: ".bbdd",
    toggleActions: "restart pause restart resume",
    start: "200px 70%",
    end: "500px 100%",
    scrub: true,
  },
  duration: 9,
  x: 350,
  rotation: 360,
});

const animacionTools = gsap.to(tools, {
  scrollTrigger: {
    trigger: ".tools",
    toggleActions: "restart pause restart resume",
    start: "200px 70%",
    end: "500px 100%",
    scrub: true,
  },
  duration: 9,
  x: 700,
  rotation: 360,
});
