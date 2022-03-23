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
const freeGridBoxes = [0, 1, 2, 3, 4, 5, 6, 7, 8]; // for 3x3 grid;
const xOnGrid = [];
const oOnGrid = [];

function checkIfYouWon(whoWonString, ) { // now it works only for X for 3x3 grid
  const didYOuWOn =
    (xOnGrid[0] && xOnGrid[1] && xOnGrid[2]) ||
    (xOnGrid[3] && xOnGrid[4] && xOnGrid[5]) || 
    (xOnGrid[6] && xOnGrid[7] && xOnGrid[8]) || 
    (xOnGrid[0] && xOnGrid[3] && xOnGrid[6]) || 
    (xOnGrid[1] && xOnGrid[4] && xOnGrid[7]) || 
    (xOnGrid[2] && xOnGrid[5] && xOnGrid[8]) || 
    (xOnGrid[0] && xOnGrid[4] && xOnGrid[8]) || 
    (xOnGrid[2] && xOnGrid[4] && xOnGrid[6]) || 
    null;
  if (didYOuWOn) {
    informationForPlayerArea.textContent = whoWonString;
  }
}
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
  xOnGrid[placeInFreeGridBoxes] = 1;
  freeGridBoxes[placeInFreeGridBoxes] = null;
  checkIfYouWon();
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
    oOnGrid[randomNumber] = 1;
    gridBoxes[randomNumber].innerText = "O";
    gridBoxes[randomNumber].removeEventListener("click", gridBoxFunctionality);
  }
  console.log(
    `free grid boxes:${freeGridBoxes}, oPositionOnGrid:${oOnGrid}, xPositionOnGrid:${xOnGrid}`
  );
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
  //xOnGrid = [];
  // oOnGrid = []; this will produce Uncaught TypeError: Assignment to constant variable.
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
