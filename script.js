"use strict";
/* If You need use pseudo code or algorithms 
Use camelCase for variable name. Think about system for variable names. 
function names: use words get, change, delete, create, add, return
from begging write clean code, do small code refactoring
use chrome debugger for finding bugs*/
//alert("It is connected");  // It works
const changeBlocksArea = document.getElementsByClassName("row my-2")[0];
const changeBlocksButtonMakeSmallerArea = document.getElementsByTagName("button")[0];
const changeBlocksButtonMakeBiggerrArea = document.getElementsByTagName("button")[1];


//let HTMLInsidechangeBlocksArea = changeBlocksArea.innerHTML;
//console.log(HTMLInsidechangeBlocksArea);

changeBlocksButtonMakeSmallerArea.addEventListener("click", function(){
    changeBlocksArea.innerHTML = `
    <div class="col mx-1">column</div>
          <div class="col mx-1">Column</div>
          <div class="col mx-1">Column</div>
          <div class="col mx-1">Column</div> 
    `
});
changeBlocksButtonMakeBiggerrArea.addEventListener("click", function(){
    changeBlocksArea.innerHTML = `
    <div class="col mx-1">column</div>
    <div class="col mx-1">Column</div>
    <div class="col mx-1">Column</div>
    <div class="col mx-1">Column</div>
    <div class="col mx-1">column</div>
    <div class="col mx-1">Column</div>
    <div class="col mx-1">column</div>
    <div class="col mx-1">Column</div>
    <div class="col mx-1">column</div>
    `
})

          