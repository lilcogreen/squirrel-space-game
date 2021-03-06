/*
Object module
Dependency: null
*/
define(['lib/phaser.min', 'module/Player'],function(Phaser, Player){

    //Private variables
    var _game = null,
        _sprite = null,
        _objectRotVel = 200;
    //Public functions
    return{
        init: function(game) {
            _game = game;
          },
        preload: function() {
              _game.load.spritesheet('object', 'assets/img/Eevee.png', 250, 250);
          },
          create: function(game) {
            _sprite = _game.add.sprite(_game.world.width/2, _game.world.height/2, 'object');
            _sprite.anchor.set(0.5);
            _sprite.scale.setTo(.25,.25);

            _game.physics.enable(_sprite, _game.physics.ARCADE);

            //_sprite.body.drag.set(50);
            _sprite.body.maxVelocity.set(200);
            _game.renderer.clearBeforeRender = true;
            _game.renderer.roundPixels = true;

            _game.physics.startSystem(_game.physics.ARCADE);
        },
        update: function() {
          _game.physics.arcade.accelerationFromRotation(_sprite.rotation, 200, _sprite.body.acceleration);
          _sprite.body.angularVelocity = -_objectRotVel;
        }
    }
});
