import "../styles/style.css";
import { DOMSelectors } from "./dom";

const url = `https://api.disneyapi.dev/characters?page=${page}`;
let page = 1;
let userInput = DOMSelectors.userInput.value;
do{async function getData(url) {
  try {
    const response = await fetch(url);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
      data.data
        .filter((element) => element.name.includes(`${userInput}`))
        .map((element) => {
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `<div class="card">
          <img class="image" src="${element.imageUrl}" alt="">
          <h2 class="name">${element.name}</h2>
          <div class="features">
            <ul><b>Films: </b> ${element.films}</ul>
            <br></br>
            <ul><b>Short Films: </b> ${element.shortFilms}</ul>
            <br></br>
            <ul><b>TV Shows: </b>${element.tvShows}</ul>
            <br></br>
            <ul><b>Video Games: </b> ${element.videoGames}</ul>
          </div>
        </div>
        `
          );
        });
    }
  } catch (error) {
    console.log(error);
    console.log("bad");
  }
}

getData(url);}




// async function specificCharacter() {
//   try {
//     for (let page = 1; page <= 149; page++) {
//       const response = await fetch(url);
//       const data = await response.json();

//       data.data
//         .filter((element) => element.name.includes(`${userInput}`))
//         .map((element) => {
//           DOMSelectors.box.insertAdjacentHTML(
//             "beforeend",
//             `<div class="card">
//           <img class="image" src="${element.imageUrl}" alt="">
//           <h2 class="name">${element.name}</h2>
//           <div class="features">
//             <ul><b>Films: </b> ${element.films}</ul>
//             <br></br>
//             <ul><b>Short Films: </b> ${element.shortFilms}</ul>
//             <br></br>
//             <ul><b>TV Shows: </b>${element.tvShows}</ul>
//             <br></br>
//             <ul><b>Video Games: </b> ${element.videoGames}</ul>
//           </div>
//         </div>
//         `
//           );
//         });
//     }
//   } catch (error) {
//     console.log(error);
//     DOMSelectors.box.insertAdjacentHTML(
//       "afterbegin",
//       `<div class="box">Character not found. Please check your spelling.</div>`
//     );
//   }
// }
// specificCharacter();

DOMSelectors.form.addEventListener(
  "submit",
  async function specificCharacter() {
    e.preventDefault();
    console.log(e);
  }
);

DOMSelectors.reset.addEventListener("click", function () {
  DOMSelectors.box.innerHTML = "";
  userInput.value = "";
});
