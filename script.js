
document.querySelector("h2").textContent = 20;
document.getElementById("compteur-el").textContent = 0;
// Sélectionner un élément <div> avec l'ID "main-content"
const mainContent = document.getElementById("main-content");
// Sélectionner un élément <header> avec l'ID "site-header"
const siteHeader = document.getElementById("site-header");
// Sélectionner un bouton avec l'ID "submit-btn"
const submitButton = document.getElementById("submit-btn");
// Sélectionner le premier paragraphe du document
const firstParagraph = document.querySelector("p");
// Sélectionner un élément par son identifiant (ID)
const header = document.querySelector("#header");
// Sélectionner le premier élément avec une classe spécifique
const firstButton = document.querySelector(".btn");
// Sélectionner un élément de type <div> avec une classe spécifique
const specialDiv = document.querySelector("div.special");
// Sélectionner le premier élément <input> dans un formulaire avec une classe spécifique
const firstInput = document.querySelector("form input.form-input");
const sauvegardeEl = document.getElementById("sauvegarde-el");

const capturerBtn = document.getElementById("capturer-btn");
const sauvegarderBtn = document.getElementById("sauvegarder-btn");

let compteur = 0;
const compteurEl = document.getElementById("compteur-el");


// window.addEventListener("load", () => { // Attendre que la page soit chargée pour exécuter le code
//     sauvegardeEl.textContent = localStorage.getItem("captures") || ""; // Charger les captures sauvegardées ou une chaîne vide
// });

function capturer() {
    compteur += 1; // Incrémenter le compteur de 1
    compteurEl.textContent = compteur; // Mettre à jour le texte de l'élément <h2>
    if (compteur < 5) {
        compteurEl.style.color = "green"; // Couleur verte pour moins de 5 captures
    } else if (compteur < 10) {
        compteurEl.style.color = "yellow"; // Couleur jaune pour 5 à 9 captures
    } else {
        compteurEl.style.color = "red"; // Couleur rouge pour 10 captures ou plus
    }
}

function sauvegarder() {
    if (compteur > 0) {
        let compteurStr = compteur + " Pokémons - ";
        sauvegardeEl.textContent += compteurStr; // Ajouter la valeur actuelle du compteur
        localStorage.setItem("captures", sauvegardeEl.textContent); // Sauvegarder les captures dans le localStorage
        compteur = 0;
        compteurEl.style.color = "black";
        compteurEl.textContent = compteur;
    }
}

function liberer() {
    compteur = 0;
    compteurEl.textContent = compteur;
    compteurEl.style.color = "black";
    sauvegardeEl.textContent = "";
    localStorage.setItem("captures", null) ;
}


