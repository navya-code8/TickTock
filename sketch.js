var hr;
var mn;
var sc;
var hrAngle;
var mnAngle;
var scAngle;




function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,0,0);
  

  hr = hour();
  mn = minute();
  sc = second();
  hrAngle = map(hr,0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);
  angleMode(DEGREES)

  fill("black")
  stroke(255,0,0)
  strokeWeight(7)
  arc(200,200,375,375,270,scAngle)

  stroke(0,255,0)
  arc(200,200,360,360,270,mnAngle)

  stroke(0,0, 255);
  arc(200,200,345,345,270,hrAngle)
    
  strokeWeight(0)
  fill("white")
  textSize(20)
  text("XII", 185,55)
  text("IX", 40,205)
  text("VI", 190,355)
  text("III", 345,205)
  text( mouseX + ", "+mouseY, mouseX, mouseY)  
  translate(200,200)
 
  push();
  rotate(scAngle)
  stroke(255,0,0);
  strokeWeight(3);
  line(0,0,140,0)
  pop()
 
  push();
  rotate(mnAngle)
  stroke(0,255,0);
  strokeWeight(5);
  line(0,0,115,0)
  pop();

  push();
  rotate(hrAngle)
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,70,0)
  pop();

  drawSprites();
}