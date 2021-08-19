# Tic Tac Toe Game:
Basic Tic Tac Toe game using DOM manipulation in JS

## ⚡ Try it out
https://kevinvu0606.github.io/tictactoe/


## How it works
1. Game made using HTML, CSS and Javascript
2. Javascript uses DOM manipulation methods to allow the player to be both "X" and "O"
3.  Everytime a player click, a funtion is performed to first check if the box is already filled. If it is, then the function breaks otherwise this function continues.
4. the function then continues to add the X/O to an array and also use a .innerHTML method to add X to the board. To ensure the correct box matches the correct array position, the div boxes in the HTML are given a 0-8. data-box-number which is then parsed so we receive just the number of the box. After a click, the player will aternate betwee X and O
5. After every click/turn the array is checked in a for loop against another array containing all the possible win options. If any are matching the for loop ends and a winner is declared via a HTML DOM method
6.  Counters were also added to keep track of the number of wins per X/O and draws. everytime a winner is delcared we track what the assignment of the array is and if it is an X or an O.
7.  Draw conditions are also added where if there is no blanks left in the board we declare the board a win. This is placed after the check for win conditions such that if no win conditions are met then the draw condition is triggered.

# Bonus:
1. in V2 , I added a computer player. This is done through picking a random number betwen 0-8 and then add an O while the player click will only be an X and not alternate. 
2. Also added a check before the computer choice to not allow it to override or replicate choices
3. Also added a check result to occur both after the player clicks and after the computer picks. This will check if the player wins or the computer wins. 
3. Added in a gamestate to prevent the counter from doubling up. 

# Challenges
- The biggest challenge for this project was determing an easy method to compare which of the square's were clicked and then matching to all possible win conditions to see if the player/user won

## 📬 Contact me
- [LinkedIn](https://www.linkedin.com/in/kevin-vu-06/)
- [E-mail](mailto:kevin.vu06@gmail.com)