var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function Player(x, y) {
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.velX = 0;
    this.velY = 0;
    this.avatar = document.getElementById("player");
}

Player.prototype.update = function() {
    if (this.x > 590) {
        this.x = -20;
    }
    if (this.y > 590) {
        this.y = -20;
    }
    if (this.x < -20) {
        this.x = 590;
    }
    if (this.y < -20) {
        this.y = 590;
    }

    this.x += this.velX;
    this.y += this.velY;
}

Player.prototype.render = function() {
    ctx.strokeStyle = "#000";
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(this.avatar, this.x, this.y, this.width, this.height);
}

var player1 = new Player(50, 50);






function Enemy(x, y) {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.velX = -2 + Math.random() * 4;
    this.velY = -2 + Math.random() * 4;
    this.avatar = document.getElementById("trump");
    this.ticks = 0;
}

Enemy.prototype.update = function() {
    this.ticks++;
    var self = this;
    if (this.x > 590) {
        this.x = -20;
    }
    if (this.y > 590) {
        this.y = -20;
    }
    if (this.x < -20) {
        this.x = 590;
    }
    if (this.y < -20) {
        this.y = 590;
    }

    if (this.ticks % 80 === 0) {
        setTimeout(function() {
            self.velX = -2 + Math.random() * 4;
            self.velY = -2 + Math.random() * 4;
        }, (Math.random() * 2000) + 1000);
    }

    this.x += this.velX;
    this.y += this.velY;
};

Enemy.prototype.render = function() {
    ctx.strokeStyle = "red";
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(this.avatar, this.x, this.y, this.width, this.height);
}

var enemy1 = new Enemy(100 + Math.random() * 400, 100 + Math.random() * 400);
var enemy2 = new Enemy(100 + Math.random() * 400, 100 + Math.random() * 400);
var enemy3 = new Enemy(100 + Math.random() * 400, 100 + Math.random() * 400);





function Taco(x, y) {
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 60;
    this.velX = -1 + Math.random() * 2;
    this.velY = -1 + Math.random() * 2;
    this.avatar = document.getElementById("taco");
    this.ticks = 0;
}

Taco.prototype.update = function() {
    this.ticks++;
    var self = this;
    if (this.x > 590) {
        this.x = -20;
    }
    if (this.y > 590) {
        this.y = -20;
    }
    if (this.x < -20) {
        this.x = 590;
    }
    if (this.y < -20) {
        this.y = 590;
    }

    if (this.ticks % 80 === 0) {
        setTimeout(function() {
            self.velX = -1 + Math.random() * 2;
            self.velY = -1 + Math.random() * 2;
        }, (Math.random() * 2000) + 1000);
    }

    this.x += this.velX;
    this.y += this.velY;
};

Taco.prototype.render = function() {
    ctx.drawImage(this.avatar, this.x, this.y, this.width, this.height);
}

var taco1 = new Taco(100 + Math.random() * 400, 100 + Math.random() * 400);
var taco2 = new Taco(100 + Math.random() * 400, 100 + Math.random() * 400);
taco2.width = 80;
taco2.height = 80;







function gameLoop() {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, 600, 600);

    player1.update();
    player1.render();

    enemy1.update();
    enemy1.render();
    enemy2.update();
    enemy2.render();
    enemy3.update();
    enemy3.render();

    taco1.render();
    taco1.update();
    taco2.render();
    taco2.update();

    window.requestAnimationFrame(gameLoop);
}

gameLoop();







document.addEventListener("keydown", function(e) {
    if (e.keyCode === 39) player1.velX = 5;
    if (e.keyCode === 37) player1.velX = -5;
    if (e.keyCode === 38) player1.velY = -5;
    if (e.keyCode === 40) player1.velY = 5;
});
document.addEventListener("keyup", function(e) {
    if (e.keyCode === 39) player1.velX = 0;
    if (e.keyCode === 37) player1.velX = 0;
    if (e.keyCode === 38) player1.velY = 0;
    if (e.keyCode === 40) player1.velY = 0;
});



var m = 0;
var s = 0;
function startTime() {
    s += 1;
    if(s >= 60) {
        m += 1;
        s = 0;
    }

    document.getElementById('timer').innerHTML = "minutes: " + m + "<br>seconds: " + s;
    t = setTimeout(function () {
        startTime()
    }, 1000);
}
startTime();
