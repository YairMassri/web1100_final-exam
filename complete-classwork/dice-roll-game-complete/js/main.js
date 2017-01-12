var $dieAndNum = $('#die, #roll');
var $die = $('#die');
var $roll = $('#roll');
var $hillary = $('#player1');
var $trump = $('#player2');
var hillaryPos = 0;
var trumpPos = 0;
var tiles = {};
var $winnerCircle = $('#winner-circle');
var gameOver = false;

for(var i = 1; i <= 10; i++) {
    tiles[i] = $('#tile' + i);
}

var turn;
if(Math.random() > 0.5) {
    turn = 'player1';
} else {
    turn = 'player2';
}

$dieAndNum.click(function() {
    if(gameOver === true) return false;

    // change the die image source to the gif
    $die.attr('src', './img/Dodecahedron3.gif');
    $roll.html('?');

    // roll the die
    var num = Math.floor(Math.random() * 10 + 1);
    setTimeout(function() {
        $roll.html(num);
        movePlayer(num);
    }, 1800);
});

function movePlayer(num) {
    var $playerToMove;
    var newPosition;

    // update player position and turn
    if(turn === 'player1') {
        $playerToMove = $hillary;
        turn = 'player2';
        hillaryPos += num;
        newPosition = hillaryPos;
    }
    else {
        $playerToMove = $trump;
        turn = 'player1';
        trumpPos += num;
        newPosition = trumpPos;
    }

    // check if win
    if(trumpPos > 10 || hillaryPos > 10) {
        onGameOver($playerToMove);
        return false;
    }

    // Move player
    var tilePos = tiles[newPosition][0].getBoundingClientRect();
    $playerToMove.css({
        'top': tilePos.top,
        'left': tilePos.left
    });
}

function onGameOver($winner) {
    gameOver = true;
    var tilePos = $winnerCircle[0].getBoundingClientRect();
    $winner.css({
        'top': tilePos.top,
        'left': tilePos.left
    }).addClass('winner');
    setTimeout(function() {
        alert($winner[0].id + ' wins!');
        reset();
    }, 400);
}

function reset() {
    gameOver = 0;
    hillaryPos = 0;
    trumpPos = 0;

    $hillary.css({
        top: '160px',
        left: '10px'
    }).removeClass('winner');
    $trump.css({
        top: '250px',
        left: '10px'
    }).removeClass('winner');

    if(Math.random() > 0.5) {
        turn = 'player1';
    } else {
        turn = 'player2';
    }
}
