
window.onload = function() {

    //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
    //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
    //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });

    function preload () {
        // Load Player
        game.load.image('player', 'assets/img/space_squirrel.gif');

        // Load Asteroid

        // Load Oxygen Tank

        // Load Fuel Tank

        /* TODO: any new objects for the game, add the comment like above "//Load object"
        */

    }

    function create () {
      // Create player
      createPlayer();
      // Player created

      // Create Oxygen Tank

      // Oxygen tank created

      // Create Asteroid

      // Asteroid created

      // Create Fuel Tank

      // Fuel Tank created
    }

    function update() {
      /* TODO Add function calls in here */
      updatePlayer();

  }
  function createPlayer () {
    var player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
    player.anchor.setTo(0.5, 0.5);
    player.scale.setTo(2, 2);
  }
  function updatePlayer() {

  }
};
