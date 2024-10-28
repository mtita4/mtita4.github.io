let mic;
function setup() {
  createCanvas(1000, 1000);
  mic=new p5.AudioIn();
  mic.start();
}

function draw() {
  let vol=mic.getLevel();
  background(220);
  
  beginShape();
  vertex (600 , 500);
  vertex (500 , 400);
  vertex (500 , 300);
  vertex (300 , 200);
  vertex (100 , 100);
  vertex (100 , 400);
  vertex (200 , 500);
  vertex (400 , 600);
  vertex (500 , 700);
  vertex (600 , 900);
  vertex (600 , 700);
  vertex (700 , 900);
  vertex (800 , 700),
  vertex (800 , 500),
  endShape(CLOSE);
  
}
