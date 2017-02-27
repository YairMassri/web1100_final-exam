var hillary = document.querySelector('#player1');
var trump = document.querySelector('#player2');
var die = document.querySelector('#die');
var roll = document.querySelector('#roll');
var winnerCircle = document.querySelector('#winner-circle');
var tiles = document.querySelectorAll('.tile');
var hillaryPosition = 0;
var trumpPosition = 0;
var currentPlayer = '';

// Randomly select the first player to roll
if (Math.random() > 0.5) {
    currentPlayer = hillary;
} else {
    currentPlayer = trump;
}
