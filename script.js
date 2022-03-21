"use strict";
// name of function, last word: DOM - change property of DOM element, it is visible on webpage;

/* If You need use pseudo code or algorithms 
Use camelCase for variable name. Think about system for variable names. 
function names: use words get, change, delete, create, add, return
from begging write clean code, do small code refactoring
use chrome debugger for finding bugs*/
//alert("It is connected");  // It works
const gridArea = document.getElementsByClassName("grid-area")[0];
const buttonsChangeGridSize = document.getElementsByTagName("button"); // there are three buttons

function drawBoardToPLayDOM(event) {
  const numberOrRowsColumns = event.currentTarget.innerText[0]; //first char from clicked button 
  let innerHTML = "";
  for (let i = 0; i < numberOrRowsColumns; i++) {
    innerHTML+='\n<div class="row">\n'
    for (let i = 0; i < numberOrRowsColumns; i++) {
      innerHTML+='  <div class="board-game-area"></div>\n';
    }
    innerHTML+='</div>\n';
  }
  gridArea.innerHTML = innerHTML;
}
for(let buttonChangeGridSize of buttonsChangeGridSize){
  buttonChangeGridSize.addEventListener("click", drawBoardToPLayDOM);
}

