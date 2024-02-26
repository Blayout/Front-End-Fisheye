//Mettre le code JavaScript lié à la page photographer.html
// photographer.js

function getPhotographerIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
  }
  
  async function getPhotographerDetails(photographerId) {
    try {
      const response = await fetch("../../data/photographers.json");
      const photographers = await response.json();
      return photographers.find(photographer => photographer.id === parseInt(photographerId));
    } catch (error) {
      console.error("Erreur lors de la récupération des détails du photographe :", error);
      throw error;
    }
  }
  
  window.onload = async function() {
    const photographerId = getPhotographerIdFromUrl();
    if (photographerId) {
      try {
        const photographer = await getPhotographerDetails(photographerId);
        console.log("Détails du photographe :", photographer);
        // Afficher les détails du photographe sur la page photographer.html
      } catch (error) {
        console.error("Erreur lors de la récupération des détails du photographe :", error);
      }
    }
  }
  