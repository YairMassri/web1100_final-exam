function reset() {
    hillaryPosition = 0;
    trumpPosition = 0;

    hillary.style.top = '160px';
    hillary.style.left = '10px';
    hillary.classList.remove('winner');

    trump.style.top = '250px';
    trump.style.left = '10px';
    trump.classList.remove('winner');
}

function gameOver(winner) {
    var circlePosition = winnerCircle.getBoundingClientRect();
    winner.style.top = circlePosition.top + 'px';
    winner.style.left = circlePosition.left + 'px';
    winner.classList.add('winner');

    setTimeout(function() {
        alert(winner.id + " wins!");
        reset();
    }, 401);
}
