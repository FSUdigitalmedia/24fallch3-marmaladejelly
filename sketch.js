let x = 100;     // x position of the ball
let y = 0;       // y position of the ball
let xSpeed1 = 3;  // speed in X direction
let ySpeed = 7; // speed in Y direction
let d = 20;      // diameter of the ball

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220); // try commenting this out!
 
  // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x > width || x < 0) {
    xSpeed1 = xSpeed1 * -2;  
  }
  x = x + xSpeed1; // adding a negative xSpeed *decreases* x, right?
  
  // same as above, but for the top and bottom of the canvas
  if (y > width || y < 0) {
    ySpeed = ySpeed * -2;  
  }
  y = y + ySpeed;

  ellipse(x, y, d);
}