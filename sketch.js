function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(208,255,194);
  //Pétalos
  noStroke(128,0,128);
fill(210, 115, 255);
  ellipse(200,110,80,80);
  //abajo
   ellipse(140,140,80,80);
  ellipse(140,260,80,80);
  ellipse(260,260,80,80);
  ellipse(260,140,80,80);
  ellipse(110,200,80,80);
  ellipse(200,290,80,80);
  ellipse(290, 200,80,80);
  
 
  
  //Carita
  stroke(0);
  fill(255,253,115);
  ellipse(200, 200, 100, 100);
  //Ojos
  fill (0,0,0);
  noStroke();
  ellipse(180, 190, 10,20);
  ellipse(220,190,10,20);
  //Boca
  arc(200, 210, 50, 50, 0, HALF_PI+HALF_PI);
  noStroke
  
}
