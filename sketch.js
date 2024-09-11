let x1 = 100;     // x position of the ball
let y1 = 0;       // y position of the ball
let xSpeed1 = 3;  // speed in X direction
let ySpeed1 = 7; // speed in Y direction
let d1 = 20;      // diameter of the ball

let x2 = 100;     // x position of the ball
let y2 = 0;       // y position of the ball
let xSpeed2 = 3;  // speed in X direction
let ySpeed2 = 7; // speed in Y direction
let d2 = 20; 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220); // try commenting this out!
 
  // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x1 > width || x1 < 0) {
    xSpeed1 = xSpeed1 * -2;  
  }
  x = x + xSpeed1; // adding a negative xSpeed *decreases* x, right?
  
  // same as above, but for the top and bottom of the canvas
  if (y1 > width || y1 < 0) {
    ySpeed1 = ySpeed1 * -2;  
  }
  y1 = y1 + ySpeed1;

  ellipse(x, y, d);
   // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x2 > width || x2 < 0) {
    xSpeed2 = xSpeed2 * -2;  
  }
  x2 = x2 + xSpeed2; // adding a negative xSpeed *decreases* x, right?
  
  // same as above, but for the top and bottom of the canvas
  if (y > width || y < 0) {
    ySpeed = ySpeed2 * -2;  
  }
  y2 = y2 + ySpeed2;
}