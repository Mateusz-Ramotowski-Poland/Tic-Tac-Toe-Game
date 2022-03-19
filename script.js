"use strict";
/* If You need use pseudo code or algorithms 
Use camelCase for variable name. Think about system for variable names. 
function names: use words get, change, delete, create, add, return
from begging write clean code, do small code refactoring
use chrome debugger for finding bugs*/
//alert("It is connected");  // It works
const changeBlocksArea = document.getElementsByClassName("change")[0];
const changeBlocks3x3 = document.getElementsByTagName("button")[0];
const changeBlocks5x5 = document.getElementsByTagName("button")[1];
const changeBlocks7x7 = document.getElementsByTagName("button")[2];

changeBlocks3x3.addEventListener("click", function(){
    changeBlocksArea.innerHTML = `
    <section class="change">
    <div class="row">
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
    </div>
    <div class="row">
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
    </div>
    <div class="row">
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
    </div>
    `
});
changeBlocks5x5.addEventListener("click", function(){
    changeBlocksArea.innerHTML = `
    <section class="change">
    <div class="row">
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
    </div>
    <div class="row">
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
    </div>
    <div class="row">
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
    </div>
    <div class="row">
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
    </div>
    <div class="row">
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
    </div>
    `
})
changeBlocks7x7.addEventListener("click", function(){
    changeBlocksArea.innerHTML = `
    <section class="change">
    <div class="row">
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
    </div>
    <div class="row">
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
    </div>
    <div class="row">
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
    </div>
    <div class="row">
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
    </div>
    <div class="row">
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
    </div>
    <div class="row">
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
    </div>
    <div class="row">
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
      <div class="board-game-area"></div>
    </div> 
    </div>
    `
})

          