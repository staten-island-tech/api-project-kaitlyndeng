import "../styles/style.css";

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
    console.log("bad");
  }
}
getData(URL);

function explain(species) {
  const explainPromise = new Promise(function (resolve, reject) {
    resolve(`This is the ${species}.`);
  });
  return explainPromise;
}

const redsnapper = explain("atlantic cod");

redsnapper.then((result) => {
  console.log(result);
});

// const listFish = species.forEach((species) => {
//   StartPg(species);
// });
// listFish();

DOMSelectors.form.addEventlistener("submit", function all(e) {
  e.preventDefault();
  console.log(e);
  clear();
  function card() {
    let category = DOMSelectors.category.value;
  }
  function insert() {
    species.forEach((species) =>
      DOMSelectors.box.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
      <h2 class="name"></h2>
      <img class="image" src=""/>
      <h3 class="funfact"></h3>
      </div>`
      )
    );
  }
});
card();
insert();
