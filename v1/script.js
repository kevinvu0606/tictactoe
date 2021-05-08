//add click event to all relevant boxes and to the restart button
//declare variables x , board status, is the game active and a display to show the currentgamestatus + winning conditions

const boxButton = document.querySelectorAll('.box')
for (let i=0; i < boxButton.length; i++){
  boxButton[i].addEventListener("click", playerClick)
}
document.querySelector('.restart').addEventListener('click', restartGame);
let currentPlayer = "X"
const computerPlayer = 'O'
//board status is the status of the board but the user doesnt see this
let boardStatus = ["", "", "", "", "", "", "", "", ""];
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let roundWon = false;
//Game Counters
let gameCounterDisplay = document.querySelector('.gamesPlayed');
let gameCounter = 0 ;
gameCounterDisplay.innerText = gameCounter;

let gamesXWon = document.querySelector('.gamesXWon')
let xWinCounter = 0;
gamesXWon.innerText = xWinCounter;

let gamesOwon = document.querySelector('.gamesOWon')
let oWinCounter = 0;
gamesOwon.innerText = oWinCounter;

let gamesDrawn = document.querySelector('.gamesDraw')
let drawCounter = 0;
gamesDrawn.innerText = drawCounter;

//1- function for player clicking
//Need to make sure that the box that has been clicked is blank 
// Also need to create two variables to be passed into the updateBoard function and the checkResult function.
function playerClick(clickedBoxEvent) {
  let clickedBox = clickedBoxEvent.target;
  let clickedBoxIndex = parseInt(clickedBox.getAttribute('data-box-number'));
  //to Check if there is a blank spot so we dont re-write it
  if (boardStatus[clickedBoxIndex] !== "" ) {
      return;
  }
  //update the board HTML + the board array (originally blank)
  if (roundWon === false){
    boardStatus[clickedBoxIndex] = currentPlayer;
    clickedBox.innerHTML = currentPlayer;
  }

  //add color to our X and O
  if (currentPlayer === "X"){
    clickedBox.style.color = 'red';
  } else if (currentPlayer === "O"){
    clickedBox.style.color = 'blue';
  }

  checkResult();
  
}
//3 - function to check if we won
function checkResult() {
  if (roundWon === false){
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        //e.g for i = 0, winCondition = [0, 1, 2]
        let a = boardStatus[winCondition[0]];
        // e.g a = boardStatus[0]
        let b = boardStatus[winCondition[1]];
        //eg b = boardStatus[1]
        let c = boardStatus[winCondition[2]];
        // eg c = boardStatus[2]
        //next we check if a=b=c as if they all have 'x' they will equal.
        //first statement checks if they have any blanks which means we keep continuing
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
  }
  //Display Winning Message and also increase counter
  if (roundWon == true) {
    document.querySelector('.whichWinner').innerText = currentPlayer + ' has won!!';
    if (currentPlayer == "X"){
      xWinCounter ++;
      gamesXWon.innerText = xWinCounter;
    } else if (currentPlayer == "O"){
      oWinCounter ++;
      gamesOwon.innerText = oWinCounter;
    }
    
    return;
  }
  //Need an if condition to check if the board has been filled with no winner then we can display a draw message. gameDraw variable will be boolean and come back true or false. If the board has been filled but no winner has been determined it will be true. With true we can use another if statement to display a draw message
  let gameDraw = !boardStatus.includes("")
  if (roundWon === false) {
    if (gameDraw === true){
      drawCounter ++
      gamesDrawn.innerText = drawCounter;
      document.querySelector('.whichWinner').innerText = 'Draw! No Winner'
      roundWon = true;
    }
  }
  //This will change the player marker from X to O
  if (currentPlayer == 'X'){
    currentPlayer = "O" ;
  } else if (currentPlayer == "O"){
    currentPlayer = "X"
  };
}


//function to restart the game//
function restartGame() {
  currentPlayer = "X";
  boardStatus = ["", "", "", "", "", "", "", "", ""];
  roundWon = false;
  let restartBoxButtons = document.querySelectorAll('.box');
  for (let i = 0 ; i < restartBoxButtons.length; i ++){
    restartBoxButtons[i].innerHTML = "";
  }
  document.querySelector('.whichWinner').innerHTML = "";
  gameCounter ++
  gameCounterDisplay.innerText = gameCounter;
}
/*
//Create an ai competitor that picks a random number from 0-8 . Then use an if statement, if the box is already filled the computer wont fill that box and will pick another number. if the box is empty they will put an O in that number.

var randomIndex = Math.floor(Math.random() * 9) // random number between 0-8
var computerBox = boxButton[randomIndex]

if (boardStatus[randomIndex] !== "" ) {
    return;
}// checking to see if it has anything already filled

//update the board HTML + the board array (originally blank)
boardStatus[randomIndex] = computerPlayer;
computerBox.innerHTML = computerPlayer;
*/