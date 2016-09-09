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

function pickTile() {
  // How many tiles can be played: 9
  var message = document.getElementById('message');
  var alert = document.getElementById('alerts');

  if (this.innerText !== "") {
    alert.innerText = "That\'s an illegal move. Please select an empty tile.";
    return false;
  }

  var value = this.dataset.value;
  squares[value] = currentTurn;
  // console.log(squares);

  if (currentTurn === "X") {
    this.innerText = 'X';
    currentTurn = "O";
  } else {
    this.innerText = "O";
    currentTurn = "X";
  }

  message.innerText = 'It\'s ' + currentTurn + '\'s turn';
  alert.innerText = "";
  checkForWin(this);
}

// A function will be created to check for a win everytime a tile is selected.
function checkForWin() {
  // Check placement in the object.
  // Check diagonals first
  if(squares[0] !== '' && squares[0] === squares[4] && squares[4] === squares[8]){
    handleWin(squares[0]);
  } else if (squares[2] !== '' && squares[2] === squares[4] && squares[4] === squares[6]) {
    handleWin(squares[2]);
  }
  // Check rows
  else if (squares[0] !== '' && squares[0] === squares[1] && squares[1] === squares[2]) {
    handleWin(squares[0]);
  } else if (squares[3] !== '' && squares[3] === squares[4] && squares[4] === squares[5]) {
    handleWin(squares[3]);
  } else if (squares[6] !== '' && squares[6] === squares[7] && squares[7] === squares[8]) {
    handleWin(squares[6]);
  }
  // Check columns now
  else if (squares[0] !== '' && squares[0] === squares[3] && squares[3] === squares[6]) {
    handleWin(squares[0]);
  } else if (squares[1] !== '' && squares[1] === squares[4] && squares[4] === squares[7]) {
    handleWin(squares[1]);
  } else if (squares[2] !== '' && squares[2] === squares[5] && squares[5] === squares[8]) {
    handleWin(squares[2]);
  }

}

function handleWin(winner) {
  alert(winner + ' Wins!!!');
  // Run newGame function to clear the board.
  newGame();
}
// Action items:
  // Does not show the winning tile actually being selected when the user clicks a winning spot.
  // How can I visually show the user they won.
  // How can I store the user names of player one and player two.
  // How can I tally the wins for each user.
