import "./style.css";

let fish = "red-snapper";
const URL = `https://www.fishwatch.gov/api/species/${fish}`;
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
    console.log(bad);
  }
}
getData(URL);
data.forEach;
