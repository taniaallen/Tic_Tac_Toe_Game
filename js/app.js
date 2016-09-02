//  The Game of Tic Tac Toe
//  Two players will choose tiles for their letter
	// playerOne = 'X';
	// playerTwo = 'O';

// Start Over button should clear the board for players to play the game.
	// innerText in h3 tag should populate with "It is X's turn"


// The first player will always be 'X' when starting the game, playerTwo will always be 'O'

// When the first player clicks a tile:
	// the innerText of the tile should be updated with the letter of the player ('X')
	// value should be stored in a variable (document.getElementsByClassName)
	// data-value of letter should be stored
	// innerText of the h3 tag should be updated to say 'It is O's turn"

// Next click action should alternate to populate an 'O' in the tile clicked:
	//Make it so that nothing happens if an already-'clicked' square is clicked
	//Hint: check if the className includes what you are looking for

	// var playerOne will be an array that will store the class of the tile clicked by player 'X'
	// var playerTwo will be an array that will store the class of the tile clicked by player 'O'

window.onload = function() {
  // console.log('page loaded');

  // When the "New Game" button is clicked, the newGame() function is invoked.
  var newGameButton = document.querySelector('button');
  newGameButton.onclick = function() {
    newGame();
  }
}

// Global variable to track the current turn, starting with "X"
var currentTurn = "X";

// Object to track what currentTurn variable is stored on the board square.
var squares = {
  0: '',
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '',
  8: ''
}

function newGame() {
  // console.log('new game button clicked!');
  // Clear the board (squares object) of any X's and O's
  squares = {
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: ''
  }

  var message = document.getElementById('message');
  var div = document.getElementsByClassName('board-square');

  for(var i = 0; i < div.length; i++) {
    div[i].innerHTML = "";
    // console.log('cleared board!');
    div[i].setAttribute('data-value', i);
    message.innerHTML = "It\'s " + currentTurn + "\'s turn";
    div[i].addEventListener('click', pickTile);
  }
}
