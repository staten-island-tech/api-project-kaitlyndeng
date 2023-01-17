import "../styles/style.css";
import {DOMSelectors} from "./dom";

let species = "atlantic-cod";
const URL = `https://www.fishwatch.gov/api/species/${species}`;
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
  } catch (error) {
    console.log(error);
  }
}
getData(URL);

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

// const listFish = species.forEach((species) => {
//   StartPg(species);
// });
// listFish();

DOMSelectors.form.addEventlistener("submit", function (event) {
  event.preventDefault();
  console.log(event);
  // function card() {
  //   let category = DOMSelectors.category.value;
  
  function insert() {

      DOMSelectors.box.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
      <h2 id="category">${category}</h2>
      // <img class="image" src="${url}"/>
      // <h3 class="funfact"></h3>
      <button type= "button" class="button">Search</button>
      </div>`
      );
};


insert();
card();
})

function clear() {
  DOMSelectors.category.value = "";
}

clear();