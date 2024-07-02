// the input box will determine who's chance it is to play
// When each player take their turn to play and click the button 
// Their value will be appended to an array
// Wich i will use detrime the winner by using switch statement


// Constant Variables
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



// 
let gameBoard = [];
// Will be replaced by the values of x and o when button is clicked and put together in the game board
let firstRow = [0,1,2];
let secondRow = [0,1,2];
let thirdRow = [0,1,2];




// Handles the click event for the first row
function boardOne(){
    value = player.value;
    if(value === 'x'){
        buttonOne.textContent = "X";
        player.value = "o"
        firstRow.splice(0,1, "X")
    }
    else if(value === 'o'){
        buttonOne.textContent = "O";
        player.value = "x"
        firstRow.splice(0,1, "O")
    }
    buttonOne.onclick = null;
    getBoard();
    return buttonOne.textContent;

};
function boardTwo(){
    value = player.value;
    if(value === 'x'){
        buttonTwo.textContent = "X";
        player.value = "o"
        firstRow.splice(1,1, "X")
    }
    else if(value === 'o'){
        buttonTwo.textContent = "O";
        player.value = "x"
        firstRow.splice(1,1, "O")
    }
    buttonTwo.onclick = null;
    getBoard();
    return buttonTwo.textContent;
};
function boardThree(){
    value = player.value;
    if(value === 'x'){
        buttonThree.textContent = "X";
        player.value = "o"
        firstRow.splice(2,1, "X")
    }
    else if(value === 'o'){
        buttonThree.textContent = "O";
        player.value = "x"
        firstRow.splice(2,1, "O")
        buttonThree.onclick = null;
    }
    buttonThree.onclick = null;
    getBoard();
    return buttonThree.textContent;
};

// Handles click event for the second row
function boardFour(){
    value = player.value;
    if(value === 'x'){
        buttonFour.textContent = "X";
        player.value = "o"
        secondRow.splice(0,1, "X")
    }
    else if(value === 'o'){
        buttonFour.textContent = "O";
        player.value = "x"
        secondRow.splice(0,1, "O")
    }
    buttonFour.onclick = null;
    getBoard();
    return buttonFour.textContent;
};
function boardFive(){
    value = player.value;
    if(value === 'x'){
        buttonFive.textContent = "X";
        player.value = "o"
        secondRow.splice(1,1, "X")
    }
    else if(value === 'o'){
        buttonFive.textContent = "O";
        player.value = "x"
        secondRow.splice(1,1, "O")
    }
    buttonFive.onclick = null;
    getBoard();
    return buttonFive.textContent;
};
function boardSix(){
    value = player.value;
    if(value === 'x'){
        buttonSix.textContent = "X";
        player.value = "o"
        secondRow.splice(2,1, "X")
    }
    else if(value === 'o'){
        buttonSix.textContent = "O";
        player.value = "x"
        secondRow.splice(2,1, "O")
    }
    buttonSix.onclick = null;
    getBoard();
    return buttonSix.textContent;
};

// Handles click Event for the third row
function boardSeven(){
    value = player.value;
    if(value === 'x'){
        buttonSeven.textContent = "X";
        player.value = "o"
        thirdRow.splice(0,1, "X")
    }
    else if(value === 'o'){
        buttonSeven.textContent = "O";
        player.value = "x"
        thirdRow.splice(0,1, "O")
    }
    buttonSeven.onclick = null;
    getBoard();
    return buttonSeven.textContent;
};
function boardAight(){
    value = player.value;
    if(value === 'x'){
        buttonAight.textContent = "X";
        player.value = "o"
        thirdRow.splice(1,1, "X")
    }
    else if(value === 'o'){
        buttonAight.textContent = "O";
        player.value = "x"
        thirdRow.splice(1,1, "O")
    }
    buttonAight.onclick = null;
    getBoard();
    return buttonAight.textContent;
};
function boardNine(){
    value = player.value;
    if(value === 'x'){
        buttonNine.textContent = "X";
        player.value = "o"
        thirdRow.splice(2,1, "X")
    }
    else if(value === 'o'){
        buttonNine.textContent = "O";
        player.value = "x"
        thirdRow.splice(2,1, "O")
    }
    buttonNine.onclick = null;
    getBoard();
    return buttonNine.textContent;
};

