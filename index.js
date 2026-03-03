const images = [
  "imagenes/1.jpg",
  "imagenes/2.jpg",
  "imagenes/3.jpg",
  "imagenes/4.jpg",
  "imagenes/5.jpg",
  "imagenes/6.jpg",
  "imagenes/7.jpg",
  "imagenes/8.jpg",
  "imagenes/9.jpg",
  "imagenes/10.jpg",
  "imagenes/11.jpg",
  "imagenes/12.jpg",
  "imagenes/13.jpg",
  "imagenes/14.jpg",
  "imagenes/15.jpg",
  "imagenes/16.jpg",
  "imagenes/17.jpg",
  "imagenes/18.jpg",
  "imagenes/19.jpg",
  "imagenes/20.jpg",
  "imagenes/21.jpg",
  "imagenes/22.jpg",
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
