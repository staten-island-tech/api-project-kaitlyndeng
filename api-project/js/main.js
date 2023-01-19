import "../styles/style.css";
import { DOMSelectors } from "./dom";

let characters = "6";
const api = `https://api.disneyapi.dev/characters/${characters}`;
async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.getElementById("api-response").textContent = data.content;

      console.log("good");
    }
  } catch (error) {}
}
getData(api);

const idCharacter = data.forEach((data) => console.log(data.data._id));
idCharacter();

// function explain(species) {
//   const explainPromise = new Promise(function (resolve, reject) {
//     resolve(`This is the ${species}.`);
//   });
//   return explainPromise;
// }

// const redsnapper = explain("red snapper");

// redsnapper.then((result) => {
//   console.log(result);
// });

const listAll = data.forEach((data) => {
  StartPg(data);
});
listAll();

// document.getElementById("form").addEventListener(
//   "submit",
//   function (event) {
//     clear();
//     event.preventDefault();
//     console.log(event);
//     // data.forEach((data.element) => {DOMSelectors.box.insertAdjacentHTML(
//     //   "beforeend",
//     //   `<div class="card">
//     // <h2 id="category">${element.category}</h2>
//     // // <img class="image" src="${element.imageUrl}"/>
//     // // <h3 class="funfact"></h3>
//     // </div>`
//     // )}

//     );
//   }

// insert();
// card();
// );

function clear() {
  DOMSelectors.category.value = "";
}
clear();
