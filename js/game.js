
window.onload = function() {

    //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
    //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
    //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

    var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'space-squirrel-saga', { preload: preload, create: create, update: update, render: render });

    function preload () {

      // Load Player
      game.load.image('player', 'assets/img/space_squirrel.gif');

      // Load Asteroid

      // Load Oxygen Tank

      // Load Fuel Tank

      /* TODO: any new objects for the game, add the comment like above "//Load object"
      */

    }
    var sprite;
    var cursors;
    var playerRotVel = 200;
    var friction = .93;
    function create () {
      //  This will run in Canvas mode, so let's gain a little speed and display
      game.renderer.clearBeforeRender = true;
      game.renderer.roundPixels = true;

      game.physics.startSystem(Phaser.Physics.ARCADE);
      cursors = game.input.keyboard.createCursorKeys();

      // Create player
      createPlayer();

      // Create Oxygen Tank

      // Create Asteroid

      // Create Fuel Tank

    }

    function update() {
      /* TODO Add function calls in here */
      updatePlayer();

  }
  function createPlayer () {
    //  Our player ship
    sprite = game.add.sprite(300, 300, 'player');
    sprite.anchor.set(0.5);
    sprite.scale.setTo(2, 2);

    game.physics.enable(sprite, Phaser.Physics.ARCADE);

    sprite.body.drag.set(50);
    sprite.body.maxVelocity.set(200);
  }
  function updatePlayer() {

    if (cursors.left.isDown && cursors.right.isDown)
     {
           game.physics.arcade.accelerationFromRotation(sprite.rotation - 90, 200, sprite.body.acceleration);
           sprite.body.angularVelocity = 0;
           sprite.animations.play('forward');
     }
    else if (cursors.left.isDown && cursors.right.isUp)
    {
          game.physics.arcade.accelerationFromRotation(sprite.rotation, 200, sprite.body.acceleration);
          sprite.body.angularVelocity = playerRotVel;
          sprite.animations.play('left');
    }
    else if (cursors.right.isDown && cursors.left.isUp)
    {
          game.physics.arcade.accelerationFromRotation(sprite.rotation, 200, sprite.body.acceleration);
          sprite.body.angularVelocity = -playerRotVel;
          sprite.animations.play('right');
    }
    else
    {
        sprite.body.angularVelocity = 0;
        sprite.body.acceleration.set(0);
        sprite.frame = 0;
    }
    screenWrap(sprite);
  }
  function screenWrap (sprite) {

    if (sprite.x < 0)
    {
        sprite.x = game.width;
    }
    else if (sprite.x > game.width)
    {
        sprite.x = 0;
    }

    if (sprite.y < 0)
    {
        sprite.y = game.height;
    }
    else if (sprite.y > game.height)
    {
        sprite.y = 0;
    }
  }


  function render() {

  }
};
