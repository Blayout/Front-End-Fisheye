function photographerTemplate(data) {
    const { id, name, portrait, tagline, city } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        const h2 = document.createElement('h2');
        h2.textContent = name;
        const pTagline = document.createElement('p');
        pTagline.textContent = tagline;
        const pCity = document.createElement('p');
        pCity.textContent = city;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(pTagline);
        article.appendChild(pCity);

        return article;
    }

    return { id, name, picture, tagline, city, getUserCardDOM };
}

// Supposons que vous ayez une liste de données de photographes
const photographersData = [
    {
        id: 1,
        name: "John Doe",
        portrait: "john-doe.jpg",
        tagline: "Photographer",
        city: "Cityville"
    },
    {
        id: 2,
        name: "Mimi Keel",
        portrait: "MimiKeel.jpg",
        tagline: "Voir le beau dans le quotidien",
        city: "London"
    },
    {
        id: 3,
        name: "Ellie-Rose Wilkens",
        portrait: "EllieRoseWilkens.jpg",
        tagline: "Capturer des compositions complexes",
        city: "Paris"
    },
    {
        id: 4,
        name: "Tracy Galindo",
        portrait: "TracyGalindo.jpg",
        tagline: "Photographe freelance",
        city: "Montreal"
    },
    {
        id: 5,
        name: "Nabeel Bradford",
        portrait: "NabeelBradford.jpg",
        tagline: "Toujours aller de l'avant",
        city: "Mexico City"
    },
    {
        id: 6,
        name: "Rhode Dubois",
        portrait: "RhodeDubois.jpg",
        tagline: "Je crée des souvenirs",
        city: "Barcelona"
    },
    {
        id: 7,
        name: "Marcel Nikolic",
        portrait: "MarcelNikolic.jpg",
        tagline: "Toujours à la recherche de LA photo",
        city: "Berlin"
    }
    // Ajoutez d'autres données de photographes selon votre besoin
];

// Ajoutez le chemin de l'image à chaque photographe
photographersData.forEach((photographer) => {
    photographer.portrait = `assets/photographers/${photographer.portrait}`;
});

// Maintenant, votre tableau photographersData contient le chemin complet de l'image pour chaque photographe
console.log(photographersData);


// Supposons que vous ayez une nouvelle div avec la classe "photographer_section"
const photographerSection = document.querySelector('.photographer_section');

// Boucle à travers les données des photographes et les ajoute au DOM
photographersData.forEach((photographerData) => {
    // Utilisez la fonction photographerTemplate pour créer un objet représentant un photographe
    const photographer = photographerTemplate(photographerData);

    // Utilisez la méthode getUserCardDOM pour obtenir l'élément DOM représentant le photographe
    const photographerCard = photographer.getUserCardDOM();

    // Ajoutez l'élément DOM à la section des photographes sur la page
    photographerSection.appendChild(photographerCard);
});
