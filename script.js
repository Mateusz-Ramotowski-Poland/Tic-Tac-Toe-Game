"use strict";
/* Think about system for variable names. 
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
const freeGridBoxes = [];
const xOnGrid = [];
const oOnGrid = [];
let someoneWon = false;

function checkIfYouWon(whoWonString, XOrOString) {
  // function works for 3x3 grid
  XOrOString = XOrOString === "O" ? oOnGrid : xOnGrid;
  const didYOuWOn =
    (XOrOString[0] && XOrOString[1] && XOrOString[2]) ||
    (XOrOString[3] && XOrOString[4] && XOrOString[5]) ||
    (XOrOString[6] && XOrOString[7] && XOrOString[8]) ||
    (XOrOString[0] && XOrOString[3] && XOrOString[6]) ||
    (XOrOString[1] && XOrOString[4] && XOrOString[7]) ||
    (XOrOString[2] && XOrOString[5] && XOrOString[8]) ||
    (XOrOString[0] && XOrOString[4] && XOrOString[8]) ||
    (XOrOString[2] && XOrOString[4] && XOrOString[6]) ||
    null;
  if (didYOuWOn) {
    informationForPlayerArea.textContent = whoWonString;
    for (let i = 0; i < gridBoxes.length; i++) {
      gridBoxes[i].removeEventListener("click", gridBoxFunctionality);
    }
    someoneWon = true;
  }
}
function gridBoxFunctionality(event) {
  let placeInFreeGridBoxes;
  let randomNumber;
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
  xOnGrid[placeInFreeGridBoxes] = 1; // here can be any truthy value
  freeGridBoxes[placeInFreeGridBoxes] = null;
  checkIfYouWon("X won!", "X");
  // below checking free Grid boxes
  if (!someoneWon) {
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
      oOnGrid[randomNumber] = 1; // here can be any truthy value
      gridBoxes[randomNumber].innerText = "O";
      gridBoxes[randomNumber].removeEventListener(
        "click",
        gridBoxFunctionality
      );
      checkIfYouWon("O won!", "O");
    }
    console.log(
      `free grid boxes:${freeGridBoxes}, oPositionOnGrid:${oOnGrid}, xPositionOnGrid:${xOnGrid}`
    );
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
    freeGridBoxes[i] = i; // here can be every truthy value
  }
  while (xOnGrid.includes(1)) {
    xOnGrid.pop(); // delete last element from array and change array length
  }
  while (oOnGrid.includes(1)) {
    oOnGrid.pop();
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
  someoneWon = false;
  console.log(freeGridBoxes);
});
