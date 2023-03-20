import "../styles/style.css";
import { DOMSelectors } from "./dom";

const api = "https://thronesapi.com/api/v2/Characters";
async function getAll(api) {
  try {
    const response = await fetch(api);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
      data.forEach((element) => {
        DOMSelectors.box.insertAdjacentHTML(
          "beforeend",
         `<div class="card">
         <img class="image" src="${element.imageUrl}" alt="Photo: ${element.fullName}">
         <h2 class="name">${element.fullName}</h2>
         <h3>Family: ${element.family}</h3>
        </div>`
        )
      }
       
      )

      console.log("good");
      }
   } catch (error) {}
 }
getAll(api);

function clear(){
  DOMSelectors.box.innerHTML=""
} 


DOMSelectors.button.addEventListener("click", function(){
  clear();
  const url = "https://thronesapi.com/api/v2/Characters";
  let userInput = DOMSelectors.userInput.value;
    
    async function getData(url, userInput) {
      
      try{
        const response = await fetch(url);
        if (response.status < 200 || response.status > 299) {
          throw new Error(response);
       } else{
        const data = await response.json();



        const specificData = 
        data
        .filter((element) => element.firstName.includes(userInput));
        specificData.map((element) => {
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `<div class="card">
            <img class="image" src="${element.imageUrl}" alt="Photo: ${element.fullName}">
            <h2 class="name">${element.fullName}</h2>
            <h3>Family: ${element.family}</h3>
          </div>
          `
          );
          console.log(specificData)
        })
        if(specificData.length === 0) {
          throw new Error(response);
        }
      }
      
      } catch (error) {
        console.log(error);
        DOMSelectors.box.insertAdjacentHTML(
          "beforeend",
          `<div class="box">Character not found. Please check your spelling.</div>`
        );
      }
    };
  
   
      getData(url, userInput);
    }
    );

DOMSelectors.reset.addEventListener("click", function () {
  DOMSelectors.box.innerHTML = "";
  userInput.value = "";
});
