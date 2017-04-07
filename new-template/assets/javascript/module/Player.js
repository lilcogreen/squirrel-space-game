/*
Player module
Dependencys: HUD.js and Level.js
*/
define(['lib/phaser.min','module/HUD','module/Level'],function(Phaser,HUD,Level) {

  //Private variables
  var _game = null,
    _sprite = null,
    _cursors = null;
  var _playerRotVel = 200;
  var _friction = .93;
  var _oxygenDepletion = -1;
  var _fuel = 100.0;

  //Private functions
  var _collectStar = function(player, star){
    // Removes the star from the screen
    star.kill();

    // Add and update the score
    HUD.addToScore(10);
    HUD.updateScoreText();
  }
  function _screenWrap (_sprite) {
    if (_sprite.x < 0)
    {
        _sprite.x = _game.width;
    }
    else if (_sprite.x > _game.width)
    {
        _sprite.x = 0;
    }

    if (_sprite.y < 0)
    {
        _sprite.y = _game.height;
    }
    else if (_sprite.y > _game.height)
    {
        _sprite.y = 0;
    }
  }

  //public functions
  return {
    init: function(game) {
        _game = game;
    },
    preload: function() {
        _game.load.spritesheet('player', 'assets/img/space-squirrel.png', 50, 50);
    },
    create: function(game) {
      _game = game;
      _sprite = _game.add.sprite(_game.world.width/2, _game.world.height/2, 'player');
      _sprite.anchor.set(0.5);
      _sprite.scale.setTo(2, 2);

      _game.physics.enable(_sprite, _game.physics.ARCADE);

      _sprite.body.drag.set(50);
      _sprite.body.maxVelocity.set(200);

      //  Player physics properties. Give the little guy a slight bounce.
      //_sprite.body.bounce.y = 0.2;
      //_sprite.body.collideWorldBounds = true;

      //  Our two animations, walking left and right.
      _sprite.animations.add('left', [1, 2], 10, true);
      _sprite.animations.add('right', [5, 6], 10, true);
      _sprite.animations.add('forward', [3, 4], 10, true);
      _game.renderer.clearBeforeRender = true;
      _game.renderer.roundPixels = true;

      _game.physics.startSystem(_game.physics.ARCADE);
      _cursors = _game.input.keyboard.createCursorKeys();
    },
    update: function() {
      //  Collide the player and the stars with the platforms
      //_game.physics.collide(_sprite,  Level.getPlatforms() );

      //_game.physics.overlap(_sprite, Level.getStars(), _collectStar, null, this);

      //  _sprite.body.velocity.x = 0;

      if (_cursors.left.isDown && _cursors.right.isDown) {
        _game.physics.arcade.accelerationFromRotation((_sprite.rotation - 89.6), 200, _sprite.body.acceleration);
        _sprite.body.angularVelocity = 0;
        _sprite.animations.play('forward');
        HUD.depleteFuel(.1);
      }
      else if (_cursors.left.isDown && _cursors.right.isUp) {
        _game.physics.arcade.accelerationFromRotation(_sprite.rotation, -200, _sprite.body.acceleration);
        _sprite.body.angularVelocity = _playerRotVel;
        _sprite.animations.play('left');
        HUD.depleteFuel(.05);
      }
      else if (_cursors.right.isDown && _cursors.left.isUp) {
        _game.physics.arcade.accelerationFromRotation(_sprite.rotation, 200, _sprite.body.acceleration);
        _sprite.body.angularVelocity = -_playerRotVel;
        _sprite.animations.play('right');
        HUD.depleteFuel(.05);
      }
      else {
        _sprite.body.angularVelocity = 0;
        _sprite.body.acceleration.set(0);
        _sprite.frame = 0;
      }
      HUD.depleteOxygen();
      HUD.updateOxygenText();
      HUD.updateFuelText();
      _screenWrap(_sprite);
    }
  }
});
