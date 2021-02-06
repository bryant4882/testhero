class Veh {
  constructor(x, y) {
    this.pos = createVector(random(width), random(height));
    this.target = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.r = 4;
    this.maxspeed = 7;
    this.maxforce = 1;
  }

  behaviors() {
    var arrive = this.arrive(this.target);
    var mouse = createVector(mouseX, mouseY);
    var flee = this.flee(mouse);

    arrive.mult(1);
    flee.mult(5);

    this.applyForce(arrive);
    this.applyForce(flee);
  }

  applyForce(f) {
    this.acc.add(f);
  }

  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  }

  show() {
    stroke(255);
    strokeWeight(this.r);

    point(this.pos.x, this.pos.y);
    // line(
    //   this.pos.x + nx,
    //   this.pos.y + ny,
    //   this.pos.x + this.vel.x + nx,
    //   this.pos.y + this.vel.y + ny
    // );
  }

  arrive(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    var speed = this.maxspeed;
    if (d < 40) {
      speed = map(d, 0, 100, 0, this.maxspeed);
    }
    desired.setMag(speed);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  }

  flee(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    if (d < 20) {
      desired.setMag(this.maxspeed);
      desired.mult(-1);
      var steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxforce);
      return steer;
    } else {
      return createVector(0, 0);
    }
  }
}

// function Veh(x, y){
//   this.pos = createVector(x, y);
//   this.target = createVector(x, y);
//   this.vel = createVector();
//   this.acc = createVector();
//   this.r = 8;
//   this.maxspeed = 5;
// }

// Veh.prototype.behaviors = function(){
//   let seek = this.seek(this.target);
//   this.applyForce(seek);

// }

// Veh.prototype.applyForce = function(f){
//   this.acc.add(f);
// }

// Veh.prototype.update = function() {
//   this.pos.add(this.vel);
//   this.vel.add(this.acc);
//   this.acc.mult(0);
// }

// Veh.prototype.show = function(){
//   stroke(255);
//   strokeWeight(4);
//   point(this.pos.x, this.pos.y);

// }

// Veh.prototype.seek = function(target){
//   let desired = p5.Vector.sub(target, this.pos);
//   desired.setMag(this.maxspeed);
//   let steer = p5.Vector.sub(desired, this.vel);
//   return steer;
// }
