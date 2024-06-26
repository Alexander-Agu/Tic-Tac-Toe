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
    checkWinner();
    return firstRow;

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
    checkWinner();
    return firstRow;
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
    checkWinner();
    return firstRow;
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
    checkWinner();
    return secondRow;
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
    checkWinner();
    return secondRow;
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
    checkWinner();
    return secondRow;
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
    checkWinner();
    return thirdRow;
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
    checkWinner();
    return thirdRow;
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
    checkWinner();
    return thirdRow;
};

// Creates the board
function getBoard(){
    firstRow= [buttonOne.textContent, buttonTwo.textContent, buttonThree.textContent];
    secondRow = [buttonFour.textContent, buttonFive.textContent, buttonSix.textContent];
    thirdRow = [buttonSeven.textContent, buttonAight.textContent, buttonNine.textContent];
    
    gameBoard = [firstRow, secondRow, thirdRow];
    
    console.log(gameBoard)
};

// Checks wich player won the game
function checkWinner(){
    // calls the board so we can check the winner
    getBoard()

    // Checks the winner for X - axis
    if(gameBoard[0][0] === "X" && gameBoard[0][1] === "X" && gameBoard[0][2] === "X"){  // Checks if X won in the first row
        alert("Player X wins!!!")
    }
    else if(gameBoard[0][0] === "O" && gameBoard[0][1] === "O" && gameBoard[0][2] === "O"){ // Checks if O won in the first row
        alert("Player O wins!!!")
    }
    else if(gameBoard[1][0] === "X" && gameBoard[1][1] === "X" && gameBoard[1][2] === "X"){ // Checks if X won in the Second row
        alert("Player X wins!!!")
    }
    else if(gameBoard[1][0] === "O" && gameBoard[1][1] === "O" && gameBoard[1][2] === "O"){ // Checks if O won in the Second row
        alert("Player O wins!!!")
    }
    else if(gameBoard[2][0] === "X" && gameBoard[2][1] === "X" && gameBoard[2][2] === "X"){ // Checks if X won in the Third row
        alert("Player X wins!!!")
    }
    else if(gameBoard[2][0] === "O" && gameBoard[2][1] === "O" && gameBoard[2][2] === "O"){ // Checks if O won in the Third row
        alert("Player O wins!!!")
    }

    // Checks the winner for the Y - axis
    else if(gameBoard[0][0] === "X" && gameBoard[1][0] === "X" && gameBoard[2][0] === "X"){ // Checks if X won in the first row
        alert("Player X wins!!!")
    }
    else if(gameBoard[0][0] === "O" && gameBoard[1][0] === "O" && gameBoard[2][0] === "O"){ // Checks if O won in the first row
        alert("Player O wins!!!")
    }
    else if(gameBoard[0][1] === "X" && gameBoard[1][1] === "X" && gameBoard[2][1] === "X"){ // Checks if X won in the Second row
        alert("Player X wins!!!")
    }
    else if(gameBoard[0][1] === "O" && gameBoard[1][1] === "O" && gameBoard[2][1] === "O"){ // Checks if O won in the Second row
        alert("Player O wins!!!")
    }
    else if(gameBoard[0][2] === "X" && gameBoard[1][2] === "X" && gameBoard[2][2] === "X"){ // Checks if X won in the Third row
        alert("Player X wins!!!")
    }
    else if(gameBoard[0][2] === "O" && gameBoard[1][2] === "O" && gameBoard[2][2] === "O"){ // Checks if O won in the Third row
        alert("Player O wins!!!")
    }

    // Checks the winner for Cross Axis
    else if(gameBoard[0][0] === "X" && gameBoard[1][1] === "X" && gameBoard[2][2] === "X"){ // Checks if X won in the left cross axis
        alert("Player X wins!!!")
    }
    else if(gameBoard[0][0] === "O" && gameBoard[1][1] === "O" && gameBoard[2][2] === "O"){ // Checks if O won in the left cross axis
        alert("Player O wins!!!")
    }
    else if(gameBoard[0][2] === "X" && gameBoard[1][1] === "X" && gameBoard[2][0] === "X"){ // Checks if X won in the right cross axis
        alert("Player X wins!!!")
    }
    else if(gameBoard[0][2] === "O" && gameBoard[1][1] === "O" && gameBoard[2][0] === "O"){ // Checks if O won in the right cross axis
        alert("Player O wins!!!")
    }

    // checks if its a TIE!!
/*     else{
        alert("Its a tie")
    } */
}

function resetGame(){

}   