// Creates the board
function getBoard(){
    firstRow= [buttonOne.textContent, buttonTwo.textContent, buttonThree.textContent];
    secondRow = [buttonFour.textContent, buttonFive.textContent, buttonSix.textContent];
    thirdRow = [buttonSeven.textContent, buttonAight.textContent, buttonNine.textContent];

    
    gameBoard = [firstRow, secondRow, thirdRow];
    
    console.log(gameBoard)

    checkWinner(gameBoard)
};


// Checks wich player won the game
function checkWinner(winner){
    // calls the board so we can check the winner

    // Checks the winner for X - axis
    if(winner[0][0] === "X" && winner[0][1] === "X" && winner[0][2] === "X"){  // Checks if X won in the first row
        alert("Player X wins!!!")
    }
    else if(winner[0][0] === "O" && winner[0][1] === "O" && winner[0][2] === "O"){ // Checks if O won in the first row
        alert("Player O wins!!!")
    }
    else if(winner[1][0] === "X" && winner[1][1] === "X" && winner[1][2] === "X"){ // Checks if X won in the Second row
        alert("Player X wins!!!")
    }
    else if(winner[1][0] === "O" && winner[1][1] === "O" && winner[1][2] === "O"){ // Checks if O won in the Second row
        alert("Player O wins!!!")
    }
    else if(winner[2][0] === "X" && winner[2][1] === "X" && winner[2][2] === "X"){ // Checks if X won in the Third row
        alert("Player X wins!!!")
    }
    else if(winner[2][0] === "O" && winner[2][1] === "O" && winner[2][2] === "O"){ // Checks if O won in the Third row
        alert("Player O wins!!!")
    }

    // Checks the winner for the Y - axis
    else if(winner[0][0] === "X" && winner[1][0] === "X" && winner[2][0] === "X"){ // Checks if X won in the first row
        alert("Player X wins!!!")
    }
    else if(winner[0][0] === "O" && winner[1][0] === "O" && winner[2][0] === "O"){ // Checks if O won in the first row
        alert("Player O wins!!!")
    }
    else if(winner[0][1] === "X" && winner[1][1] === "X" && winner[2][1] === "X"){ // Checks if X won in the Second row
        alert("Player X wins!!!")
    }
    else if(winner[0][1] === "O" && winner[1][1] === "O" && winner[2][1] === "O"){ // Checks if O won in the Second row
        alert("Player O wins!!!")
    }
    else if(winner[0][2] === "X" && winner[1][2] === "X" && winner[2][2] === "X"){ // Checks if X won in the Third row
        alert("Player X wins!!!")
    }
    else if(winner[0][2] === "O" && winner[1][2] === "O" && winner[2][2] === "O"){ // Checks if O won in the Third row
        alert("Player O wins!!!")
    }

    // Checks the winner for Cross Axis
    else if(winner[0][0] === "X" && winner[1][1] === "X" && winner[2][2] === "X"){ // Checks if X won in the left cross axis
        alert("Player X wins!!!")
    }
    else if(winner[0][0] === "O" && winner[1][1] === "O" && winner[2][2] === "O"){ // Checks if O won in the left cross axis
        alert("Player O wins!!!")
    }
    else if(winner[0][2] === "X" && winner[1][1] === "X" && winner[2][0] === "X"){ // Checks if X won in the right cross axis
        alert("Player X wins!!!")
    }
    else if(winner[0][2] === "O" && winner[1][1] === "O" && winner[2][0] === "O"){ // Checks if O won in the right cross axis
        alert("Player O wins!!!")
    }

    // checks if its a TIE!!
    else{
        alert('Its a tie')
    }
}

function resetGame(){

}    