//add click event to all relevant boxes and to the restart button
const boxButton = document.querySelectorAll('.box')
for (let i=0; i < boxButton.length; i++){
  boxButton[i].addEventListener("click", playerClick)
}
document.querySelector('.restart').addEventListener('click', restartGame);

//what are our winning conditions as an array
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

//declare variables x , board status, is the game active and a display to show the currentgamestatus
let currentPlayer = "X"
let boardStatus = ["", "", "", "", "", "", "", "", ""];

//1- function for player clicking
//Need to make sure that the box that has been clicked is blank 
// Also need to create two variables to be passed into the updateBoard function and the checkResult function.
function playerClick(clickedBoxEvent) {
  let clickedBox = clickedBoxEvent.target;
  let clickedBoxIndex = parseInt(clickedBox.getAttribute('data-box-number'));
  if (boardStatus[clickedBoxIndex] !== "" ) {
      return;
  }
  //now we send the clickedBox and ClickedBoxIndex to our functions to update the board + check if anyone has won
  if (currentPlayer === "X"){
    clickedBox.style.color = 'red';
  } else if (currentPlayer === "O"){
    clickedBox.style.color = 'blue';
  }
  updateBoard(clickedBox, clickedBoxIndex);
  checkResult();
 
}
//2 -function to update our array and what is displayed in our html file
//we update the board with an x/o and the blank array- boardStatus - with X/O

function updateBoard(clickedBox, clickedBoxIndex) {
  boardStatus[clickedBoxIndex] = currentPlayer;
  clickedBox.innerHTML = currentPlayer;
}
//3 - function to check if we won
function checkResult() {
  let roundWon = false;
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

  if (roundWon == true) {
    alert(currentPlayer + ' has Won!!!!');
    return;
  }

  changeTurn();
}

//4 - function to have player alternate clicking between "x" and "o"
function changeTurn() {
  //currentPlayer = currentPlayer === "X" ? "O" : "X";
  if (currentPlayer == 'X'){
    currentPlayer = "O" ;
  } else if (currentPlayer == "O"){
    currentPlayer = "X"
  }
}

//function to restart the game//
function restartGame() {
  currentPlayer = "X";
  boardStatus = ["", "", "", "", "", "", "", "", ""];
  document.querySelectorAll('.box').forEach(box => box.innerHTML = "");
}
