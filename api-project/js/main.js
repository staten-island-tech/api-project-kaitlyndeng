import "../styles/style.css";
import { DOMSelectors } from "./dom";

let characters = "Hannah Montana";
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

document.getElementById("form").addEventListener(
  "submit",
  function (event) {
    clear();
    event.preventDefault();
    console.log(event);
    data.forEach((data) =>
      DOMSelectors.box.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
      <h2 id="category">${category}</h2>
      // <img class="image" src="${url}"/>
      // <h3 class="funfact"></h3>
      </div>`
      )
    );
  }

  // insert();
  // card();
);

function clear() {
  DOMSelectors.category.value = "";
}
