/*
This is the main entry point of the game
Dependencys: phaser.min.js, Player.js, Level.js and HUD.js
We can use phaser.min with Phaser namespace
*/
require(['module/Player','module/Level','module/HUD', 'module/Thing'],function(Player,Level,HUD, Thing){
    var _game = new Phaser.Game(800, 600, Phaser.CANVAS, 'space-squirrel-saga', { preload: preload, create: create, update: update });
    //var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'space-squirrel-saga', { preload: preload, create: create, update: update, render: render });

    function preload() {
        Level.init(_game);
        Level.preload();

        Player.init(_game);
        Player.preload();

        Thing.init(_game);
        Thing.preload();

        HUD.init(_game);
        //HUD.preload();
    }

    function create() {
        Level.create();
        Player.create(_game);
        Thing.create(_game);
        HUD.create();
    }

    function update() {
        Level.update();
        Player.update();
        Thing.update();
    }

});
