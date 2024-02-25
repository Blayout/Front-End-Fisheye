function photographerTemplate(data) {
  const { id, name, portrait, city, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);

    const h2 = document.createElement("h2");
    h2.textContent = name;
    h2.style.margin = "0";
    h2.style.marginTop = "10px";

    const pCity = document.createElement("p");
    pCity.textContent = city;
    pCity.style.margin = "0";
    pCity.style.color = "#901C1C";

    const pTagline = document.createElement("p");
    pTagline.textContent = tagline;
    pTagline.style.margin = "0";

    const pPrice = document.createElement("p"); // Créer un nouveau paragraphe pour le prix
    pPrice.textContent = `Prix: ${price}`; // Formater le prix
    pPrice.style.margin = "0";
    pPrice.style.color = "#757575";

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(pCity);
    article.appendChild(pTagline);
    article.appendChild(pPrice); // Ajouter le paragraphe de prix

    return article;
  }

  return { id, name, picture, city, tagline, price, getUserCardDOM };
}

const photographersData = [
  {
    id: 2,
    name: "Mimi Keel",
    portrait: "MimiKeel.jpg",
    city: "London, UK",
    tagline: "Voir le beau dans le quotidien",
    price: "350",
  },
  {
    id: 3,
    name: "Ellie-Rose Wilkens",
    portrait: "EllieRoseWilkens.jpg",
    tagline: "Capturer des compositions complexes",
    city: "Paris",
    price: "350",
  },
  {
    id: 4,
    name: "Tracy Galindo",
    portrait: "TracyGalindo.jpg",
    tagline: "Photographe freelance",
    city: "Montreal",
    price: "350",
  },
  {
    id: 5,
    name: "Nabeel Bradford",
    portrait: "NabeelBradford.jpg",
    tagline: "Toujours aller de l'avant",
    city: "Mexico City",
    price: "350",
  },
  {
    id: 6,
    name: "Rhode Dubois",
    portrait: "RhodeDubois.jpg",
    tagline: "Je crée des souvenirs",
    city: "Barcelona",
    price: "350",
  },
  {
    id: 7,
    name: "Marcel Nikolic",
    portrait: "MarcelNikolic.jpg",
    tagline: "Toujours à la recherche de LA photo",
    city: "Berlin",
    price: "350",
  },
];

const photographerSection = document.querySelector(".photographer_section");

photographersData.forEach((photographerData) => {
  const photographer = photographerTemplate(photographerData);

  const photographerCard = photographer.getUserCardDOM();

  photographerSection.appendChild(photographerCard);
});
