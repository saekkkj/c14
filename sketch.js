var backgroundImage,ground; 
var balloonRed,balloonImageRed;
var ballonGreen, ballonImageGreen;
var ballonBlue, ballonImageBlue;
var ballonPink, ballonImagePink;
var bowImage,bow;
var arrow,arrowImage
function preload(){
 bowImage= loadImage("bow0.png");
  backgroundImage = loadImage("background0.png");
 balloonImageRed = loadImage("red_balloon0.png");        ballonImageGreen = loadImage("green_balloon0.png");
 ballonImageBlue = loadImage("blue_balloon0.png");
 ballonImagePink = loadImage("pink_balloon0.png");
 arrowImage = loadImage("arrow0.png")
 }
function setup(){
  //creating the canvas
  createCanvas(400,400);
  ground = createSprite(0,0,400,400);
  ground.addImage("ground",backgroundImage);
 // ground.x = ground.width/2;
  ground.scale = 2.3;
  
  bow = createSprite(380,200,50,50);
  bow.addImage("bow",bowImage);

  
  // create Red balloon
  for(var i = 60;i <390; i = i+60){
    balloonRed = createSprite(20,i,1,1);
    balloonRed.addImage("balloonRed",balloonImageRed);
    balloonRed.scale = 0.1;
  } 
 for (var g = 110; g < 390; g = g + 60){
   ballonGreen = createSprite(60,g,1,1);
   ballonGreen.addImage("ballonGreen",ballonImageGreen);
   ballonGreen.scale = 0.1;
 }
 
 for (var b = 130; b < 350; b = b + 60){
   ballonBlue = createSprite(100,b,1,1);
   ballonBlue.addImage("ballonBlue",ballonImageBlue);
   ballonBlue.scale = 0.1;
 }
 for (var p = 150; p < 280; p = p + 60){
   ballonpink = createSprite(140,p,1,1);
   ballonpink.addImage("ballonPink",ballonImagePink);
   ballonpink.scale = 1.09;
 }}
function draw(){
  //background(backgroundImage);
  ground.velocityX = -4;
  if(ground.x < 0){
  ground.x = ground.width/2;
  }
 bow.y = mouseY;
  if (keyWentDown("space")){
    createarrow()
    arrow.y = bow.y;
  }
  drawSprites();
 }
function createarrow(){
 arrow = createSprite(400,200,10,20);
 arrow.scale = 0.3;
 arrow.velocityX = -4;
 arrow.addImage("arrow",arrowImage);
 
}
