let ghosts = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i = 0; i < 12; i++) {
    ghosts.push({
      x: random(50, width-50),
      y: random(50, height-50),
      speed: random(0.01, 0.03),
      size: random(30, 80),
      offset: random(TWO_PI),
    });
  }
}

function draw() {
 setGradient(0, 0, width, height, color(150, 100, 250), color(255, 100, 40));
  
  for (let g of ghosts) {
    drawGhost(g.x, g.y, g.size, g.speed, g.offset);
  }
}

function mousePressed() {
  for (let g of ghosts) {
    g.x = random(50, width-50);
    g.y = random(50, height-50);
  }
}

function setGradient(x, y, w, h, c1, c2) {
  noFill();
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    inter = pow(inter, 5); 
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}

function drawGhost(x, y, s, speed, offset) {
  push();
  
let floatY = sin(frameCount * speed + offset) * 30
  translate(x, y + floatY);
  
  noStroke();
  fill(255);
  ellipse(0, 0, s, s); 
  
  beginShape();
  vertex(-s*0.5, 0);
  vertex(-s*0.5, s*0.7);
  vertex(-s*0.25, s*0.55);
  vertex(0, s*0.7);
  vertex(s*0.25, s*0.55);
  vertex(s*0.5, s*0.7);
  vertex(s*0.5, 0);
  endShape(CLOSE);
  
  fill(255,0,120);
  ellipse(-s*0.15, -s*0.1, s*0.17, s*0.22);
  ellipse(s*0.15, -s*0.1, s*0.17, s*0.22);

  pop();
}

