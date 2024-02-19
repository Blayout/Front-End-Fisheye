async function getPhotographers() {
  try {
    const response = await fetch("../../data/photographers.json");
    const photographers = await response.json();
    return photographers;
  } catch (error) {
    console.error("Erreur lors de la récupération des photographes :", error);
    throw error;
  }
}

getPhotographers()
  .then((photographers) => {
    console.log("Photographers data:", photographers);
  })
  .catch((error) => {
    console.log("pas de photographe", error);
  });
