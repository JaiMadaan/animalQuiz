var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  bg2= loadImage("animal.jpg")
  
}

function setup() {
  createCanvas(displayWidth,displayHeight-150);
  security = new Security();
  system = new System();

  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score,displayWidth/2,displayHeight-750);
// add code for changing the background to the treasure background
  

  if(score === 10) {
    clear()
    background(bg2)
    fill("green")
    textSize(40);
    text(" ANIMALS ",displayWidth/2,displayHeight-750);
  }

  drawSprites()
}