var mainState = {
preload: function() {
  game.load.image('player', '../assets/player.png');
  game.load.image('wall', '../assets/wall.png');
  game.load.image('coin', '../assets/coin.png');
  game.load.image('enemy', '../assets/enemy.png');
  game.load.image('botleft', '../assets/tile1BL.png');
  game.load.image('botright', '../assets/tile1BR.png');
  game.load.image('mid', '../assets/tile1M.png');
  game.load.image('topleft', '../assets/tile1TL.png');
  game.load.image('topright', '../assets/tile1TR.png');
  game.load.image('botmid', '../assets/tile1BM.png');
  game.load.image('midleft', '../assets/tile1ML.png');
  game.load.image('midright', '../assets/tile1MR.png');
  game.load.image('topmid', '../assets/tile1TM.png');
  // game.load.atlas('atlas', '../assets/sprites/terrain.png', '../assets/sprites/terrain.json',
  // Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
  game.load.image('terrain', '../assets/sprites/terraintile.png');
  game.load.image('terrainwall', '../assets/sprites/terrainwall.png');
},

create: function() {
  // Set the background color to blue
game.stage.backgroundColor = '#3598db';

// Start the Arcade physics system (for movements and collisions)
game.physics.startSystem(Phaser.Physics.ARCADE);

// Add the physics engine to all game objects
game.world.enableBody = true;

// Variable to store the arrow key pressed
this.cursor = game.input.keyboard.createCursorKeys();

// Create the player in the middle of the game
this.player = game.add.sprite(100, 100, 'player');
this.player.health = 100;



// Add gravity to make it fall
// this.player.body.gravity.y = 600;



// Create 3 groups that will contain our objects
this.walls = game.add.group();
this.coins = game.add.group();
this.enemies = game.add.group();

// Design the level. x = wall, o = coin, ! = lava.
var level = [
  'txxxxxxxxxxxxxxxxxxp',
  'xxxxxxxxxxxxxxxxxxxx',
  'xxxxxxxxxxxxxxxxxxxx',
  'xxxxxxxxxxxxxxxxxxxx',
  '!                  x',
  '!     o       x    x',
  'bxxxxxxxxxxxxxxxxxxm',
];

for (var i = 0; i < level.length; i++) {
    for (var j = 0; j < level[i].length; j++) {

        // Create a wall and add it to the 'walls' group
        if (level[i][j] == 'x') {
            var wall = game.add.sprite(32*j, 32*i, 'terrain');
            this.walls.add(wall);
        }

        else if (level[i][j] == 't') {
            var wall = game.add.sprite(50*j, 50*i, 'topleft');
            this.walls.add(wall);
            wall.body.immovable = true;
        }
        else if (level[i][j] == 'p') {
            var wall = game.add.sprite(50*j, 50*i, 'topright');
            this.walls.add(wall);
            wall.body.immovable = true;
        }

        else if (level[i][j] == 'm') {
            var wall = game.add.sprite(50*j, 50*i, 'botright');
            this.walls.add(wall);
            wall.body.immovable = true;
        }

        else if (level[i][j] == 'b') {
            var wall = game.add.sprite(50*j, 50*i, 'botleft');
            this.walls.add(wall);
            wall.body.immovable = true;
        }

        else if (level[i][j] == 't') {
            var wall = game.add.sprite(50*j, 50*i, 'botleft');
            this.walls.add(wall);
            wall.body.immovable = true;
        }



        // Create a coin and add it to the 'coins' group
        else if (level[i][j] == 'o') {
            var coin = game.add.sprite(50*j, 50*i, 'coin');
            this.coins.add(coin);
        }

        // Create a enemy and add it to the 'enemies' group
        else if (level[i][j] == '!') {
            var enemy = game.add.sprite(50*j, 50*i, 'enemy');
            this.enemies.add(enemy);
        }
    }
};
},

update: function() {
  // Move the player when an arrow key is pressed
  this.player.body.velocity.x = 0;
  this.player.body.velocity.y = 0;
  if (this.cursor.left.isDown)
      this.player.body.velocity.x = -200;
  else if (this.cursor.right.isDown)
      this.player.body.velocity.x = 200;

  if (this.cursor.up.isDown)
      this.player.body.velocity.y = -200;
  else if (this.cursor.down.isDown)
      this.player.body.velocity.y = 200;

  // Make the player jump if he is touching the ground

    // Make the player and the walls collide
  game.physics.arcade.collide(this.player, this.walls);

  // Call the 'takeCoin' function when the player takes a coin
  game.physics.arcade.overlap(this.player, this.coins, this.takeCoin, null, this);

  // Call the 'restart' function when the player touches the enemy
  game.physics.arcade.overlap(this.player, this.enemies, this.restart, null, this);


},

// Function to kill a coin
takeCoin: function(player, coin) {
    coin.kill();
},

// Function to restart the game
restart: function() {
    game.state.start('main');
}


}

var game = new Phaser.Game(1000, 600);

// Add the 'mainState' and call it 'main'
game.state.add('main', mainState);

// Start the state to actually start the game
game.state.start('main');
