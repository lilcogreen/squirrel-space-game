/*
HUD module
Dependency: null
*/
define(function(){

    //Private variables
    var _game = null,
        _score = 0,
        _scoreText = null,
        _oxygen = 0,
        _oxygenText = null,
        _fuel = 0,
        _fuelText = null;

    //Public functions
    return{
        init: function(game) {
            _game = game;
        },
        create: function() {
		        _scoreText = _game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#d7adf0' });
            _oxygenText = _game.add.text(16, 36, 'oxygen: 0', { fontSize: '32px', fill: '#d7adf0' });
            _fuelText = _game.add.text(16, 56, 'fuel: 0', { fontSize: '32px', fill: '#d7adf0' });
        },
        addToScore: function(value) {
            _score+=10;
        },
        updateScoreText: function() {
            _scoreText.content = 'Score: ' + _score;
        },
        addToOxygen: function(value) {
            _score+=10;
        },
        updateOxygenText: function() {
            _oxygenText.content = 'Oxygen: ' + _score;
        },
        addToFuel: function(value) {
            _score+=10;
        },
        updateFuelText: function() {
            _fuelText.content = 'Fuel: ' + _score;
          }
    }
});
