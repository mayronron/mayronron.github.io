
var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";
function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
}
function draw() {
  if (gameState == "L1") {
    levelOne();
  }
  if (gameState == "L2") {
    levelTwo();
  }
  if (gameState == "L3") {
    levelThree();
  }
  if (gameState == "WIN") {
    congratulationsScreen();
  }

  fill(255);
  text("Diamonds: " + score, width/2, 40);
}

//make the ball into a diamond
function diamond() {
  noStroke();
  fill(0, 220, 220);
  quad(ballx, bally-20, ballx+20, bally,
       ballx, bally+20, ballx-20, bally);
}

//overworld
function levelOne() {
  background(100, 180, 80);
  fill(100, 70, 40);
  rect(0, 530, 600, 70);
  fill(255);
  text("Level 1: Overworld", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score > 10) {
    gameState = "L2"; //GO TO THE NETHER
  }
  diamond();
}
//nether 
function levelTwo() {
  background(150, 40, 30);
  fill(255, 100, 0);
  rect(0, 530, 600, 70);
  fill(255);
  text("Level 2: Nether", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score > 25) { //GO TO THE END
    gameState = "L3";
  }
  diamond();
}
//the end 
function levelThree() {
  background(40, 20, 70);
  fill(100, 60, 120);
  rect(0, 530, 600, 70);
  fill(255);
  text("Level 3: The End", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    ballSize = ballSize - 1;
    score = score + 1;
  if (score > 50) { // winnnnn screeeen!!!
    gameState = "WIN";
  }
  }
  diamond();
}
function congratulationsScreen() {
  background(20, 150, 80);

  fill(255, 220, 0);
  textSize(40);
  text("Congratulations!", width / 2, 220);

  fill(255);
  textSize(24);
  text("You collected more than 50 diamonds!", width / 2, 280);
  text("Final Score: " + score, width / 2, 330);
}
