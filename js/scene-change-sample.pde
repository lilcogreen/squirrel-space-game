// Setup the Processing Canvas
var count = 1;
PImage squirrel;

void setup() {
	squirrel = loadImage("img/space_squirrel.gif");
	size(800, 600);
	drawHomeScreen();
}
mouseClicked = function() {
	count += 1;
    if (count % 2 == 0) {
		drawScene2();
	}
	else {
		drawHomeScreen();
	}
};

