function rollTheDie() {
    die.setAttribute('src', './img/Dodecahedron3.gif');
    roll.textContent = '?';

    var num = Math.floor(Math.random() * 10 + 1);

    setTimeout(function() {
        roll.textContent = num;
        movePlayer(num);
    }, 1800);
}
