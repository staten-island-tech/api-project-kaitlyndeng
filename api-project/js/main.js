import "../styles/style.css";
import { DOMSelectors } from "./dom";

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

async function listAll() {
  const response = await fetch(api);
  const data = await response.json();
  data.data.forEach((element) =>
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
    <h2 class="name">${element.name}</h2>
    <img class="image" src="${element.imageUrl}"/>
    <h3 class="features">${element.films} ${element.tvShows} ${element.videoGames} ${element.shortFilms}</h3>
    </div>`
    )
  );
  console.log(data.data);
}
listAll();



