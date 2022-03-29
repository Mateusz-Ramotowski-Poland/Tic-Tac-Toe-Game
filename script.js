"use strict";
const gridBoxes = document.getElementsByClassName("grid-box");
const gridArea = document.getElementsByClassName("grid-area")[0];
const buttonsChangeGridSize = document.getElementsByClassName(
  "buttons-change-grid-size"
);
const buttonPLayAgain = document.getElementsByClassName("button-play-again")[0];
const buttonsChangePlayMode = document.getElementsByClassName(
  "buttons-change-play-mode"
);
const informationForPlayerArea = document.getElementsByClassName(
  "information-for-player"
)[0];
const freeGridBoxes = [];
const xOnGrid = [];
const oOnGrid = [];
let someoneWon = false;
let whichGrid;
let playMode;
let whoPlay = "X";

function checkIfYouWon(whoWonString, XOrOString) {
  XOrOString = XOrOString === "O" ? oOnGrid : xOnGrid;
  let didYOuWOn;
  if (whichGrid === "3x3") {
    //whichGrid gets value inside buttonsChangeGridSizeFunctionality function
    didYOuWOn =
      (XOrOString[0] && XOrOString[1] && XOrOString[2]) ||
      (XOrOString[3] && XOrOString[4] && XOrOString[5]) ||
      (XOrOString[6] && XOrOString[7] && XOrOString[8]) ||
      (XOrOString[0] && XOrOString[3] && XOrOString[6]) ||
      (XOrOString[1] && XOrOString[4] && XOrOString[7]) ||
      (XOrOString[2] && XOrOString[5] && XOrOString[8]) ||
      (XOrOString[0] && XOrOString[4] && XOrOString[8]) ||
      (XOrOString[2] && XOrOString[4] && XOrOString[6]) ||
      null;
  }
  if (whichGrid === "5x5") {
    didYOuWOn =
      (XOrOString[0] && XOrOString[1] && XOrOString[2] && XOrOString[3]) ||
      (XOrOString[1] && XOrOString[2] && XOrOString[3] && XOrOString[4]) ||
      (XOrOString[5] && XOrOString[6] && XOrOString[7] && XOrOString[8]) ||
      (XOrOString[6] && XOrOString[7] && XOrOString[8] && XOrOString[9]) ||
      (XOrOString[10] && XOrOString[11] && XOrOString[12] && XOrOString[13]) ||
      (XOrOString[11] && XOrOString[12] && XOrOString[13] && XOrOString[14]) ||
      (XOrOString[15] && XOrOString[16] && XOrOString[17] && XOrOString[18]) ||
      (XOrOString[16] && XOrOString[17] && XOrOString[18] && XOrOString[19]) ||
      (XOrOString[20] && XOrOString[21] && XOrOString[22] && XOrOString[23]) ||
      (XOrOString[21] && XOrOString[22] && XOrOString[23] && XOrOString[24]) || // end of horizontally
      (XOrOString[0] && XOrOString[5] && XOrOString[10] && XOrOString[15]) ||
      (XOrOString[5] && XOrOString[10] && XOrOString[15] && XOrOString[20]) ||
      (XOrOString[1] && XOrOString[6] && XOrOString[11] && XOrOString[16]) ||
      (XOrOString[6] && XOrOString[11] && XOrOString[16] && XOrOString[21]) ||
      (XOrOString[2] && XOrOString[7] && XOrOString[12] && XOrOString[17]) ||
      (XOrOString[7] && XOrOString[12] && XOrOString[17] && XOrOString[22]) ||
      (XOrOString[3] && XOrOString[8] && XOrOString[13] && XOrOString[18]) ||
      (XOrOString[8] && XOrOString[13] && XOrOString[18] && XOrOString[23]) ||
      (XOrOString[4] && XOrOString[9] && XOrOString[14] && XOrOString[19]) ||
      (XOrOString[9] && XOrOString[14] && XOrOString[19] && XOrOString[24]) || // end of vertically
      (XOrOString[5] && XOrOString[11] && XOrOString[17] && XOrOString[23]) ||
      (XOrOString[0] && XOrOString[6] && XOrOString[12] && XOrOString[18]) ||
      (XOrOString[6] && XOrOString[12] && XOrOString[18] && XOrOString[24]) ||
      (XOrOString[1] && XOrOString[7] && XOrOString[13] && XOrOString[19]) || //
      (XOrOString[9] && XOrOString[13] && XOrOString[17] && XOrOString[21]) ||
      (XOrOString[4] && XOrOString[8] && XOrOString[12] && XOrOString[16]) ||
      (XOrOString[8] && XOrOString[12] && XOrOString[16] && XOrOString[20]) ||
      (XOrOString[3] && XOrOString[7] && XOrOString[11] && XOrOString[15]) ||
      null;
  }
  if (didYOuWOn) {
    informationForPlayerArea.textContent = whoWonString;
    for (let i = 0; i < gridBoxes.length; i++) {
      gridBoxes[i].removeEventListener("click", gridBoxFunctionality);
    }
    someoneWon = true;
  }
}
function gridBoxFunctionality(event) {
  const self = this;
  if (playMode === "computer-player") {
    playerComputerMove(event, self);
  }
  if (playMode === "player-player") {
    playerPlayerMove(event, self);
  }
}
function playerPlayerMove(event, self) {
  let placeInGrid;
  let playerGrid = whoPlay === "X" ? xOnGrid : oOnGrid;
  event.target.innerText = whoPlay; 
  for (let i = 0; i < gridBoxes.length; i++) {
    if (self === gridBoxes[i]) {
      placeInGrid = i;
      break;
    }
  }
  playerGrid[placeInGrid] = 1; // here can be any truthy value 
  checkIfYouWon(`${whoPlay} won!`, whoPlay); 
  if (!someoneWon) {
    self.removeEventListener("click", gridBoxFunctionality);
  }
  whoPlay = whoPlay === "X" ? "O" : "X";
/*   console.log(
    `playMode: ${playMode}. xOnGrid: ${xOnGrid}. oOnGrid: ${oOnGrid}`
  ); */
}

