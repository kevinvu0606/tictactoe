//add click event to all relevant boxes and to the restart button
//declare variables x , board status, is the game active and a display to show the currentgamestatus + winning conditions

const boxButton = document.querySelectorAll('.box')
for (let i=0; i < boxButton.length; i++){
  boxButton[i].addEventListener("click", playerClick)
}
document.querySelector('.restart').addEventListener('click', restartGame);
let currentPlayer = "X"
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
  boardStatus[clickedBoxIndex] = currentPlayer;
  clickedBox.innerHTML = currentPlayer;

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
