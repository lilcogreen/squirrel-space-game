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
        _fuelText = null;

    //Public functions
    return{
        init: function(game) {
            _game = game;
            _oxygen = 100.0;
        },
        create: function() {
		        _scoreText = _game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#d7adf0' });
            _oxygenText = _game.add.text(16, 46, 'oxygen: 100', { fontSize: '32px', fill: '#d7adf0' });
            _fuelText = _game.add.text(16, 76, 'fuel: 100', { fontSize: '32px', fill: '#d7adf0' });
        },
        addToScore: function(value) {
            _score+=value;
        },
        updateScoreText: function() {
            _scoreText.content = 'Score: ' + _score;
        },
        depleteOxygen: function() {
            _oxygen-=.05;
        },
        updateOxygenText: function() {
            _oxygenText.text = 'Oxygen: ' + Math.round(_oxygen);
            if(_oxygen < 0) {
              _oxygen = 0;
            }
        },
        updateFuelText: function(value) {
            _fuelText.text = 'Fuel: ' + Math.round(value);
        }
    }
});
