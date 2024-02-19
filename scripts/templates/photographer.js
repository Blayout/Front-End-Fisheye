function photographerTemplate(data) {
  const { id, name, portrait, city, tagline } = data;

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
    pCity.style.color = "#901C1C";
    pCity.style.margin = "0";

    const pTagline = document.createElement("p");
    pTagline.textContent = tagline;
    pTagline.style.margin = "0";

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(pCity);
    article.appendChild(pTagline);

    return article;
  }

  return { id, name, picture, city, tagline, getUserCardDOM };
}

const photographersData = [
  {
    id: 2,
    name: "Mimi Keel",
    portrait: "MimiKeel.jpg",
    city: "London, UK",
    tagline: "Voir le beau dans le quotidien",
  },
  {
    id: 3,
    name: "Ellie-Rose Wilkens",
    portrait: "EllieRoseWilkens.jpg",
    tagline: "Capturer des compositions complexes",
    city: "Paris",
  },
  {
    id: 4,
    name: "Tracy Galindo",
    portrait: "TracyGalindo.jpg",
    tagline: "Photographe freelance",
    city: "Montreal",
  },
  {
    id: 5,
    name: "Nabeel Bradford",
    portrait: "NabeelBradford.jpg",
    tagline: "Toujours aller de l'avant",
    city: "Mexico City",
  },
  {
    id: 6,
    name: "Rhode Dubois",
    portrait: "RhodeDubois.jpg",
    tagline: "Je crée des souvenirs",
    city: "Barcelona",
  },
  {
    id: 7,
    name: "Marcel Nikolic",
    portrait: "MarcelNikolic.jpg",
    tagline: "Toujours à la recherche de LA photo",
    city: "Berlin",
  },
];

const photographerSection = document.querySelector(".photographer_section");

photographersData.forEach((photographerData) => {
  const photographer = photographerTemplate(photographerData);

  const photographerCard = photographer.getUserCardDOM();

  photographerSection.appendChild(photographerCard);
});
