// Global Variables
// create clickable content
// create button 
// create elements
var restartButton = document.getElementById('restartButton');
// squares in html
var spaces = document.getElementsByClassName('space');
var symbols = ['O', 'X'];
var turn = 0;
var notification = document.getElementById('notification');
var winnerMessage = document.getElementById('winnerMessage');
// winning combinations
var wins = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]
];

// Wait for page to load before doing anything
// start when clicked
document.onreadystatechange = function() {
	if (document.readyState == "interactive") {
		restartButton.onclick = startGame;
		startGame();
	}
};

function startGame() {
	// reset turn counter
	turn = 0;

	// remove previous winner notification and make sure div is hidden
	winnerMessage.innerHTML = '';
	notification.style.display = 'none';

	// Clear board and add click events on squares
	for (var i = 0; i < spaces.length; i++) {
		spaces[i].innerHTML = ''; // Wipes out board when 'New Game' is clicked
		spaces[i].addEventListener("click", takeSpace);
	}
}

function takeSpace() {
    console.log('takeSpace')
    // advance turn after each click
    turn++;
    // alternate turns
	var currentPlayer = symbols[turn % 2];
	this.innerHTML = currentPlayer; // The modulus swaps between 0 and 1 of the symbols array
	this.removeEventListener("click", takeSpace); // `this` is always the object that you're acting on right now
    // console.log(this); 
    
    // counter to check for win by determining length
	for (var i = 0; i < wins.length; i++) {
		if (checkForWin(wins[i])) {
			
			// No more clicking on the board
			for (var j = 0; j < spaces.length; j++) {
				spaces[j].removeEventListener("click", takeSpace);
			}

			// display player winner
			notification.style.display = 'block';
			winnerMessage.innerHTML = currentPlayer + " won!";

		} else {
            
            // determine tie game when board is full
			if (turn == 9) {
				if (notification.style.display != 'block') {
					notification.style.display = 'block';
					winnerMessage.innerHTML = "Tie game";
				}
			}
		}
	}
}

function checkForWin(winArray) {
    // check which spaces have been clicked
    // check if true
	return spaces[winArray[0]].innerHTML !== '' && 
		spaces[winArray[0]].innerHTML === spaces[winArray[1]].innerHTML && 
		spaces[winArray[0]].innerHTML === spaces[winArray[2]].innerHTML;
}