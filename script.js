"use strict";
// name of function, last word: DOM - change property of DOM element, it is visible on webpage;

/* If You need use pseudo code or algorithms 
Use camelCase for variable name. Think about system for variable names. 
function names: use words get, change, delete, create, add, return
from begging write clean code, do small code refactoring
use chrome debugger for finding bugs*/
const gridBoxes = document.getElementsByClassName("grid-box");
const gridArea = document.getElementsByClassName("grid-area")[0];
const buttonsChangeGridSize = document.getElementsByClassName("buttons-change-grid-size"); // there are three buttons
const buttonPLayAgain = document.getElementsByClassName("button-play-again")[0];

function drawGridToPLayDOM(event) {
  const numberOrRowsColumns = event.currentTarget.innerText[0]; //first char from clicked button 
  let innerHTML = "";
  for (let i = 0; i < numberOrRowsColumns; i++) {
    innerHTML+='\n<div class="grid-row">\n'
    for (let i = 0; i < numberOrRowsColumns; i++) {
      innerHTML+='  <div class="grid-box"></div>\n';
    }
    innerHTML+='</div>\n';
  }
  gridArea.innerHTML = innerHTML;
  for(let buttonChangeGridSize of buttonsChangeGridSize){
    buttonChangeGridSize.hidden = true;
  }
  buttonPLayAgain.hidden = false;
  for(let gridBox of gridBoxes){
    gridBox.addEventListener("click", function(event){
      event.target.innerText = "X";

    })
  }
}

for(let buttonChangeGridSize of buttonsChangeGridSize){
  buttonChangeGridSize.addEventListener("click", drawGridToPLayDOM);
}
buttonPLayAgain.addEventListener("click", function(){
  for(let buttonChangeGridSize of buttonsChangeGridSize){
    buttonChangeGridSize.hidden = false;
  }
  buttonPLayAgain.hidden = true;
})

