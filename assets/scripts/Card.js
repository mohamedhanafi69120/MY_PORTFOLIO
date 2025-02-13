/******Fichier json*** */
const projets = "./assets/data/projet.json";

/******Variables globales*********/

/***récuperation de la div card-Container***/

const cardContainer = document.querySelector(".card-Container");
// console.log(cardContainer);

fetch(projets)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erreur lors du chargement du fichier JSON");
    }
    return response.json();
  })
  .then((projets) => {
    /*****récupération des donnée de chaue projet ********/
    projets.forEach((projet) => {
      /*****div qui contient les card *****/
      const cards = document.createElement("div");
      cards.classList.add("cards");

      /*********ajout du contenu des cards *********/
      cards.innerHTML = ` 
        <img src = ${projet.image} alt = ${projet.titre}>
        <h3>${projet.titre}</h3>
        `;
      /***ecouteur d'evenement sur la card *******/
      cards.addEventListener("click", () => {
        viewModal(projet);
      });

      /*******definition de la div cards comme enfant de la div cardsContainer********/
      cardContainer.appendChild(cards);
    });
  })

  .catch((error) => {
    console.error("Erreur:", error);
  });

/******fonction de la modal ******/
function viewModal(projet) {
  /******création d'overlay*******/
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  /***********creation de la modal***/
  const modal = document.createElement("div");
  modal.classList.add("modal");
  /******ajout des infos a la modal *******/
  modal.innerHTML = `
  <i class="fa-solid fa-xmark"></i>
  <img src = ${projet.image} alt = ${projet.titre}>
  <h2>${projet.titre}</h2>
  <p>${projet.description}</p>
  <p>${projet.technologies}</p>
  <a href=${projet.lien} target="_blank" ><i class="fa-solid fa-arrow-up-from-bracket"></i></a>
  `;
  /**********Ajout de la modal a la gallery ******* */

  cardContainer.appendChild(overlay);
  cardContainer.appendChild(modal);
  /***********Ajout des écouteur d'evenements pour fermer la modal au click sur overlay ou sur la croix **************/

  const closeModal = document.querySelector(".fa-xmark");
  closeModal.addEventListener("click", () => {
    modal.remove();
    overlay.remove();
  });

  overlay.addEventListener("click", () => {
    modal.remove();
    overlay.remove();
  });
}
