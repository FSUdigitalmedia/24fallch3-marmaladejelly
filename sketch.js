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
  createCanvas(400, 400);
}

function draw() {
  background(0);

  // Update the first ball
  if (x1 > width - d1 / 2 || x1 < d1 / 2) {
    xSpeed1 *= -1;
  }
  x1 += xSpeed1;
  
  if (y1 > height - d1 / 2 || y1 < d1 / 2) {
    ySpeed1 *= -1;
  }
  y1 += ySpeed1;

  // Draw the first ball
  fill(255); // white
  ellipse(x1, y1, d1);

  // Update the second ball
  if (x2 > width - d2 / 2 || x2 < d2 / 2) {
    xSpeed2 *= -1;
  }
  x2 += xSpeed2;
  
  if (y2 > height - d2 / 2 || y2 < d2 / 2) {
    ySpeed2 *= -1
}


/* function draw() {
  background(220);
  
  // Update the first ball
   if (x1 > width - d1 / 2 || x1 < d1 / 2) {
    xSpeed1 *= -1;

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
  y = y1 + ySpeed1;

  ellipse(x2, y2, d2);
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

    //when mouse button is pressed, circles turn red
    if (mouseIsPressed === true) {
      fill(color (red(obj)), [alpha]);
    } else {
      fill(255);
    }
  
    //white circles drawn at mouse position
    circle(mouseX, mouseY, 100);
  
}