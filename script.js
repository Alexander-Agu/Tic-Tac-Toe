// the input box will determine who's chance it is to play
// When each player take their turn to play and click the button 
// Their value will be appended to an array
// Wich i will use detrime the winner by using switch statement

const player = document.getElementById("player");
const buttonOne = document.getElementById("btn-1");
const buttonTwo = document.getElementById("btn-2");
const buttonThree = document.getElementById("btn-3");
const buttonFour = document.getElementById("btn-4");
const buttonFive = document.getElementById("btn-5");
const buttonSix = document.getElementById("btn-6");
const buttonSeven = document.getElementById("btn-7");
const buttonAight = document.getElementById("btn-8");
const buttonNine = document.getElementById("btn-9");

let gameBoard = []
let firstRow = [1, 2 ,3];
let seconRow = [];
let thirdRow = [];
let value = player.value;


buttonOne.onclick = ()=>{
    if(value.toUpperCase() === "X"){
        firstRow.splice(0, 1, "X")
        value = "O"
        buttonOne.textContent = "X";
    }
    else if(value.toUpperCase() === "O"){
        firstRow.splice(0, 1, input)
        player.value = "X"
        buttonOne.textContent = "X";
    }
};

console.log(value)