function playerComputerMove(event, self) {
  let xPlaceInGrid;
  let oPlaceInGrid;
  let counterCheckingNullInFreeGridBoxes = 0;
  event.target.innerText = "X";
  for (let i = 0; i < gridBoxes.length; i++) {
    if (self === gridBoxes[i]) {
      xPlaceInGrid = i;
      break;
    }
  }
  xOnGrid[xPlaceInGrid] = 1; // here can be any truthy value
  checkIfYouWon("X won!", "X");
  if (!someoneWon) {
    // in event listener this mean DOM element that handler is attached to
    self.removeEventListener("click", gridBoxFunctionality);
    freeGridBoxes[xPlaceInGrid] = null;
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
        oPlaceInGrid = Math.floor(Math.random() * freeGridBoxes.length);
      } while (freeGridBoxes[oPlaceInGrid] === null);
      gridBoxes[oPlaceInGrid].innerText = "O";
      oOnGrid[oPlaceInGrid] = 1; // here can be any truthy value
      checkIfYouWon("O won!", "O");
      if (!someoneWon) {
        freeGridBoxes[oPlaceInGrid] = null;
        gridBoxes[oPlaceInGrid].removeEventListener(
          "click",
          gridBoxFunctionality
        );
      }
    }
  }
}
function buttonsChangeGridSizeFunctionality(event) {
  const numberOrRowsColumns = event.currentTarget.innerText[0]; //first char from clicked button
  whichGrid = numberOrRowsColumns === "3" ? "3x3" : "5x5";
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
  informationForPlayerArea.textContent = `Place ${
    whichGrid === "3x3" ? "3" : "4"
  } in a row to win!`;
  if (this.innerText[0] === "3") {
    freeGridBoxes.length = 9;
  } else if (this.innerText[0] === "5") {
    freeGridBoxes.length = 25;
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

for (const buttonChangeGridSize of buttonsChangeGridSize) {
  buttonChangeGridSize.addEventListener(
    "click",
    buttonsChangeGridSizeFunctionality
  );
}
for (const buttonChangePlayMode of buttonsChangePlayMode) {
  buttonChangePlayMode.addEventListener("click", function () {
    playMode = buttonChangePlayMode.textContent;
  });
}
buttonPLayAgain.addEventListener("click", function () {
  for (let buttonChangeGridSize of buttonsChangeGridSize) {
    buttonChangeGridSize.hidden = false;
  }
  buttonPLayAgain.hidden = true;
  gridArea.innerHTML = "";
  informationForPlayerArea.textContent = "Choose grid to play.";
  someoneWon = false;
});
