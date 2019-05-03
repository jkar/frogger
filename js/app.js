// Enemies (class) our player must avoid
var Enemy = function() {
    

    // Variables for each enemy
    this.sprite = 'images/enemy-bug.png';
    this.x = 1;
    this.y;
    this.speed = Math.random()+1;
};

// Update the enemy's position, 
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    
    this.x = this.x  + 2 * this.speed ;

    if (this.x > 505) {
        this.x = 0;
        this.speed = Math.random()+1;
    }

};

// Draws the enemy on the screen
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//the player (class) of the game 
var Player = function () {

//Variables for the player
    this.sprite = 'images/char-boy.png';
    this.x = 201;
    this.y = 400;
    this.score = 0;
};

Player.prototype.update = function (dt) {

};

//draws the player on the screen
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//handles user's  input during the game
Player.prototype.handleInput = function (inp) {

     switch (inp) {
    case "up":
    if (this.y>-15) {
        this.y = this.y - 83;
    } else {
        this.y = 400;
        this.x = 201;
        this.score++;
    }
    break;
  case "down":
    if (this.y<400) {
        this.y = this.y + 83;
    }
    break;
  case "left":
    if (this.x>1) {
        this.x = this.x - 100;
    }
    break;
  case "right":
    if (this.x<401) {
        this.x = this.x + 100;
    }
    break;
    }

};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

//the three enemies (objects) of the game in an array
var allEnemies = [ new Enemy(), new Enemy(), new Enemy()];
//the player (object) of the game
var player = new Player();

//the position of the enemies in the y-axis is constant so it is declared after initiating them
for (var i = 0; i < allEnemies.length; i++) {
    allEnemies[i].y = (65 + 5*i)*(i+1);
}


// This listens for key presses and sends the keys to Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
