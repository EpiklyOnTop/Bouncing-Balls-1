var life = 6 ;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;



  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
car1.velocityY = 7;
car2.velocityY = -7;
car3.velocityY = 7;
car4.velocityY = -7;
  
 

function draw() {
   background("white");
   textSize(30);
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(350,120,52,140);
  
   car1.bounceOff(boundary1);
   car1.bounceOff(boundary2);
   car2.bounceOff(boundary1);
   car2.bounceOff(boundary2);
   car3.bounceOff(boundary1);
   car3.bounceOff(boundary2);
   car4.bounceOff(boundary1);
   car4.bounceOff(boundary2);
   if (keyDown("d")){
     sam.x = sam.x+5 ;
   }
   if (keyDown("a")){
     sam.x = sam.x-5;
   }
   if (sam.isTouching(car1)) 
       sam.x=20 ;
       life=life-1 ;
   }