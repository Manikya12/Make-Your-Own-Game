
var player
var ground, groundImg
var ground2
 var ground3
 var ground4
var qimg, bimg,q1,b1
var WANIME, IDLE, WANIMEB
var blocks
var cb1img,cb2img, cb1,cb2
var tImg, t1, t2,t3 
var p1,p2,p3, pImg
var br1,br2,brImg
var plant1, plantImg
var pipe1, pipeImg
var r1, rimg
var s1, simg 

function setup() {
  createCanvas(6000,500);

  player=createSprite(40,450,50,50)
  player.addAnimation("idle",IDLE)
  player.addAnimation("walking",WANIME)
  player.addAnimation("walkingb",WANIMEB)
  player.scale=0.5
 
  q1= new CB (300,300,qimg,0.14)
  
  q2=new CB(500,200,qimg,0.14)

  bf1= new CB(450,300,bf1Img,0.14)

  bf2= new CB(564,314,bf2Img,0.14)

  bf3= new CB(800,260,bf3Img,0.14)
  
  bf4= new CB(1000,300,bf4Img,0.14)

  bf5= new CB(2900,320,bf5Img,0.15)

  q3=new CB(2920,200,qimg,0.14)
  
  t1=new CB(1300,330,tImg,0.12)

  p1= new CB(1300,350,pImg,0.6)

  t2=new CB(1850,330,tImg,0.12)

  p2= new CB(1850,350,pImg,0.6)

  p3= new CB(1500,350,pImg,0.6)

  plant1= new Obstacle(1350,420,plantImg,0.4)

  plant2= new Obstacle(1450,420,plantImg,0.4)

  plant2= new Obstacle(1550,420,plantImg,0.4)

  plant2= new Obstacle(1650,420,plantImg,0.4)

  plant2= new Obstacle(1750,420,plantImg,0.4)

  cb1=new CB(2415,370,cb1img,0.25)

  cb2=new CB(2625,350,cb2img,0.25)

  cb3=new CB(3365,370,cb1img,0.25)

  cb4=new CB(3575,350,cb2img,0.25)

  r1= new CB(3700,400, rimg, 0.04 )

  r2= new CB(3900,300, rimg, 0.06 )

  r3= new CB(4100,300, rimg, 0.06 )

  r4= new CB(4400,300, rimg, 0.06 )

  s1= new Obstacle(4150,400, simg, 0.15)

  ground=new Ground(420,470)

  ground2=new Ground(1200,470)

  ground3=new Ground(1950,470)

  ground4=new Ground(2900,470)

  ground5=new Ground(3850,470)

  ground6=new Ground(4600,470)

  ground7=new Ground(5400,470)


  invisibleGround=createSprite(3000,470,6000,20)
  invisibleGround.visible=false

}

function preload(){
  groundImg=loadImage("Ground.png")
  qimg=loadImage("QBS.jpg")
  bimg=loadImage("brick.png")
  WANIME= loadAnimation("A/AW/AW 1.png","A/AW/AW 2.png","A/AW/AW 3.png")
  WANIMEB=loadAnimation("A/AWB/AW 1.png","A/AWB/AW 2.png","A/AWB/AW 3.png")
  IDLE=loadAnimation("A/AW/AW 1.png")
  cb1img=loadImage("cb1.png")
  cb2img=loadImage("cb 2.png")
  tImg=loadImage("tree.png")
  pImg=loadImage("platform.png")
  plantImg=loadAnimation("plant1.png","plant1.png","plant1.png","plant2.png")
  bf1Img=loadImage("bf2.png")
  bf2Img=loadImage("bf1.png")
  bf3Img=loadImage("bf1.png")
  bf4Img=loadImage("bf4.png")
  bf5Img=loadImage("bf1.png")
  rimg=loadImage("rock.png")
  simg= loadImage("spikes.png")
}



function draw() {
  background("skyblue");  
 
  if(keyWentDown("D")){
    player.velocityX=7
    player.changeAnimation("walking")
  }
 
  if(keyWentUp("D")){
    player.velocityX=0
    player.changeAnimation("idle")
  }  

  if(keyWentDown("A")){
    player.velocityX=-7
    player.changeAnimation("walkingb")
  }
 
  if(keyWentUp("A")){
    player.velocityX=0
    player.changeAnimation("idle")
  }

  if(keyDown("W")){
   player.velocityY= -10
 } 

 player.velocityY+=2
 player.collide(invisibleGround)
  




  drawSprites()
}

