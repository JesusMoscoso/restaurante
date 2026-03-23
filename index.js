const images = [
  "imagenes/1.jpg",
  "imagenes/2.jpg",
  "imagenes/3.jpg",
  "imagenes/4.jpg",
];

const carousel = document.getElementById("carouselContent");

images.forEach((img, index) => {
  const div = document.createElement("div");
  div.classList.add("carousel-item", "hero-slide");

  if (index === 0) {
    div.classList.add("active"); // primera imagen activa
  }

  div.style.backgroundImage = `url("${img}")`;
  carousel.appendChild(div);
});

function ajustarHero() {
  const hero = document.querySelector(".hero-elegant");
  const carousel = document.querySelector("#heroCarousel");
  const vh = window.innerHeight; // altura visible real

  hero.style.height = `${vh}px`;
  if (carousel) carousel.style.height = `${vh}px`;

  const items = document.querySelectorAll("#heroCarousel .carousel-item");
  items.forEach((item) => (item.style.height = `${vh}px`));
}

// Ajusta al cargar la página
ajustarHero();

// Ajusta al redimensionar o girar el móvil
window.addEventListener("resize", ajustarHero);
window.addEventListener("orientationchange", ajustarHero);
