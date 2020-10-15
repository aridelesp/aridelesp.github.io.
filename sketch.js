//var flower1;
//var flower2;
//var flower3;
var flowers = [];

function setup() {
  createCanvas(400, 400);
  frameRate(5);

  for (i = 0; i < 100; i++) {
    var x = random(0, width);
    var y = random(0, height);
    var t = random(10, 20);
    flowers[i] = new Flower(x, y, t);
  }




}

function draw() {
  background(208, 255, 194);

  for (i = 0; i < 100; i++) {
    flowers[i].mostrar();
    flowers[i].mover();

  }
  
 





}

class Flower {
  constructor(tempX, tempY, tempT) {
    this.x = tempX; //200
    this.y = tempY; //200
    this.t = tempT; //80

  }
  mostrar() {
    //Pétalos
    ellipseMode(RADIUS);

    noStroke(128, 0, 128);
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(this.x, this.y - this.t * 2.2, this.t, this.t);
    //abajo

    noStroke(128, 0, 128);
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(this.x - this.t * 1.5, this.y - this.t * 1.5, this.t, this.t);

    noStroke(128, 0, 128);
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(this.x - this.t * 1.5, this.y + this.t * 1.5, this.t, this.t);

    noStroke(128, 0, 128);
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(this.x + this.t * 1.5, this.y + this.t * 1.5, this.t, this.t);

    noStroke(128, 0, 128);
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(this.x + this.t * 1.5, this.y - this.t * 1.5, this.t, this.t);

    noStroke(128, 0, 128);
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(this.x - this.t * 2.2, this.y, this.t, this.t);

    noStroke(128, 0, 128);
    fill(random(200, 255), random(200, 255), random(200, 255));
    ellipse(this.x, this.y + this.t * 2.2, this.t, this.t);

    noStroke(128, 0, 128);
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(this.x + this.t * 2.2, this.y, this.t, this.t);






    //Carita
    ellipseMode(RADIUS);
    stroke(0);
    fill(255, 253, 115);
    ellipse(this.x, this.y, this.t * 1.25, this.t * 1.25);

    //Ojos
    fill(0);
    noStroke();
    ellipseMode(RADIUS);
    ellipse(this.x - this.t * 0.5, this.y - this.t * 0.4, this.t * 0.125, this.t * 0.25);
    ellipse(this.x + this.t * 0.5, this.y - this.t * 0.4, this.t * 0.125, this.t * 0.25);

    //Boca
    noStroke
    arc(this.x, this.y + this.t * 0.125, this.t * 0.6, this.t * 0.6, 0, HALF_PI + HALF_PI);

    if (mouseIsPressed) {
      fill(255, 0, 0);
    } else {
      fill(0);
    }
    if (mouseIsPressed) {
      arc(this.x, this.y + this.t * 0.120, this.t * 0.55, this.t * 0.55, 0, HALF_PI + HALF_PI);
      fill(0);
      textSize(25);
      textStyle(ITALIC);
      text ('Hi!', this.x + 50, this.y);
      

    }


  }
  
  mover() {
    this.x = this.x + random (-10, 10);
    this.y = this.y + random (-10, 10);
    
    //this.x = this.x + 1;
    //this.y = this.y + 1;
  }

  




}
