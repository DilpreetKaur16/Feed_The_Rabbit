var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg= loadImage("apple.png");
  leaveImg= loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
  
  
}


function draw() {
  background(0);
  rabbit.x= mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  spawnApples();
  spawnLeaves();
  
  
  drawSprites();
}

function spawnApples(){
  if(frameCount % 80 === 0){
  apple=createSprite(200,10);
  apple.x= Math.round(random(20,370))
  apple.addImage(appleImg)
  apple.scale=0.08;
  apple.velocityY=3;
  rabbit.depth=apple.depth;
  rabbit.depth=rabbit.depth+2; 
}
}

function spawnLeaves(){
  if(frameCount % 50 === 0){
  leave=createSprite(200,10);
  leave.x= Math.round(random(50,300))
  leave.addImage(leaveImg)
  leave.scale=0.08;
  leave.velocityY=3;
  leave.depth=rabbit.depth;
  rabbit.depth=rabbit.depth+2; 
}
}