function setup() {
  createCanvas(900, 900);
}
function draw() {
  background(210);
  stroke(25);
  strokeWeight(10);
//no outline
  noStroke();
// hoodie/bodyu
  fill(190, 190, 185);
  ellipse(450, 850, 700, 450);
// Neck
   fill(220, 170, 130);
  rect(395, 650, 150, 180);
//face
    fill(220, 170, 130);
  ellipse(450, 480, 430, 540);
//ears
  ellipse(245, 490, 70, 120);
  ellipse(655, 490, 70, 120);
//hair
  fill(35, 25, 25);
  ellipse(450, 260, 450, 220);
  triangle(230, 300, 300, 170, 370, 330);
  triangle(300, 250, 390, 130, 450, 300);
  triangle(390, 250, 500, 130, 540, 310);
  triangle(500, 250, 620, 170, 675, 330);
//eyes
  fill(245);
  ellipse(365, 450, 105, 55);
  ellipse(535, 450, 105, 55);
// pupils
  fill(35, 25, 25);
  ellipse(365, 450, 32, 38);
  ellipse(535, 450, 32, 38);
// both eyebrows
  stroke(45, 30, 25);
  strokeWeight(12);
  line(315, 410, 405, 400);
  line(495, 400, 585, 410);
// nose
  noStroke();
  fill(165, 95, 65);
  triangle(450, 455, 415, 555, 485, 555);
// mouth
 fill(150, 40, 60);
  arc(450, 600, 150, 70, 0, PI);
}
