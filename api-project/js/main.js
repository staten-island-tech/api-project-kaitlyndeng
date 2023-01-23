import "../styles/style.css";
import { DOMSelectors } from "./dom";

// let first = "Hannah";
// let last = "Montana";
const api = `https://api.disneyapi.dev/characters`;
// async function getData(api) {
//   try {
//     const response = await fetch(api);
//     if (response.status < 200 || response.status > 299) {
//       throw new Error(response);
//     } else {
//       const data = await response.json();
//       console.log(data.data);

//       // document.getElementById("api-response").textContent = data.content;

//       // console.log("good");
//     }
//   } catch (error) {}
// }

// getData(api);

async function getCharacter() {
  const response = await fetch(api);
  const data = await response.json();
  console.log(data.data);

  const character = data.data[0];
  let features = data.films;
  let image = data.imageUrl;

  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
    <h2 id="features">${features}</h2>
    <img class="image" src="${image}"/>
    </div>`
  );
}

getCharacter();

// document.getElementById("form").addEventListener(
//   "submit",
//   function (event) {
//     clear();
//     event.preventDefault();
//     console.log(event);
// data.forEach((data.element) => {DOMSelectors.box.insertAdjacentHTML(
//   "beforeend",
//   `<div class="card">
// <h2 id="category">${element.category}</h2>
// // <img class="image" src="${element.imageUrl}"/>
// // <h3 class="funfact"></h3>
// </div>`
// )}

//     );
//   }

// insert();
// card();
// );

// function clear() {
//   DOMSelectors.category.value = "";
// }
// clear();
