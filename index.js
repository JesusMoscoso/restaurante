 let lang = "es";

      const translations = {
        es: {
          brand: "Bosque Nuboso",
          tours: "Tours",
          restaurant: "Restaurante",
          viewpoints: "Miradores",
          souvenirs: "Souvenirs",
          reserve: "Reservar",
          title: "Bosque Nuboso<br>La Paz",
          subtitle: "Naturaleza viva en San Ramón, Costa Rica",
          explore: "Explorar Tours",
          how: "Cómo llegar",
          infoTitle: "Un viaje al corazón del bosque nuboso",
          infoText:
            "Explora senderos entre la niebla y descubre la riqueza natural y majestuosa del bosque nuboso.",
          map: "Ver en mapa",
          location: "📍 San Ramón, Alajuela, Costa Rica",
          copyright: "© 2025 Bosque Nuboso La Paz",
        },
        en: {
          brand: "Cloud Forest",
          tours: "Tours",
          restaurant: "Restaurant",
          viewpoints: "Viewpoints",
          souvenirs: "Souvenirs",
          reserve: "Book Now",
          title: "Cloud Forest<br>La Paz",
          subtitle: "Living nature in San Ramón, Costa Rica",
          explore: "Explore Tours",
          how: "How to get there",
          infoTitle: "A journey to the heart of the cloud forest",
          infoText:
            "Explore misty trails and discover the natural richness and beauty of the cloud forest.",
          map: "View on map",
          location: "📍 San Ramón, Alajuela, Costa Rica",
          copyright: "© 2025 La Paz Cloud Forest",
        },
      };

      document.getElementById("btnLang").addEventListener("click", () => {
        lang = lang === "es" ? "en" : "es";
        document.getElementById("btnLang").textContent =
          lang === "es" ? "EN" : "ES";

        document.querySelectorAll("[data-key]").forEach((el) => {
          el.innerHTML = translations[lang][el.dataset.key];
        });
      });