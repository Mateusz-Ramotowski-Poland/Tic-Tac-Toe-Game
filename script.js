"use strict";
// name of function, last word: DOM - change property of DOM element, it is visible on webpage;

/* If You need use pseudo code or algorithms 
Use camelCase for variable name. Think about system for variable names. 
function names: use words get, change, delete, create, add, return
from begging write clean code, do small code refactoring
use chrome debugger for finding bugs*/
const gridBoxes = document.getElementsByClassName("grid-box");
const gridArea = document.getElementsByClassName("grid-area")[0];
const buttonsChangeGridSize = document.getElementsByClassName(
  "buttons-change-grid-size"
); // there are three buttons
const buttonPLayAgain = document.getElementsByClassName("button-play-again")[0];
const informationForPlayerArea = document.getElementsByClassName(
  "information-for-player"
)[0];
let freeGridBoxes = [0, 1, 2, 3, 4, 5, 6, 7, 8]; // for 3x3 grid;

function gridBoxFunctionality(event) {
  let placeInFreeGridBoxes;
  let randomNumber;
  let doComputerMove;
  let counterCheckingNullInFreeGridBoxes = 0;
  event.target.innerText = "X";
  // in event listener this mean DOM element that handler is attached to
  this.removeEventListener("click", gridBoxFunctionality);
  for (let i = 0; i < gridBoxes.length; i++) {
    if (this === gridBoxes[i]) {
      placeInFreeGridBoxes = i;
      break;
    }
  }
  freeGridBoxes[placeInFreeGridBoxes] = null;
  console.log(placeInFreeGridBoxes);
  console.log(freeGridBoxes);
  // below checking free Grid boxes
  for (let i = 0; i < freeGridBoxes.length; i++) {
    let temp1 = freeGridBoxes[i] ?? "null inside";
    if (temp1 === "null inside") {
      counterCheckingNullInFreeGridBoxes++;
    } else {
      break;
    }
  }
  if (counterCheckingNullInFreeGridBoxes !== freeGridBoxes.length) {
    // below computer move
    do {
      randomNumber = Math.floor(Math.random() * freeGridBoxes.length);
    } while (freeGridBoxes[randomNumber] === null);
    freeGridBoxes[randomNumber] = null;
    gridBoxes[randomNumber].innerText = "O";
    gridBoxes[randomNumber].removeEventListener("click", gridBoxFunctionality);
  }
}
function drawGridToPLayDOM(event) {
  const numberOrRowsColumns = event.currentTarget.innerText[0]; //first char from clicked button
  let innerHTML = "";
  for (let i = 0; i < numberOrRowsColumns; i++) {
    innerHTML += '\n<div class="grid-row">\n';
    for (let i = 0; i < numberOrRowsColumns; i++) {
      innerHTML += '  <div class="grid-box"></div>\n';
    }
    innerHTML += "</div>\n";
  }
  gridArea.innerHTML = innerHTML;
  for (let buttonChangeGridSize of buttonsChangeGridSize) {
    buttonChangeGridSize.hidden = true;
  }
  buttonPLayAgain.hidden = false;
  for (let i = 0; i < gridBoxes.length; i++) {
    gridBoxes[i].addEventListener("click", gridBoxFunctionality);
  }
  informationForPlayerArea.textContent = "Place 3 in a row to win!";
  if (this.innerText[0] === "3") {
    freeGridBoxes.length = 9;
  } else if (this.innerText[0] === "5") {
    freeGridBoxes.length = 25;
  } else {
    freeGridBoxes.length = 49;
  }
  for (let i = 0; i < freeGridBoxes.length; i++) {
    freeGridBoxes[i] = i;
  }
}

for (let buttonChangeGridSize of buttonsChangeGridSize) {
  buttonChangeGridSize.addEventListener("click", drawGridToPLayDOM);
}
buttonPLayAgain.addEventListener("click", function () {
  for (let buttonChangeGridSize of buttonsChangeGridSize) {
    buttonChangeGridSize.hidden = false;
  }
  buttonPLayAgain.hidden = true;
  gridArea.innerHTML = "";
  informationForPlayerArea.textContent = "Choose grid to play.";
  console.log(freeGridBoxes);
});
