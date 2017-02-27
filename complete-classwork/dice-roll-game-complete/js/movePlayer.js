function movePlayer(num) {
    var newPosition;

    if(currentPlayer === hillary) {
        hillaryPosition += num;
        newPosition = hillaryPosition;
        currentPlayer = trump;
    } else {
        trumpPosition += num;
        newPosition = trumpPosition;
        currentPlayer = hillary;
    }

    if(hillaryPosition > 10 || trumpPosition > 10) {
        gameOver(currentPlayer);
        return false;
    }

    // the first tile in the tiles array is at tiles[0], not tiles [1]
    var tilePosition = tiles[newPosition - 1].getBoundingClientRect();

    currentPlayer.style.top = tilePosition.top + 'px';
    currentPlayer.style.left = tilePosition.left + 'px';
}
