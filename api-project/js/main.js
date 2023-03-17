import "../styles/style.css";
import { DOMSelectors } from "./dom";


DOMSelectors.button.addEventListener("click", function(){

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
            <img class="image" src="${element.imageUrl}" alt="">
            <h2 class="name">${element.fullName}</h2>
            <p>Family: ${element.family}</p>
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
