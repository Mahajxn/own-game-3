var canvas, backgroundImage;

var wall1,wall2, wall3 , wall4 ,wall5 ,wall6,wall7 ,wall8 ,wall9 ,wall10,all11 , wall12 ;
var respawn1;
var respawn2;
var respawn3;

var edg1,edg2, edg3 , edg4 ;

var ding;

var GameState=1;

var dong1 ;
var dong2 ;
var dong3 ;
var dong4 ;
var dong5;
var dong6;
var dong7 ; 
var dong8 ; 

var score=0;
var form, player, game;
var score=0;

var dingImg;
var dongImg;




function preload(){
 
  dongimg=loadImage('images/clydeeghost.png');
  dingimg=loadImage('images/Pacman .jpg');

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  
  

   wall1 = createSprite(290,120,450,3);
 wall2 = createSprite(290,260,450,3);
 wall3 = createSprite(67,145,3,50);
 wall4 = createSprite(67,235,3,50); 
 wall5 = createSprite(513,145,3,50); 
 wall6 = createSprite(513,235,3,50);
 wall7 = createSprite(41,170,50,3);
wall8 = createSprite(41,210,50,3);
 wall9 = createSprite(537,210,50,3);
 wall10 = createSprite(537,170,50,3);
 wall11 = createSprite(18,190,3,40);
 wall12 = createSprite(561,190,3,40);

 respawn1=createSprite(40,190,40,35);
respawn1.shapeColor="cyan";

 respawn2=createSprite(540,190,40,35);
respawn2.shapeColor="cyan";



 ding = createSprite(40,190,13,13);
// ding.addImage('ding',dingImg);
// dingImg.scale=0.5
ding.addImage('ding',dingimg,scale(0.5));



 dong1 = createSprite(100,130,10,10); 
dong1.shapeColor = "red";
// dong1.addImage('dong1',dongImg);

 dong2 = createSprite(215,130,10,10); 
dong2.shapeColor = "red"; 

 dong3 = createSprite(165,250,10,10);
dong3.shapeColor = "red"; 

 dong4 = createSprite(270,250,10,10);
dong4.shapeColor = "red";

dong5 = createSprite(385,250,10,10); 
dong5 .shapeColor = "red"; 

 dong6 = createSprite(340,130,10,10);
dong6.shapeColor = "red"; 

 dong7 = createSprite(480,250,10,10);
dong7.shapeColor = "red";

dong8 = createSprite(425,130,10,10); 
dong8 .shapeColor = "red"; 

edg1 = createSprite(300,10,600,3);
edg1.shapeColor= "black";
edg2 = createSprite(125,340,1000,3);
edg2.shapeColor="black";
edg3 = createSprite(590,125,3,500);
edg3.shapeColor="black";
edg4 = createSprite(10,300,3,700);
edg4.shapeColor="black"; 

dong1.velocityY=3;
dong2.velocityY=3;
dong3.velocityY=-3;
dong4.velocityY=-3;
dong5.velocityY=3;
dong6.velocityY=3;
dong7.velocityY=-3;
dong8.velocityY=-3;




 
  game = new Game();
  
}



