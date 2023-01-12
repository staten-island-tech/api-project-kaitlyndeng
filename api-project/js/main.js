import "../styles/style.css";

let species = "red snapper";
const URL = `https://www.fishwatch.gov/api/species/${species}`;
async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.getElementById("api-response").textContent = data.data;

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
    resolve(`This is a ${species}.`);
  });
  return explainPromise;
}

const redsnapper = explain("red snapper");

redsnapper.then((result) => {
  console.log(result);
});
