let birch;
let points, points1;
let word = "Hi";
let word1 = "I'm Billy";
let x, x1;
let y, y1;
let size = 80;
let sample = 0.2;
let vehs = [];

function preload() {
  birch = loadFont("Helvetica.ttf");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(400, 240);
  x = width * 0.1;
  y = height * 0.35;
  x1 = width * 0.1;
  y1 = height * 0.35 + size + 30;
  points = birch.textToPoints(word, x, y, size, {
    sampleFactor: sample
  });
  points1 = birch.textToPoints(word1, x1, y1, size, {
    sampleFactor: sample
  });
  noStroke();
  fill(0);

  for (let i = 0; i < points.length; i++) {
    let pt = points[i];

    let veh = new Veh(pt.x, pt.y);
    vehs.push(veh);
  }

  for (let i = 0; i < points1.length; i++) {
    let pt1 = points1[i];

    let veh = new Veh(pt1.x, pt1.y);
    vehs.push(veh);
  }
}

function draw() {
  background(0);

  //textFont(birch);
  textSize(size);
  fill(255);
  //text(word, x, y);

  for (let i = 0; i < vehs.length; i++) {
    let v = vehs[i];
    v.behaviors();
    v.update();
    v.show();
  }

  //     let c = noise(i + frameCount * 0.01 ) * 255;
  //     fill(50, 50,50);

  //     let nx = noise(i * 10.1 + frameCount * 0.01) * 10 - 5.0;
  //     let ny = noise(i * 10.2 + frameCount * 0.01) * 10 - 5.0;

  //     // pt.x += noise(i * 10.1 + frameCount * 0.01) * 2 - 1.0;
  //     // pt.y += noise(i * 10.2 + frameCount * 0.01) * 2 - 1.0;

  //     ellipse(pt.x + nx, pt.y + ny, 3);
}