function draw(){
   
  createCanvas(600,350);

  background('black');

  textSize(25);
  text("deaths: "+score,10,50);

  ding.addImage('ding',dingimg);
  dong1.addImage('dong1',dongimg);
  dong2.addImage('dong2',dongimg);
  dong3.addImage('dong3',dongimg);
dong4.addImage('dong4',dongimg);
dong5.addImage('dong5',dongimg);
dong6.addImage('dong6',dongimg);
dong7.addImage('dong7',dongimg);
dong8.addImage('dong8',dongimg);

  if(keyDown(UP_ARROW)){
    ding.y -=5;
  }

  if(keyDown(DOWN_ARROW)){
    ding.y +=5;
  }

  if(keyDown(LEFT_ARROW)){
    ding.x -=5;
    
  }

  if(keyDown(RIGHT_ARROW)){
    ding.x +=5;
  }
   
  if(GameState===1){
       dong1.bounceOff(wall1);
  dong2.bounceOff(wall1);
 dong3.bounceOff(wall1);
 dong4.bounceOff(wall1);
 dong1.bounceOff(wall2);
 dong2.bounceOff(wall2);
 dong3.bounceOff(wall2);
 dong4.bounceOff(wall2);

 dong5.bounceOff(wall1);
  dong6.bounceOff(wall1);
 dong7.bounceOff(wall1);
 dong8.bounceOff(wall1);
 dong5.bounceOff(wall2);
 dong6.bounceOff(wall2);
 dong7.bounceOff(wall2);
 dong8.bounceOff(wall2);

 ding.bounceOff(wall11);
 ding.bounceOff(wall12);

 
  }

 
  if (ding.isTouching(dong1)||ding.isTouching(dong2)||ding.isTouching(dong3)||ding.isTouching(dong4)||ding.isTouching(dong5)||ding.isTouching(dong6)||ding.isTouching(dong7)||ding.isTouching(dong8)) {
    ding.x=40
    ding.y=190
    score=score+1
  }



  

  

  if (ding.isTouching(respawn2)) {
    wall1.destroy();
    wall2.destroy();
    wall3.destroy();
    wall4.destroy();
    wall5.destroy();
    wall6.destroy();
    wall7.destroy();
    wall8.destroy();
    wall9.destroy();
    wall10.destroy();
    wall11.destroy();
    wall12.destroy();
    respawn1.destroy();
    respawn2.destroy();

    
 textSize(50);
 text(":) you Win :)");

    
//     GameState=2;
    }


//   if(GameState===2){
//     dong1.bounceOff(edg1);
//     dong1.bounceOff(edg2);
//     dong1.bounceOff(edg3);
//     dong1.bounceOff(edg4);

//     dong2.bounceOff(edg1);
//     dong2.bounceOff(edg2);
//     dong2.bounceOff(edg3);
//     dong2.bounceOff(edg4);

//     dong3.bounceOff(edg1);
//     dong3.bounceOff(edg2);
//     dong3.bounceOff(edg3);
//     dong3.bounceOff(edg4);

//     dong4.bounceOff(edg1);
//     dong4.bounceOff(edg2);
//     dong4.bounceOff(edg3);
//     dong4.bounceOff(edg4);

//     dong5.bounceOff(edg1);
//     dong5.bounceOff(edg2);
//     dong5.bounceOff(edg3);
//     dong5.bounceOff(edg4);

//      dong6.bounceOff(edg1);
//      dong6.bounceOff(edg2);
//      dong6.bounceOff(edg3);
//      dong6.bounceOff(edg4);
    
//     dong7.bounceOff(edg1);
//     dong7.bounceOff(edg2);
//     dong7.bounceOff(edg3);
//     dong7.bounceOff(edg4);

//     dong8.bounceOff(edg1);
//     dong8.bounceOff(edg2);
//     dong8.bounceOff(edg3);
//     dong8.bounceOff(edg4);

//     dong1.bounceOff(dong2);
//     dong1.bounceOff(dong3);
//     dong1.bounceOff(dong5);
//     dong1.bounceOff(dong6);
//     dong1.bounceOff(dong7);
//     dong1.bounceOff(dong8);

//     dong2.bounceOff(dong1);
//     dong2.bounceOff(dong2);
//     dong2.bounceOff(dong3);
//     dong2.bounceOff(dong4);
//     dong1.bounceOff(dong2);
//     dong1.bounceOff(dong3);
//     dong1.bounceOff(dong5);
//     dong1.bounceOff(dong6);

//     dong3.bounceOff(edg1);
//     dong3.bounceOff(edg2);
//     dong3.bounceOff(edg3);
//     dong3.bounceOff(edg4);

//     dong4.bounceOff(edg1);
//     dong4.bounceOff(edg2);
//     dong4.bounceOff(edg3);
//     dong4.bounceOff(edg4);

//     dong5.bounceOff(edg1);
//     dong5.bounceOff(edg2);
//     dong5.bounceOff(edg3);
//     dong5.bounceOff(edg4);

//      dong6.bounceOff(edg1);
//      dong6.bounceOff(edg2);
//      dong6.bounceOff(edg3);
//      dong6.bounceOff(edg4);
    
//     dong7.bounceOff(edg1);
//     dong7.bounceOff(edg2);
//     dong7.bounceOff(edg3);
//     dong7.bounceOff(edg4);

//     dong8.bounceOff(edg1);
//     dong8.bounceOff(edg2);
//     dong8.bounceOff(edg3);
   

//     ding.bounceOff(edg1);
//     ding.bounceOff(edg2);
//     ding.bounceOff(edg3);
//    ding.bounceOff(edg4);

//    dong1.velocityX=5;
//    dong2.velocityX=5;
//    dong3.velocityX=-5;
//    dong4.velocityX=-5;
//    dong5.velocityX=5;
//    dong6.velocityX=5;
//    dong7.velocityX=-5;
//    dong8.velocityX=-5;
   
   

//    respawn3=createSprite(590,10,40,35);
// respawn3.shapeColor="cyan"; 

// if(ding.isTouching(respawn3)){
  
//   wall1.destroy();
//   wall2.destroy();
//   wall3.destroy();
//   wall4.destroy();
//   wall5.destroy();
//   wall6.destroy();
//   wall7.destroy();
//   wall8.destroy();
//   wall9.destroy();
//   wall10.destroy();
//   wall11.destroy();
//   wall12.destroy();
//   respawn1.destroy();
//   respawn2.destroy();
//   dong1.destroy()
//   dong2.destroy();
//  dong3.destroy();
//  dong4.destroy();
//  dong5.destroy();
//  dong6.destroy();
//  dong7.destroy();
//  dong8.destroy();

//  textSize(50);
//  text(":) you Win :)");

  

// }
   
//   }
   
  
  
    
  drawSprites()
}


 function hide(){
 respawn3.hide();
 }
 
 function unhide(){
   respawn3.unhide();
 } 





