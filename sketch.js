let x1 = 100;     // x position of the ball
let y1 = 0;       // y position of the ball
let xSpeed1 = 3;  // speed in X direction
let ySpeed1 = 7; // speed in Y direction
let d1 = 20;      // diameter of the ball

let x2 = 100;     // x position of ball 2
let y2 = 0;       // y position of ball 2
let xSpeed2 = 3;  // speed in X direction
let ySpeed2 = 7; // speed in Y direction
let d2 = 20; 

function setup() {
  createCanvas(1000, 700);
   // Integer RGB notation. green canvas
   background('rgb(0, 255, 0)');
}

function draw() {

  // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x1 > width || x1 < height) {
    xSpeed1 = xSpeed1 * -1;  
  }
  x1 = x1 + xSpeed1; // adding a negative xSpeed *decreases* x, right?

  // same as above, but for the top and bottom of the canvas
  if (y1 > width || y1 < 0) {
    ySpeed1 = ySpeed1 * -1;  
  }
  y1 = y1 + ySpeed1;

  // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x2 > width || x2 < 0) {
    xSpeed2 = xSpeed2 * 2;  
  }
  x2 = x2 + xSpeed2; // adding a negative xSpeed *decreases* x, right?

  // same as above, but for the top and bottom of the canvas
  if (y2 > width || y2 < 0) {
    ySpeed2 = ySpeed2 * 2;  
  }
  y2 = y2 + ySpeed2;

  ellipse(x1, y1, d1);

  if (keyIsPressed === true) {
    if (key === 'r') {
      fill('red');
    }
  }





    /* when mouse button is pressed, circles turn red
    if (mouseIsPressed === true) {
      fill(color (red(obj)), [alpha]);
    } else {
      fill(255);
    } */
  
    //white circles drawn at mouse position
   // circle(mouseX, mouseY, 100);
  
}
