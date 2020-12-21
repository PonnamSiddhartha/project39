//Global Variables
var obstacle,banana,bananaImg,obstacleImg,ObstaclesGroup,BananasGroup,backImg,score,monkey,monkeyImg,back
var PLAY=1;
var END=0;
var gameState=PLAY;
var gameOverImg,gameOver,restartImg,restart


function preload(){
  back=loadImage("jungle2.jpg");
  
  monkeyImg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png",
  "Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png",
   "Monkey_08.png","Monkey_09.png", "Monkey_10.png") 
  bananaImg=loadImage("Banana.png")
  obstacleImg=loadImage("stone.png")

}


function setup() {
  createCanvas(600,300);
  if(gameState===PLAY){
  backImg=createSprite(400,300,800,500);
  backImg.addImage("backImg",back);
    
  
 ground= createSprite(400,275,800,10)
 ground.visible=false;
   invisibleGround=createSprite(400,270,800,10);
 invisibleGround.visible=false;
   monkey=createSprite(200,257,20,20);
  monkey.addAnimation("monkey",monkeyImg);
   monkey.scale=0.15
   monkey.setCollider("circle",0,0,120);
  
  ObstaclesGroup = new Group();
BananasGroup=new Group();
  }
}




var score = 0;
function draw(){
 background(200);
  textSize(20);
fill("white")
text("Score: "+ score, 250, 100);
monkey.collide(invisibleGround)

 if(keyDown("space")){
    monkey.velocityY=-12     
   }
  
   monkey.velocityY = monkey.velocityY + 0.8;
 if(monkey.isTouching(BananasGroup)){
    score=score+1
    }
    
    if(ObstaclesGroup.isTouching(monkey)){
      
      ObstaclesGroup.setVelocityXEach(0)
       ObstaclesGroup.destroyEach();
       gameState=0;
      
    }
       
   if(BananasGroup.isTouching(monkey)){
      
  
       BananasGroup.destroyEach(); 
    
      
      
    }
    if(gameState===0){
      textSize(20)
      text("GameOver Your Score is: "+score,250,150);
      monkey.destroyEach();
      BananasGroup.destroyEach();
      ObstaclesGroup.destroyEach();
      score.visible=false;
    }
       
  Obstacles();
Bananas();
  
  
camera.position.x = mouseX;
  
  
  
  drawSprites();
  text("Score:"+score,500,50)
}



          

function Obstacles() {
  if(World.frameCount % 100 === 0) {
    var obstacle = createSprite(700,270,20,20)
   obstacle.velocityX = -5
    
    
    

    obstacle.addImage("obstacleImg",obstacleImg)
           
    obstacle.scale = 0.2;
    obstacle.lifetime = 200;
    
    ObstaclesGroup.add(obstacle);
  }
}
function Bananas(){
  if(World.frameCount % 80 === 0) {
    var banana = createSprite(780,80,10,40);
   banana.velocityX = -5
    
    
   // banana.setAnimation("Banana")
    banana.addImage("Banana",bananaImg);
               
    banana.scale = 0.05;
    banana.lifetime = 200;
  
BananasGroup.add(banana);
  }
}