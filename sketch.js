
var rect1,rect2,rect3,rect4,rect5;
var joker, jokerImage;
var climber;
var climber2;
var climberImage;
var edges;
var backgroundImage;
var score;
var death;
var coin,coin2;
var coinImage;

function preload(){
  climberImage=loadImage("climber.png")
  jokerImage=loadImage("rjoker.png")
  backgroundImage=loadImage("bgusebackground.png")
  coinImage= loadImage("rcoin.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  climber=createSprite(width/1-width/2,height/2-100)
  climber.scale=1.5
  climber.addImage("climbertop",climberImage)
  rect1=createSprite(width/1-width/2,height/2-115,150,5)
  rect1.visible=false
  joker=createSprite(width/1.4-width/2,height/2+100)
  joker.addImage("joker",jokerImage)
  joker.scale=.6
  rect2=createSprite(width/1-width/2,height/2+230,1200,10)
rect2.shapeColor="blue"
rect2.visible=false;
coin=createSprite(width/.88-width/2,height/2-110)
coin.addImage("coin",coinImage)
coin.scale=.125

climber2=createSprite(width/1-width/2,height/2+100)
climber2.addImage("climber",climberImage)
climber2.scale=1.5

rect3=createSprite(width/1-width/2,height/2+85,150,5)
rect3.visible=false

coin2=createSprite(width/.88-width/2,height/2+60)
coin2.addImage("coin",coinImage)
coin2.scale=.125

rect4=createSprite(width/1.5-width/2,height/2+85,40,40)
rect4.shapeColor="red"
rect4.visible=true

  climber.velocityX=-5
 climber2.velocityX=5
  rect1.velocityX=-5

  rect3.velocityX=5

  score=0
  death=0
  
}

function draw() {
  background(backgroundImage);
 textSize(50)
 fill("blue")
  text("Score: "+score,width/1.5-width/2,height/2-150)
  text("Deaths: "+death,width/1-width/2,height/2-150)
  
 edges=createEdgeSprites();

 climber.bounceOff(edges)
 climber2.bounceOff(edges)
 rect1.bounceOff(edges)
 rect3.bounceOff(edges)

 
if(joker.isTouching(climber)){
  death=death+1
}
if(joker.isTouching(climber2)){
  death=death+1
}

if(joker.isTouching(rect1)){
  joker.x=rect1.x
  joker.y=rect1.y
joker.collide(rect1)
}

if(joker.isTouching(rect3)){
  joker.x=rect3.x
  joker.y=rect3.y
joker.collide(rect3)
}

if(keyDown("UP_ARROW") && joker.y >=20||touches.length>0){
  joker.velocityY=-10;
  touches=[]

}
joker.velocityY = joker.velocityY + 0.8
 
if(joker.isTouching(coin)){
  score=score+5
}
if(joker.isTouching(coin2)){
  score=score+5
}

joker.collide(rect2)




 drawSprites();
    
}

  