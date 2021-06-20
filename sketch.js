var iss, spacecraft, hasDocked = 0;
var place;
function preload(){
  issImg = loadImage("Images/iss.png");
  spacebg = loadImage("Images/spacebg.jpg");
 spacecraft1 = loadImage("Images/spacecraft1.png");
 spacecraft2 = loadImage("Images/spacecraft2.png");
 spacecraft3 = loadImage("Images/spacecraft3.png");
 spacecraft4 = loadImage("Images/spacecraft4.png");

}

function setup() {
  createCanvas(800,400);
  iss = createSprite(300, 230, 5, 5);
  iss.addImage("issImg", issImg);
  iss.scale=0.9;
  spacecraft = createSprite(700, 300, 50,50);
  place = createSprite(242,254,10,10);
  place.visible = false;
  //spacecraft.addImage("spacecraft", spacecraft1 );
  spacecraft.scale = 0.2;
  if(!hasDocked){
    spacecraft.x = random(1,800);
  }
  spacecraft.setCollider("rectangle",10,-320,80,20);
}

function draw() {
  // spacecraft.debug = true;
  // place.debug = true;
  background(spacebg);  
  spacecraft.addImage("up", spacecraft2);
  if(keyIsDown(LEFT_ARROW)){
    spacecraft.x = spacecraft.x-1;
    spacecraft.addImage("up",spacecraft4)

  }
  if(keyIsDown(RIGHT_ARROW)){
    spacecraft.x = spacecraft.x+1;
    spacecraft.addImage("up",spacecraft3)

  }
  if(keyIsDown(UP_ARROW)){
    spacecraft.y = spacecraft.y-1;
    spacecraft.addImage("up",spacecraft2)
  }
  if(keyIsDown(DOWN_ARROW)){
    spacecraft.y = spacecraft.y+1;
    spacecraft.addImage("up",spacecraft1)

  }
  if(spacecraft.isTouching(place)){
    hasDocked = true;
      fill("white");
    textSize(50)
    text("Docking Successful", 200, 375);
    }
 
  
  drawSprites();
}