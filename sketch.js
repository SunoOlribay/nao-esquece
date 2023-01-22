
var trex ,trex_running;
var score;
var ground, InvisibleGround, groundImage;
var cloud, cloudsGroup, cloudImage, cloud2,cloud2Image;
var cacto1, cact02, cacto3, cacto4, cacto5, cacto6, gruposdeCactos;
var PLAY = 1;
var END = 0;
var gameState = PLAY;




//carregar as imagens
function preload(){
  trex_running = loadAnimation("homen1.png", "homen2.png", "homen3.png", "homen4.png", "homen5.png", "homen6.png", "homen7.png", "homen8.png", "homen9.png" )
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloudt-removebg-preview.png")
  cacto1 = loadImage("obstacle1.png")
  cacto2 = loadImage("obstacle2.png")
  cacto3 = loadImage("obstacle3.png")
  cacto4 = loadImage("obstacle4.png")
  cacto5 = loadImage("obstacle5.png")
  cacto6 = loadImage("obstacle6.png")
}

function setup(){
  createCanvas(600,200);

  trex = createSprite(50, 180, 20, 50)
  trex.addAnimation("running", trex_running)
  trex.scale = 0.5;
  trex.x = 50
  ground = createSprite(200, 180, 400,20);
  ground.addImage("ground" , groundImage)
  ground.velocityX = -4;
  ground.x = ground.width /2;
  score = 0;
  


  InvisibleGround = createSprite(200, 190, 400, 10)
  InvisibleGround.visible = false;
  
  cloudsGroup = new Group()
  gruposdeCactos = new Group()
  
  console.log("Hello" + 5);

  score = 0;
  
  
  //crie um sprite de trex
 
}




//fução para rodar tudo certinho
function draw(){
  background("white")
  text("pontuação: " +score, 500,50);
//velocidade do chão
  if(gameState === PLAY){
   ground.velocityX = -4;

//criação do chão
   if (ground.x < 0) {
    ground.x = ground.width/2
   }
   if (keyDown("space") && trex.y >= 100   ){
    trex.velocityY  = -10

   }
 
   trex.velocityY = trex.velocityY + 0.8

   spawnclouds()

   spawnObstacles();


  if(gruposdeCactos.isTouching(trex)){

  }
   

  }
  else if(gameState===END){

  }
  
}


//função para criar os obstaculos
function spawnObstacles(){
  if(frameCount % 90 ===0){
    var cacto = createSprite(400, 165, 10,30)
    cacto.velocityX = -6
    cacto.scale = 0.7
  

    var rand = Math.round(random(1,6))

    switch(rand){
      case 1: cacto.addImage(cacto1);
      break;
      case 2: cacto.addImage(cacto2);
      break;
      case 3: cacto.addImage(cacto3);
      break;
      case 4: cacto.addImage(cacto4);
      break;
      case 5: cacto.addImage(cacto5);
      break;
      case 6: cacto.addImage(cacto6);
      break;' '
      default :
      break;
      
  
      cacto.lifetime = 300;
  
    }
   gruposdeCactos.add(cacto)

  }

}





function spawnclouds(){
  if(frameCount % 180 ===0){
    cloud = createSprite(600, 100,40,10)
    cloud.addImage(cloudImage);
    cloud.y=Math.round(random(10,70));
    cloud.scale = 0.1;
    cloud.velocityX = -3;
    cloudsGroup.add(cloud)
    cloud.lifetime = 134;

    //ajustar a profundidade
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
}
