import "../styles/style.css";
import { DOMSelectors } from "./dom";

const api = "https://acnhapi.com/v1/bugs/";
async function getData(api) {
  try {
    const response = await fetch(api);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);

      // document.getElementById("api-response").textContent = data.content;

      console.log("good");
    }
  } catch (error) {}
}

getData(api);

// function clear() {
//   DOMSelectors.box.innerHTML = "";
// };


function listAll() {
  data.forEach((element)=> {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
    <h2 class="name">${element.name.name-USen}</h2>
    <img class="image" src="${element.image_uri}"/>
    <h3 class="rarity">${element.availability.rarity}</h3>
    </div>`
    )} );
  }
;

listAll();

document.getElementById("all").addEventListener("click", function all() {
  clear();
  data.forEach((element) =>
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
  <h2 class="name">${element.name.name-USen}</h2>
  <img class="image" src="${element.image_uri}"/>
  <h3 class="rarity">${element.availability.rarity}</h3>
  </div>`
  ))
});

// document.getElementById("common").addEventListener("click", function common() {
//   clear();
//   data
//   .filter(element => element.rarity === "common")
//   .forEach((element) =>
//   DOMSelectors.box.insertAdjacentHTML(
//     "beforeend",
//     `<div class="card">
//   <h2 class="name">${element.name.name-USen}</h2>
//   <img class="image" src="${element.image_uri}"/>
//   <h3 class="rarity">${element.availability.rarity}</h3>
//   </div>`
//   ))
// });

// document.getElementById("uncommon").addEventListener("click", function uncommon() {
//   clear();
//   data.data
//   .filter(element => element.rarity === "uncommon")
//   .forEach((element) =>
//   DOMSelectors.box.insertAdjacentHTML(
//     "beforeend",
//     `<div class="card">
//   <h2 class="name">${element.name.name-USen}</h2>
//   <img class="image" src="${element.image_uri}"/>
//   <h3 class="rarity">${element.availability.rarity}</h3>
//   </div>`
//   ))
// });

// document.getElementById("rare").addEventListener("click", function rare() {
//   clear();
//   data.data
//   .filter(element => element.rarity === "rare")
//   .forEach((element) =>
//   DOMSelectors.box.insertAdjacentHTML(
//     "beforeend",
//     `<div class="card">
//   <h2 class="name">${element.name.name-USen}</h2>
//   <img class="image" src="${element.image_uri}"/>
//   <h3 class="rarity">${element.availability.rarity}</h3>
//   </div>`
//   ))
// });

// document.getElementById("ultra-rare").addEventListener("click", function ultra-rare() {
//   clear();
//   data.data
//   .filter(element => element.availability.rarity === "Ultra-rare")
//   .forEach((element) =>
//   DOMSelectors.box.insertAdjacentHTML(
//     "beforeend",
//     `<div class="card">
//   <h2 class="name">${element.name.name-USen}</h2>
//   <img class="image" src="${element.image_uri}"/>
//   <h3 class="rarity">${element.rarity}</h3>
//   </div>`
//   ))
// });

  // async function getCharacter() {
//   const response = await fetch(api);
//   const data = await response.json();
//   data.data.forEach((element) =>
//     DOMSelectors.box.insertAdjacentHTML(
//       "beforeend",
//       `<div class="card">
//     <h2 class="name">${element.name}</h2>
//     <img class="image" src="${element.imageUrl}"/>
//     <h3 class="features">${element.films} ${element.tvShows} ${element.videoGames} ${element.shortFilms}</h3>
//     </div>`
//     )
//   );
//   console.log(data.data);
// }
// getCharacter();
 
