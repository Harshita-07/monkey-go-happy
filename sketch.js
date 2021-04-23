var PLAY = 1;
var END = 0;
var monkey , monkey_running, ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(500, 500);
  
  monkey = createSprite(100, 455, 20, 20);
  monkey.addAnimation("monkry image", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(500, 490, 1000, 30);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background("lightblue");
  
  if(ground.x<0) {
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")&& monkey.y>=139) {
    monkey.velocityY = -12
  }
  monkey.velocityY  = monkey.velocityY + 0.8;
  
   monkey.collide(ground);
  
  food();
  obstacle();
  
  drawSprites();  
}

function food() {
  if(frameCount%80 === 0) {
    banana = createSprite(500, 350, 30, 30)
    banana.Y = Math.round(random(120,200)); 
    banana.addImage(bananaImage);
    banana.scale = 0.1
    banana.velocityX = -7 
    banana.lifetime = 100;
    FoodGroup.add(banana);
    
  }
}

function obstacle() {
   if (frameCount % 80 === 0){
   var obstacle = createSprite(500,450,10,30);
   obstacle.velocityX = -(6 + score/100);
   obstacle.addImage(obstacleImage);          
   obstacle.scale = 0.1;
   obstacle.lifetime = 100;
   obstacle.collide(ground);
   obstacleGroup.add(obstacle);
 }
}


