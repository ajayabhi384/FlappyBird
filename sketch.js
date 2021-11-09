var back 
var bird,birdimg
var pipe1img,pipe2img
var obs1
var obs2
var PLAY=1;
var END=0;
var gameState=PLAY
var obs1group,obs2group
var score=0
var gameOverimg,gameOver


function preload(){
back=loadImage("background.png")
birdimg=loadImage("FlappyBird.png")
pipe1img=loadImage("pipe1.png")
pipe2img=loadImage("pipe2.png")
gameOverimg=loadImage("gameOver.png")
}


function setup(){
createCanvas(800,400)
bird =createSprite(100,20,10,10);
bird.addImage("bird",birdimg)
bird.scale=0.3;
//bird.debug=true
gameOver=createSprite(380,220,10,10)
gameOver.addImage("gameOver",gameOverimg)
gameOver.visible=false
bird.setCollider("circle",0,0,20)
obs1group=new Group()
obs2group=new Group() 
}
  

function  draw (){
background(back)
if(gameState===PLAY){
  score=score+Math.round(frameCount/1200)

    if(keyWentDown("space")){

    bird.velocityY=-10
    }
   bird.velocityY=bird.velocityY+0.5;
  if(obs1group.isTouching(bird)||obs2group.isTouching(bird)){
   gameState=END
  }
  if(bird.y<0||bird.y>600){
  gameState=END
  }
  pipe1()
  pipe2()
}

if(gameState===END){
gameOver.visible=true
fill("red")
textSize(30)
text("Want to PLAY Again Reload!",200,330)
obs1group.setVelocityXEach(0)
obs2group.setVelocityXEach(0)
obs1group.destroyEach()
obs2group.destroyEach()
obs1group.setLifetimeEach(-1)
obs2group.setLifetimeEach(-1)



}

drawSprites();
textSize(20)
fill("red")
text("score="+score,30,20)

fill(0)
textSize(15)
text("Press Space to Fly!",170,20)
}
  
function pipe1(){
if(frameCount%150===0){
  obs1=createSprite(700,650,40,10)
  obs1.y=Math.round(random(500,550))
  obs1.addImage("pipe1",pipe1img)
  obs1.scale=0.5;
  
  obs1.velocityX=-2;
  obs1.lifetime=300
  obs1group.add(obs1)
}
}  
function pipe2(){
  if(frameCount%150===0){
    obs2=createSprite(700,-5,40,10)
    obs2.y=Math.round(random(-5,5))
    obs2.addImage("pipe1",pipe2img)
    obs2.scale=0.5;
    obs2.velocityX=-2
    obs2.lifetime=300
    obs2group.add(obs2)
  }
}
