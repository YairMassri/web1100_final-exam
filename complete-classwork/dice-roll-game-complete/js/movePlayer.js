function movePlayer(player, position) {
    if(position > 10) {
        gameOver(player);
        return false;
    }

    var tilePosition = tiles[position - 1].getBoundingClientRect();

    player.style.top = tilePosition.top + 'px';
    player.style.left = tilePosition.left + 'px';
}
